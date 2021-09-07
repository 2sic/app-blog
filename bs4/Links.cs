using ToSic.Razor.Blade;

public class Links : Custom.Hybrid.Code12
{
  /// <Summary>
  /// Returns a safe url to a post details page
  /// </Summary>
  public dynamic LinkToDetailsPage(dynamic post) {
    return Link.To(pageId: DetailsPageId, parameters: "details=" + post.UrlKey);
  }

  /// <Summary>
  /// Get / cache the page which will show the details of a post
  /// </Summary>
  private int DetailsPageId
  {
    get
    {
      if (_detailsPageId != 0) return _detailsPageId;
      if (Text.Has(Settings.DetailsPage))
        _detailsPageId = int.Parse((App.Settings.Get("DetailsPage", convertLinks: false)).Split(':')[1]);
      else
        _detailsPageId = CmsContext.Page.Id;
      return _detailsPageId;
    }
  }
  private int _detailsPageId;
}
