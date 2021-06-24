using ToSic.Sxc.Search;
using ToSic.Eav.Run;
using ToSic.Razor.Blade;
using System;
using System.Linq;
using System.Collections.Generic;

public class ListHelper: Custom.Hybrid.Code12 {
  /**
  * Returns Title and optional description to show in the header of the list
  */
  public HeaderInfo GetListHeader(dynamic filteredCategory) {
    var filteredTag = AsList(Data["Tag"]).FirstOrDefault();
    var filteredAuthor = AsList(Data["Author"]).FirstOrDefault();
    var title = Content.Title;
    var description = "";

    if (filteredCategory != null) {
      title = Resources.Category + " " + filteredCategory.Name;
      description = filteredCategory.Description;
    } else if (filteredTag != null) {
      title = Resources.Filter + " " + filteredTag.Name;
    } else if (filteredAuthor != null) {
      title = Resources.PostsBy + " " + filteredAuthor.FullName;
      description = filteredAuthor.ShortBio;
    }

    return new HeaderInfo { Title = title , Description = description };
  }

  /// Typed result set for GetListHeader
  public class HeaderInfo {
    public string Title;
    public string Description;
  }
}