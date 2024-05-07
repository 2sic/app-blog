using AppCode.Data;
using ToSic.Razor.Blade;

namespace AppCode.Razor
{
  /// <summary>
  /// Us for Details 
  /// </summary>
  public abstract class DetailRazor : AppRazor
  {
    /// <summary>
    /// Returns a teaser for a blog Previous/Next post
    /// </summary>
    public IHtmlTag PostMicroPreview(BlogPost post, string context)
    {
      if (post == null) return null;
      var title = App.Resources.String(context == "previous" ? "PreviousPost" : "NextPost");

      var imgUrl = post.Image;
      // TODO: USE tagSvc = Kit.HtmlTags instead of Tag
      return Tag.Div().Class(context).Wrap(
        Tag.A().Href(LinkToDetailsPage(post)).Wrap(
          Text.Has(imgUrl)
            ? post.Picture("Image", settings: "NextPost", imgAltFallback: post.Title, imgClass: "rounded-circle d-none d-lg-block")
            : null,
          Tag.Span(
            Tag.Strong(title) + " " + post.Title
          ).Class("app-blog-previouslink-title")
        )
      );
    }

    /// <summary>
    /// Returns BackToListButton
    /// </summary>
    public IHtmlTag BackToListButton()
    {
      var tags = Kit.HtmlTags;
      return tags.Div().Class("backlink").Wrap(
        tags.A(App.Resources.BackToHome)
          .Class("btn btn-outline-primary")
          .Href(Link.To())
      );
    }

    /// <summary>
    /// Add meta tags for a blog post
    /// </summary>
    public void AddMetaTags(BlogPost post)
    {

      var metaImageUrl = post.IsNotEmpty("Image")
          ? Link.Image(post.Image, settings: "Blog", type: "full")
          : "";

      var teaser = Kit.Scrub.All(post.Teaser);
      var sharingDescription = Text.First(post.SharingDescription, teaser);

      // Try to replace the term "PostTitle" in the page title with the post title, otherwise prefix the existing title
      Kit.Page.SetTitle(Text.First(post.MetaTitle, post.Title) + " ", "PostTitle");

      Kit.Page.SetDescription(Text.First(post.MetaDescription, teaser));

      // Add open graph meta information
      var title = post.Title;
      Kit.Page.AddOpenGraph("og:type", "article");
      Kit.Page.AddOpenGraph("og:title", title);
      Kit.Page.AddOpenGraph("og:site_name", App.Resources.BlogTitle);
      Kit.Page.AddOpenGraph("og:url", Link.To(parameters: "details=" + post.UrlKey));
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
}
