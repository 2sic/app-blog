using System;
using System.Globalization;
using ToSic.Razor.Blade;
using ToSic.Sxc.Data;

public class Helpers: Custom.Hybrid.Code14
{
  public string BuildTeaser(ITypedItem post){
    var teaser = post.String("Teaser");
    var mainText = post.String("Content");

    return (Text.Has(teaser))
      ? teaser
      : Text.Ellipsis(Kit.Scrub.All(mainText), 100);
  }
}