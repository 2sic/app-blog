using AppCode.Data;
using ToSic.Razor.Blade;

namespace AppCode.Razor
{
  public abstract partial class AppRazor<TModel> : Custom.Hybrid.RazorTyped<TModel>
  {
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
        ? Kit.Convert.ToInt(App.Settings.String("DetailsPage").Split(':')[1])
        : MyPage.Id;
      return _detailsPageId;
    }
    private int _detailsPageId;

  }
}
