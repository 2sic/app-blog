using System;
using ToSic.Razor.Blade;
using ToSic.Sxc.Services;

public class DetailsHelper: Custom.Hybrid.Code12 {

  public dynamic PostMicroPreview(dynamic post, string context) {
    var helpers = CreateInstance("Links.cs");
    var imgSvc = GetService<IImageService>();
    var title = context == "previous"
      ? Resources.PreviousPost
      : Resources.NextPost;

    return Tag.Div().Class(context).Wrap(
      Tag.A().Href(helpers.LinkToDetailsPage(post)).Wrap(
        (Text.Has(post.Image) 
          ? (imgSvc.Picture( post.Image ,settings: Settings.Images.NextPost, imgAlt:post.Title, imgClass:"rounded-circle d-none d-lg-block")).ToString()
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

    var page = GetService<IPageService>();
    var scrubSvc = GetService<IScrub>();

    var sharingDescription = Text.Has(post.SharingDescription) ? post.SharingDescription : scrubSvc.All(post.Teaser);

    // Try to replace the term "PostTitle" in the page title with the post title, otherwise prefix the existing title
    page.SetTitle(Text.First(post.MetaTitle, post.Title) + " ", "PostTitle");

    page.SetDescription(Text.Has(post.MetaDescription) ? post.MetaDescription : scrubSvc.All(post.Teaser));

    // Add open graph meta information
    page.AddOpenGraph("og:type", "article");
    page.AddOpenGraph("og:title", post.Title);
    page.AddOpenGraph("og:site_name", Resources.BlogTitle);
    page.AddOpenGraph("og:url", Link.To(parameters: "details=" + post.UrlKey));
    page.AddOpenGraph("og:description", sharingDescription);
    page.AddOpenGraph("og:image", metaImageUrl);
    page.AddOpenGraph("og:image:height", "1200");
    page.AddOpenGraph("og:image:width", "630");

    // Add twitter meta information
    page.AddMeta("twitter:card", "summary_large_image");
    page.AddMeta("twitter:title", post.Title);
    page.AddMeta("twitter:description", sharingDescription);
    page.AddMeta("twitter:image", metaImageUrl);
  }
}