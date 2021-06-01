using System;
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
    // variable which will receive a different base path based on Oqtane or Dnn
    string metaImageUrl = "";
    
    #if !NETCOREAPP
      var Request = System.Web.HttpContext.Current.Request;
      if(Text.Has(post.Image)) metaImageUrl = Uri.EscapeUriString(Request.Url.Scheme + "://" + Request.Url.Host + post.Image.ToLower());
    #endif

    if(Text.Has(metaImageUrl))
      metaImageUrl += "?w=1200&h=630&mode=crop&scale=both&quality=70";

    var page = GetService<ToSic.Sxc.Web.IPageService>();
    var sharingDescription = Text.Has(post.SharingDescription) ? post.SharingDescription : Tags.Strip(post.Teaser);

    // Try to replace the term PostTitle in the page title with the post title, otherwise prefix the existing title
    page.SetTitle(Text.First(post.MetaTitle, post.Title) + " ", "PostTitle");
    // OLD and wrong: FYI 2ro - HtmlPage.Title = Text.Has(post.MetaTitle) ? post.MetaTitle : post.Title; // Adjust page title

    page.SetDescription(Text.Has(post.MetaDescription) ? post.MetaDescription : Tags.Strip(post.Teaser));
    // OLD and wrong: FYI 2ro - HtmlPage.AddMeta("description", Text.Has(post.MetaDescription) ? post.MetaDescription : Tags.Strip(post.Teaser)); // Add Meta tag

    // Add open graph meta information
    page.AddOpenGraph("og:type", "article");
    page.AddOpenGraph("og:title", post.Title);
    page.AddOpenGraph("og:site_name", App.Settings.Title);
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