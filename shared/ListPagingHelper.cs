using ToSic.Razor.Blade;
using System;
using System.Linq;
using System.Collections.Generic;

public class ListPagingHelper: Custom.Hybrid.Code12 {
  /**
  * Generate a paging-link, preserving current filter parameters
  */
  public dynamic LinkToPageNumber(int pageNumber){
    var filteredTag = AsList(Data["Tag"]).FirstOrDefault();
    var filteredAuthor = AsList(Data["Author"]).FirstOrDefault();
    var filteredCategory = AsList(Data["Category"]).FirstOrDefault();

    var categoryParam = filteredCategory != null
      ? "category=" + filteredCategory.Key + "&"
      : "";
    var tagParam = filteredTag != null
      ? "tag=" + filteredTag.Tag + "&"
      : "";
    var authorParam = filteredAuthor != null
      ? "author=" + filteredAuthor.FullName + "&"
      : "";

    // return Tags.SafeUrl(Link.To(parameters: categoryParam + tagParam + authorParam + "page=" + pageNumber));
    return Link.To(parameters: categoryParam + tagParam + authorParam + "page=" + pageNumber);
  }
}