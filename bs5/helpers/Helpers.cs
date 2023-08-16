using System;
using System.Globalization;
using ToSic.Razor.Blade;
using ToSic.Sxc.Data;

public class Helpers: Custom.Hybrid.CodeTyped
{
  public string BuildTeaser(ITypedItem post){
    return Text.First(post.String("Teaser"), Text.Ellipsis(post.String("Content", scrubHtml: true), 100));
  }
}