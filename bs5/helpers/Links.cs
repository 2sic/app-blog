using ToSic.Razor.Blade;
using ToSic.Sxc.Data;

public class Links : Custom.Hybrid.Code14
{
  /// <summary>
  /// Returns a safe url to a post details page
  /// </summary>
  public dynamic LinkToDetailsPage(ITypedEntity post) {
    return Link.To(pageId: DetailsPageId(), parameters: "details=" + post.String("UrlKey"));
  }

  /// <summary>
  /// Get / cache the page which will show the details of a post
  /// </summary>
  private int DetailsPageId()
  {
    if (_detailsPageId != 0) return _detailsPageId;
    _detailsPageId = Text.Has(Settings.DetailsPage)
      ? Kit.Convert.ToInt((Settings.String("DetailsPage")).Split(':')[1])
      : CmsContext.Page.Id;
    return _detailsPageId;
  }
  private int _detailsPageId;
}
