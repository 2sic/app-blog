using AppCode.Data;
using ToSic.Razor.Blade;

namespace AppCode.Razor
{
  /// <summary>
  /// Us for Blog Post List
  /// </summary>
  public abstract class ListRazor : AppRazor
  {
    /// <summary>
    /// Returns a teaser for a blog post
    /// </summary>
    public string BuildTeaser(BlogPost post)
    {
      return Text.First(post.Teaser, Text.Ellipsis(post.String("Content", scrubHtml: true), 100));
    }
  }
}
