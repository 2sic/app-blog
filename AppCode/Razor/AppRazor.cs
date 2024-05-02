using AppCode.Data;
using ToSic.Razor.Blade;

namespace AppCode.Razor
{
  public abstract partial class AppRazor<TModel> : Custom.Hybrid.RazorTyped<TModel>
  {
    /// <summary>
    /// Returns a teaser for a blog post
    /// </summary>
    // TODO: @2dg - move this to the BlogPost class as an additional method, since that's where it belongs
    public string BuildTeaser(BlogPost post)
    {
      // TODO: @2dg - use post.String("Content", scrub: true)
      // return Text.First(post.Teaser, Text.Ellipsis(post.String("Content", scrub: true), 100));
         return Text.First(post.Teaser, Text.Ellipsis(Kit.Scrub.All(post.Content), 100));
    }

    /// <summary>
    /// Returns a safe url to a post details page
    /// </summary>
    public string LinkToDetailsPage(BlogPost post)
    { 
      return Link.To(pageId: DetailsPageId(), parameters: "details=" + post.UrlKey);
    }

    /// <summary>
    /// Get / cache the page which will show the details of a post
    /// </summary>
    private int DetailsPageId()
    {
      if (_detailsPageId != 0) return _detailsPageId;
      _detailsPageId = App.Settings.IsNotEmpty("DetailsPage")
        ? Kit.Convert.ToInt(App.Settings.DetailsPage.Split(':')[1])
        : MyPage.Id;
      return _detailsPageId;
    }
    private int _detailsPageId;

  }
}
