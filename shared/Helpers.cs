using ToSic.Razor.Blade;
using System;
using System.Globalization;

public class Helpers: Custom.Hybrid.Code12
{
  public string TeaserAssembly(dynamic post){
    var teaser = post.Teaser;
    var mainText = post.Content;

    if (Text.Has(teaser)){
      return teaser;
    } else {
      
      teaser = Text.Ellipsis(mainText, 100);
      return teaser;
    }
  }
}