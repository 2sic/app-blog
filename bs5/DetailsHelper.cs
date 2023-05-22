using System;
using ToSic.Razor.Blade;

public class DetailsHelper: Custom.Hybrid.Code14 {

  public dynamic PostMicroPreview(dynamic post, string context) {
    var helpers = CreateInstance("../shared/Links.cs");
    var title = context == "previous"
      ? Resources.PreviousPost
      : Resources.NextPost;

    return Tag.Div().Class(context).Wrap(
      Tag.A().Href(helpers.LinkToDetailsPage(post)).Wrap(
        (Text.Has(post.Image) 
          ? (Kit.Image.Picture( post.Image ,settings: Settings.Images.NextPost, imgAltFallback:post.Title, imgClass:"rounded-circle d-none d-lg-block")).ToString()
          : ""),
        Tag.Span(
          Tag.Strong(title) + " " + post.Title
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

  public void AddMetaTags(dynamic post) {
    
    var metaImageUrl = Text.Has(post.Image)
        ? Link.Image(post.Image, Settings.Images.Blog, type: "full")
        : "";

    var sharingDescription = Text.Has(post.SharingDescription) ? post.SharingDescription : Kit.Scrub.All(post.Teaser);

    // Try to replace the term "PostTitle" in the page title with the post title, otherwise prefix the existing title
    Kit.Page.SetTitle(Text.First(post.MetaTitle, post.Title) + " ", "PostTitle");

    Kit.Page.SetDescription(Text.Has(post.MetaDescription) ? post.MetaDescription : Kit.Scrub.All(post.Teaser));

    // Add open graph meta information
    Kit.Page.AddOpenGraph("og:type", "article");
    Kit.Page.AddOpenGraph("og:title", post.Title);
    Kit.Page.AddOpenGraph("og:site_name", Resources.BlogTitle);
    Kit.Page.AddOpenGraph("og:url", Link.To(parameters: "details=" + post.UrlKey));
    Kit.Page.AddOpenGraph("og:description", sharingDescription);
    Kit.Page.AddOpenGraph("og:image", metaImageUrl);
    Kit.Page.AddOpenGraph("og:image:height", "1200");
    Kit.Page.AddOpenGraph("og:image:width", "630");

    // Add twitter meta information
    Kit.Page.AddMeta("twitter:card", "summary_large_image");
    Kit.Page.AddMeta("twitter:title", post.Title);
    Kit.Page.AddMeta("twitter:description", sharingDescription);
    Kit.Page.AddMeta("twitter:image", metaImageUrl);
  }
}