using ToSic.Sxc.Search;
using ToSic.Eav.Run;

public class ListHelper: Custom.Hybrid.Code12 {
  /// <summary>
  /// Prevent duplicated search results.
  /// Since the main list will already add all the items to the search, this view should not add them again.
  /// </summary>
  // public override void CustomizeSearch(Dictionary<string, List<ISearchItem>> searchInfos, IContainer moduleInfo, DateTime beginDate) {
  //   searchInfos.Clear();
  // }
}