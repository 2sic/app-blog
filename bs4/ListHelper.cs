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
  public HeaderInfo GetListHeader() {
    var filteredCategory = AsList(Data["Category"]).FirstOrDefault();
    var filteredTag = AsList(Data["Tag"]).FirstOrDefault();
    var filteredAuthor = AsList(Data["Author"]).FirstOrDefault();

    if (filteredCategory != null) 
      return new HeaderInfo() {
        Title = Resources.Category + " " + filteredCategory.Name,
        Description = filteredCategory.Description
      };
    if (filteredTag != null)
      return new HeaderInfo() {
        Title = Resources.Filter + " " + filteredTag.Name
      };
    if (filteredAuthor != null)
      return new HeaderInfo() {
        Title = Resources.PostsBy + " " + filteredAuthor.FullName,
        Description = filteredAuthor.ShortBio
      };

    return new HeaderInfo { Title = Content.Title , Description = "" };
  }

  /// Typed result set for GetListHeader
  public class HeaderInfo {
    public string Title;
    public string Description;
  }
}