// Add namespaces to enable security in Oqtane & Dnn despite the differences
#if NETCOREAPP
using Microsoft.AspNetCore.Authorization; // .net core [AllowAnonymous] & [Authorize]
using Microsoft.AspNetCore.Mvc;           // .net core [HttpGet] / [HttpPost] etc.
#else
// 2sxclint:disable:no-dnn-namespaces - 2sxclint:disable:no-web-namespace
using System.Web.Http;		// this enables [HttpGet] and [AllowAnonymous]
using DotNetNuke.Web.Api;	// this is to verify the AntiForgeryToken
#endif
using System.IO;
using System.Linq;
using ToSic.Razor.Blade;
using System.Collections.Generic;
using System;
using System.Web;

[AllowAnonymous]			// define that all commands can be accessed without a login
public class CommentController : Custom.Hybrid.Api12
{
  [HttpGet]
  public dynamic GetAll() {
    if (!CmsContext.User.IsSiteAdmin) return null;
    
    return AsList(App.Data["Comment"])
      .Select(comment => {
        var displayName = comment.Pseudonym;
        var owner = comment.Entity.Owner;
        var userId = owner.Replace("dnn:userid=", "");
        if (owner != "anonymous") { 
          if (userId == "1") {
            displayName = "Admin";
          } else {
            var userQuery = App.Query["DNNUser"];
            var user = AsList(userQuery["Default"]).FirstOrDefault();
            displayName = user.DisplayName;
          }
        }

        return new {
          content = comment.Content,
          created = comment.Created.ToString("dd.MM.yyyy HH:mm"), 
          id = comment.EntityId,
          displayName = displayName,
          title = comment.Title,
          target = new {
            id = comment.Target.EntityId,
            title = comment.Target.Title
          },
          parentComment = new {
            id = comment.ParentComment.EntityId,
            title = comment.ParentComment.Title
          },
          profileUrl = CmsContext.Site.Url + "/" + "/DnnImageHandler.ashx?mode=profilepic&userId=" + userId,
          ip = comment.IP,
          isPublished = comment.IsPublished
        };
      }).OrderByDescending(comment => comment.created).ToList();
  }

  [HttpPost]
  public dynamic Create(dynamic comment) {
    var ip = HttpContext.Current.Request.UserHostAddress;
    if (AsList(App.Data["BlockedIP"]).Any(blockedIp => blockedIp.IP == ip))
      return new { Message = Resources.Blocked };
    
    // Validation
    if (comment.pseudonym != null && comment.pseudonym.ToString().Length < 3) 
      return new { Message = Resources.MessageNameTooShort };
    
    if (CmsContext.User.Id < 0 && comment.pseudonym == null)
      return new { Message = Resources.MessageNoName };

    if (comment.content == null || comment.content != null && comment.content.ToString().Length < 5)
      return new { Message = Resources.MessageCommentTooShort };
    
    try {
      var values = new Dictionary<string, dynamic>();
      values.Add("Content", comment.content);
      values.Add("Pseudonym", comment.pseudonym);
      if (comment.parentComment != null) {
        values.Add("ParentComment", new List<int>() { Convert.ToInt32(comment.parentComment) });
      }
      if (comment.target != null) {
        values.Add("Target", new List<int>() { Convert.ToInt32(comment.target) });
      }
      values.Add("IP", ip);
      App.Data.Create("Comment", values);
      return new { Created = DateTime.Now };
    } catch (Exception ex) {
      return ex;
    }
  }
}