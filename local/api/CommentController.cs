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

[AllowAnonymous]			// define that all commands can be accessed without a login
public class CommentController : Custom.Hybrid.Api12
{
  [HttpGet]
  public dynamic GetAll() {
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
          created = comment.Created, 
          id = comment.EntityId,
          displayName = displayName,
          title = comment.Title,
          target = new {
            id = comment.Target.Id,
            title = comment.Target.Title
          },
          parentComment = new {
            id = comment.ParentComment.Id,
            title = comment.ParentComment.Title
          },
          isPublished = comment.IsPublished
        };
      }).ToList();
  }
}