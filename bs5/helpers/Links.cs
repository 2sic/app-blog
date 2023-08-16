using ToSic.Razor.Blade;
using ToSic.Sxc.Data;

public class Links : Custom.Hybrid.CodeTyped
{
  /// <summary>
  /// Returns a safe url to a post details page
  /// </summary>
  public object LinkToDetailsPage(ITypedItem post) {
    return Link.To(pageId: DetailsPageId(), parameters: "details=" + post.String("UrlKey"));
  }

  /// <summary>
  /// Get / cache the page which will show the details of a post
  /// </summary>
  private int DetailsPageId()
  {
    if (_detailsPageId != 0) return _detailsPageId;
    _detailsPageId = Text.Has(App.Settings.String("DetailsPage"))
      ? Kit.Convert.ToInt((App.Settings.String("DetailsPage")).Split(':')[1])
      : MyPage.Id;
    return _detailsPageId;
  }
  private int _detailsPageId;
}
