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
  [HttpPost]
  public dynamic Create(dynamic comment) {
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
      values.Add("IP", HttpContext.Current.Request.UserHostAddress);
      App.Data.Create("Comment", values);
      return new { Created = DateTime.UtcNow };
    } catch (Exception ex) {
      return ex;
    }
  }
}