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
  public const string AtomNs = "http://www.w3.org/2005/Atom";
  [HttpGet]
  public dynamic Rss()
  {
    var detailsPageTabId = Text.Has(Settings.DetailsPage)
      ? int.Parse((Settings.Get("DetailsPage", convertLinks: false)).Split(':')[1])
      : 0; // when 'DetailsPage' app setting is missing.

    var moduleId = CmsContext.Module.Id;

    var rssDoc = new XmlDocument();
    rssDoc.PreserveWhitespace = true;
    rssDoc.LoadXml(
      "<?xml version='1.0' encoding='utf-8'?>"
      + "<rss version='2.0' xmlns:atom='" + AtomNs + "'>"
      + "</rss>"
    );
    var root = rssDoc.DocumentElement;
    var channel = rssDoc.CreateElement("channel");
    root.AppendChild(channel);
    AddTag(channel, "title", Resources.BlogTitle);
    AddTag(channel, "link", Link.To(pageId: detailsPageTabId));
    AddTag(channel, "description", Resources.RssDescription);
    var atom = AddNamespaceTag(channel, "atom", "link", AtomNs);
    FillAtomLinkTag(atom);

    foreach(var post in AsList(App.Query["BlogPosts"]["AllPosts"])) {
      var itemNode = AddTag(channel, "item", null);
      AddTag(itemNode, "title", post.EntityTitle);
      AddTag(itemNode, "link", (detailsPageTabId == 0) ? "Error: 'DetailsPage' app setting is missing." : Link.To(pageId: detailsPageTabId, parameters: "details=" + post.UrlKey));
      AddTag(itemNode, "description", post.Teaser);
      var guidNode = AddTag(itemNode, "guid", post.EntityGuid.ToString());
      var isPermaAttr = rssDoc.CreateAttribute("isPermaLink");
      isPermaAttr.Value = "false";
      guidNode.Attributes.Append(isPermaAttr);
      AddTag(itemNode, "pubDate", post.PublicationMoment.ToString("R"));
    }

    return File(download: false, fileDownloadName: "rss.xml", contents: rssDoc);
  }

  private XmlElement AddTag(XmlElement parent, string name, string value) {
    var node = parent.OwnerDocument.CreateElement(name);
    node.InnerText = value;
    parent.AppendChild(node);
    return node;
  }
  private XmlElement AddNamespaceTag(XmlElement parent, string name, string tagNs, string link) {
    var node = parent.OwnerDocument.CreateElement(name, tagNs, link);
    parent.AppendChild(node);
    return node;
  }

  private XmlElement FillAtomLinkTag(XmlElement atom) {
    var rssDoc = atom.OwnerDocument;
    var atomRel = rssDoc.CreateAttribute("rel");
    atomRel.Value = "self";
    atom.Attributes.Append(atomRel);
    var atomType = rssDoc.CreateAttribute("type");
    atomType.Value = "application/rss+xml";
    atom.Attributes.Append(atomType);
    var atomHref = rssDoc.CreateAttribute("href");
    atomHref.Value = Link.To(api: "api/Blog/Rss");
    atom.Attributes.Append(atomHref);
    return null;
  }
}
