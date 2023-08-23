using System;
using ToSic.Razor.Blade;
using ToSic.Sxc.Data;

public class DetailsHelper: Custom.Hybrid.CodeTyped {

  public IHtmlTag PostMicroPreview(ITypedItem post, string context) {
    if (post == null) return null;
    var links = GetCode("./helpers/Links.cs");
    var title = App.Resources.String(context == "previous" ? "PreviousPost" : "NextPost");

    var imgUrl = post.Url("Image");
    return Tag.Div().Class(context).Wrap(
      Tag.A().Href(links.LinkToDetailsPage(post)).Wrap(
        (Text.Has(imgUrl) 
          ? post.Picture("Image", settings: "NextPost", imgAltFallback: post.String("Title"), imgClass: "rounded-circle d-none d-lg-block")
          : null),
        Tag.Span(
          Tag.Strong(title) + " " + post.String("Title")
        ).Class("app-blog-previouslink-title")
      )
    );
  }

  public object BackToListButton() {
    return Tag.Div().Class("backlink").Wrap(
      Tag.A(App.Resources.String("BackToHome"))
        .Class("btn btn-outline-primary")
        .Href(Link.To())
    );
  }

  public void AddMetaTags(ITypedItem post) {
    
    var metaImageUrl = Text.Has(post.Url("Image"))
        ? Link.Image(post.Url("Image"), settings: "Blog", type: "full")
        : "";

    var teaser = post.String("Teaser", scrubHtml: true);
    var sharingDescription = Text.First(post.String("SharingDescription"), teaser);

    // Try to replace the term "PostTitle" in the page title with the post title, otherwise prefix the existing title
    Kit.Page.SetTitle(Text.First(post.String("MetaTitle"), post.String("Title")) + " ", "PostTitle");


    Kit.Page.SetDescription(Text.First(post.String("MetaDescription"), teaser));

    // Add open graph meta information
    var title = post.String("Title");
    Kit.Page.AddOpenGraph("og:type", "article");
    Kit.Page.AddOpenGraph("og:title", title);
    Kit.Page.AddOpenGraph("og:site_name", App.Resources.String("BlogTitle"));
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