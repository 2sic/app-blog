// DO NOT MODIFY THIS FILE - IT IS AUTO-GENERATED
// See also: https://go.2sxc.org/copilot-data
// To extend it, create a "BlogTag.cs" with this contents:
/*
namespace AppCode.Data
{
  public partial class BlogTag
  {
    // Add your own properties and methods here
  }
}
*/

// Generator:   CSharpDataModelsGenerator v17.06.02
// App/Edition: Blog/
// User:        2sic Web-Developer
// When:        2024-04-09 11:11:47Z
namespace AppCode.Data
{
  // This is a generated class for BlogTag 
  // To extend/modify it, see instructions above.

  /// <summary>
  /// BlogTag data. <br/>
  /// Generated 2024-04-09 11:11:47Z. Re-generate whenever you change the ContentType. <br/>
  /// <br/>
  /// Default properties such as `.Title` or `.Id` are provided in the base class. <br/>
  /// Most properties have a simple access, such as `.ManualWeight`. <br/>
  /// For other properties or uses, use methods such as
  /// .IsNotEmpty("FieldName"), .String("FieldName"), .Children(...), .Picture(...), .Html(...).
  /// </summary>
  public partial class BlogTag: AutoGenerated.ZagBlogTag
  {  }
}

namespace AppCode.Data.AutoGenerated
{
  /// <summary>
  /// Auto-Generated base class for Default.BlogTag in separate namespace and special name to avoid accidental use.
  /// </summary>
  public abstract class ZagBlogTag: Custom.Data.CustomItem
  {
    /// <summary>
    /// ManualWeight as int. <br/>
    /// To get other types use methods such as .Decimal("ManualWeight")
    /// </summary>
    public int ManualWeight => _item.Int("ManualWeight");

    /// <summary>
    /// Name as string. <br/>
    /// For advanced manipulation like scrubHtml, use .String("Name", scrubHtml: true) etc.
    /// </summary>
    public string Name => _item.String("Name", fallback: "");

    /// <summary>
    /// Tag as string. <br/>
    /// For advanced manipulation like scrubHtml, use .String("Tag", scrubHtml: true) etc.
    /// </summary>
    public string Tag => _item.String("Tag", fallback: "");
  }
}