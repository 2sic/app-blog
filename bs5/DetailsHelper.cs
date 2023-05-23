using System;
using ToSic.Razor.Blade;
using ToSic.Sxc.Data;

public class DetailsHelper: Custom.Hybrid.Code14 {

  public IHtmlTag PostMicroPreview(ITypedEntity post, string context) {
    if (post == null) return null;
    var links = CreateInstance("./helpers/Links.cs");
    var title = context == "previous"
      ? Resources.PreviousPost
      : Resources.NextPost;

    var imgUrl = post.Url("Image");
    return Tag.Div().Class(context).Wrap(
      Tag.A().Href(links.LinkToDetailsPage(post)).Wrap(
        (Text.Has(imgUrl) 
          ? Kit.Image.Picture(imgUrl, settings: Settings.Images.NextPost, imgAltFallback: post.String("Title"), imgClass: "rounded-circle d-none d-lg-block")
          : null),
        Tag.Span(
          Tag.Strong(title) + " " + post.String("Title")
        ).Class("app-blog-previouslink-title")
      )
    );
  }

  public dynamic BackToListButton() {
    return Tag.Div().Class("backlink").Wrap(
      Tag.A(Resources.BackToHome)
        .Class("btn btn-outline-primary")
        .Href(Link.To())
    );
  }

  public void AddMetaTags(ITypedEntity post) {
    
    var metaImageUrl = Text.Has(post.Url("Image"))
        ? Link.Image(post.Url("Image"), Settings.Images.Blog, type: "full")
        : "";

    var teaser = Kit.Scrub.All(post.String("Teaser"));
    var sharingDescription = Text.First(post.String("SharingDescription"), teaser);

    // Try to replace the term "PostTitle" in the page title with the post title, otherwise prefix the existing title
    Kit.Page.SetTitle(Text.First(post.String("MetaTitle"), post.String("Title")) + " ", "PostTitle");


    Kit.Page.SetDescription(Text.First(post.String("MetaDescription"), teaser));

    // Add open graph meta information
    var title = post.String("Title");
    Kit.Page.AddOpenGraph("og:type", "article");
    Kit.Page.AddOpenGraph("og:title", title);
    Kit.Page.AddOpenGraph("og:site_name", Resources.BlogTitle);
    Kit.Page.AddOpenGraph("og:url", Link.To(parameters: "details=" + post.String("UrlKey")));
    Kit.Page.AddOpenGraph("og:description", sharingDescription);
    Kit.Page.AddOpenGraph("og:image", metaImageUrl);
    Kit.Page.AddOpenGraph("og:image:height", "1200");
    Kit.Page.AddOpenGraph("og:image:width", "630");

    // Add twitter meta information
    Kit.Page.AddMeta("twitter:card", "summary_large_image");
    Kit.Page.AddMeta("twitter:title", title);
    Kit.Page.AddMeta("twitter:description", sharingDescription);
    Kit.Page.AddMeta("twitter:image", metaImageUrl);
  }
}