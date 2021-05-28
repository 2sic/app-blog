using ToSic.Razor.Blade;

public class DetailsHelper: Custom.Hybrid.Code12 {

  public void SetNotFoundHttpHeaders() {
    // TODO:
    // Response.StatusCode = 404;
    // Response.TrySkipIisCustomErrors = true;
  }

  public dynamic PostMicroPreview(dynamic post, string context) {
    var helpers = CreateInstance("shared/Helpers.cs");
    var title = context == "previous"
      ? App.Resources.PreviousPost
      : App.Resources.NextPost;

    // <div class="@context">
    //   <a href="@helpers.LinkToDetailsPage(post)">
    //     @if (Text.Has(post.Image)) {
    //       <img src='@Tags.SafeUrl(post.Image + "?w=80&h=80&mode=crop&scale=both&quality=70")' alt="@post.Title" />
    //     }
    //     <span class="app-blog-previouslink-title">
    //       <strong>@title:</strong>@post.Title
    //     </span>
    //   </a>
    // </div>

    return Tag.Div(
      Tag.A(
        (Text.Has(post.Image) 
          ? Tag.Img().Attr("src", post.Image + "?w=80&h=80&mode=crop&scale=both&quality=70").Alt(post.Title)
          : "") + "" +        
        Tag.Span(
          Tag.Strong(title) + " " + post.Title
        ).Class("app-blog-previouslink-title")
      ).Attr("href", helpers.LinkToDetailsPage(post))
    ).Class(context);
  }

  public dynamic BackToListButton() {
    // <div class="backlink">
    //   <a class="btn btn-outline-primary" href="@Tags.SafeUrl(Link.To())">@App.Resources.BackToHome</a>
    // </div>
    return Tag.Div(
      Tag.A(App.Resources.BackToHome)
        .Class("btn btn-outline-primary")
        .Attr("href", Link.To()))
      .Class("backlink");
  }

  public void AddMetaTags(dynamic post) {
    #if !NETCOREAPP
      var sharingDescription = Text.Has(post.SharingDescription) ? post.SharingDescription : Tags.Strip(post.Teaser);
      var metaImageUrl = Text.Has(post.Image)
        ? Uri.EscapeUriString(Request.Url.Scheme + "://" + Request.Url.Host + post.Image.ToLower() + "?w=1200&h=630&mode=crop&scale=both&quality=70")
        : "";

      HtmlPage.Title = Text.Has(post.MetaTitle) ? post.MetaTitle : post.Title; // Adjust page title
      HtmlPage.AddMeta("description", Text.Has(post.MetaDescription) ? post.MetaDescription : Tags.Strip(post.Teaser)); // Add Meta tag

      // Add open graph meta information
      HtmlPage.AddOpenGraph("og:type", "article");
      HtmlPage.AddOpenGraph("og:title", post.Title);
      HtmlPage.AddOpenGraph("og:site_name", App.Settings.Title);
      HtmlPage.AddOpenGraph("og:url", Link.To(parameters: "details=" + post.UrlKey));
      HtmlPage.AddOpenGraph("og:description", sharingDescription);
      HtmlPage.AddOpenGraph("og:image", metaImageUrl);
      HtmlPage.AddOpenGraph("og:image:height", "1200");
      HtmlPage.AddOpenGraph("og:image:width", "630");

      // Add twitter meta information
      HtmlPage.AddMeta("twitter:card", "summary_large_image");
      HtmlPage.AddMeta("twitter:title", post.Title);
      HtmlPage.AddMeta("twitter:description", sharingDescription);
      HtmlPage.AddMeta("twitter:image", metaImageUrl);
    #endif
  }
}