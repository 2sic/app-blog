// Add namespaces to enable security in Oqtane & Dnn despite the differences
#if NETCOREAPP
using Microsoft.AspNetCore.Authorization; // .net core [AllowAnonymous] & [Authorize]
using Microsoft.AspNetCore.Mvc;           // .net core [HttpGet] / [HttpPost] etc.
#else
using System.Web.Http;		// this enables [HttpGet] and [AllowAnonymous]
using DotNetNuke.Web.Api;	// this is to verify the AntiForgeryToken
#endif
using System.Xml;
using System.IO;
using ToSic.Razor.Blade;

[AllowAnonymous]			// define that all commands can be accessed without a login
public class BlogController : Custom.Hybrid.Api12
{

  // TODO: SPM
  // - Then modify the link to point to Link.To(api: ...)
  // - test with an RSS reader
  // - verify it works on Oqtane

  [HttpGet]
  public dynamic Rss()
  {
      var detailsPageTabId = Text.Has(Settings.DetailsPage)
        ? int.Parse((Settings.Get("DetailsPage", convertLinks: false)).Split(':')[1])
        : CmsContext.Page.Id;

    var rssDoc = new XmlDocument();
    rssDoc.PreserveWhitespace = true;
    rssDoc.LoadXml(
      "<?xml version='1.0' encoding='utf-8'?>"
      + "<rss version='2.0'>"
      + "</rss>"
    );
    var root = rssDoc.DocumentElement;
    var channel = rssDoc.CreateElement("channel");
    root.AppendChild(channel);
    AddTag(channel, "title", Resources.BlogTitle);
    //AddTag(channel, "link", Link.To(api: "api/Blog/Rss"));
    AddTag(channel, "link", Link.To(pageId: detailsPageTabId));
    AddTag(channel, "description", Resources.RssDescription);

    foreach(var post in AsList(App.Query["BlogPosts"]["AllPosts"])) {
      var itemNode = AddTag(channel, "item", null);
      AddTag(itemNode, "title", post.EntityTitle);
      AddTag(itemNode, "link", Link.To(pageId: detailsPageTabId, parameters: "details=" + post.UrlKey));
      AddTag(itemNode, "description", post.Teaser);
      var guidNode = AddTag(itemNode, "guid", post.EntityGuid.ToString());
      var isPermaAttr = rssDoc.CreateAttribute("isPermaLink");
      isPermaAttr.Value = "false";
      guidNode.Attributes.Append(isPermaAttr);
      AddTag(itemNode, "pubDate", post.PublicationMoment.ToString("R"));
    }

    //var xmlStream = new MemoryStream();
    //rssDoc.Save(xmlStream);

    ////var xmlWriter = XmlWriter.Create(xmlStream);
    ////rssDoc.WriteTo(xmlWriter);
    ////xmlWriter.Flush();

    //xmlStream.Position = 0;

    return File(download: false, fileDownloadName: "rss.xml", contents: rssDoc);
  }

  private XmlElement AddTag(XmlElement parent, string name, string value) {
    var node = parent.OwnerDocument.CreateElement(name);
    node.InnerText = value;
    parent.AppendChild(node);
    return node;
  }

}
