// DO NOT MODIFY THIS FILE - IT IS AUTO-GENERATED
// See also: https://go.2sxc.org/copilot-data
// To extend it, create a "Author.cs" with this contents:
/*
namespace AppCode.Data
{
  public partial class Author
  {
    // Add your own properties and methods here
  }
}
*/

// Generator:   CSharpDataModelsGenerator v17.06.02
// App/Edition: Blog/
// User:        2sic Web-Developer
// When:        2024-04-09 11:11:47Z
using ToSic.Sxc.Adam;

namespace AppCode.Data
{
  // This is a generated class for Author 
  // To extend/modify it, see instructions above.

  /// <summary>
  /// Author data. <br/>
  /// Generated 2024-04-09 11:11:47Z. Re-generate whenever you change the ContentType. <br/>
  /// <br/>
  /// Default properties such as `.Title` or `.Id` are provided in the base class. <br/>
  /// Most properties have a simple access, such as `.FullName`. <br/>
  /// For other properties or uses, use methods such as
  /// .IsNotEmpty("FieldName"), .String("FieldName"), .Children(...), .Picture(...), .Html(...).
  /// </summary>
  public partial class Author: AutoGenerated.ZagAuthor
  {  }
}

namespace AppCode.Data.AutoGenerated
{
  /// <summary>
  /// Auto-Generated base class for Default.Author in separate namespace and special name to avoid accidental use.
  /// </summary>
  public abstract class ZagAuthor: Custom.Data.CustomItem
  {
    /// <summary>
    /// FullName as string. <br/>
    /// For advanced manipulation like scrubHtml, use .String("FullName", scrubHtml: true) etc.
    /// </summary>
    public string FullName => _item.String("FullName", fallback: "");

    /// <summary>
    /// Image as link (url). <br/>
    /// To get the underlying value like 'file:72' use String("Image")
    /// </summary>
    public string Image => _item.Url("Image");

    /// <summary>
    /// Get the file object for Image - or null if it's empty or not referencing a file.
    /// </summary>
    public IFile ImageFile => _item.File("Image");

    /// <summary>
    /// Get the folder object for Image.
    /// </summary>
    public IFolder ImageFolder => _item.Folder("Image");

    /// <summary>
    /// Key as string. <br/>
    /// For advanced manipulation like scrubHtml, use .String("Key", scrubHtml: true) etc.
    /// </summary>
    public string Key => _item.String("Key", fallback: "");

    /// <summary>
    /// ShortBio as string. <br/>
    /// For advanced manipulation like scrubHtml, use .String("ShortBio", scrubHtml: true) etc.
    /// </summary>
    public string ShortBio => _item.String("ShortBio", fallback: "");
  }
}