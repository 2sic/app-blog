using ToSic.Razor.Blade;

public class Helpers: Custom.Hybrid.Code12
{
  // Returns a safe url to a post details page
  public dynamic LinkToDetailsPage(dynamic post) {
    var detailsPageTabId = Text.Has(Settings.DetailsPage)
      ? int.Parse((AsEntity(App.Settings).GetBestValue("DetailsPage")).Split(':')[1])
      : CmsContext.Page.Id;

    return Link.To(pageId: detailsPageTabId, parameters: "details=" + post.UrlKey);
  }
}
