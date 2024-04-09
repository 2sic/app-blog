// DO NOT MODIFY THIS FILE - IT IS AUTO-GENERATED
// See also: https://go.2sxc.org/copilot-data
// To extend it, create a "BlogPost.cs" with this contents:
/*
namespace AppCode.Data
{
  public partial class BlogPost
  {
    // Add your own properties and methods here
  }
}
*/

// Generator:   CSharpDataModelsGenerator v17.06.02
// App/Edition: Blog/
// User:        2sic Web-Developer
// When:        2024-04-09 09:26:12Z
using System;
using System.Collections.Generic;
using ToSic.Sxc.Adam;
using ToSic.Sxc.Data;

namespace AppCode.Data
{
  // This is a generated class for BlogPost 
  // To extend/modify it, see instructions above.

  /// <summary>
  /// BlogPost data. <br/>
  /// Generated 2024-04-09 09:26:12Z. Re-generate whenever you change the ContentType. <br/>
  /// <br/>
  /// Default properties such as `.Title` or `.Id` are provided in the base class. <br/>
  /// Most properties have a simple access, such as `.Author`. <br/>
  /// For other properties or uses, use methods such as
  /// .IsNotEmpty("FieldName"), .String("FieldName"), .Children(...), .Picture(...), .Html(...).
  /// </summary>
  public partial class BlogPost: AutoGenerated.ZagBlogPost
  {  }
}

namespace AppCode.Data.AutoGenerated
{
  /// <summary>
  /// Auto-Generated base class for Default.BlogPost in separate namespace and special name to avoid accidental use.
  /// </summary>
  public abstract class ZagBlogPost: Custom.Data.CustomItem
  {
    /// <summary>
    /// Author as single item of Author.
    /// </summary>
    /// <remarks>
    /// Generated to only return 1 child because field settings had Multi-Value=false. The type Author was specified in the field settings.
    /// </remarks>
    /// <returns>
    /// A single item OR null if nothing found, so you can use ?? to provide alternate objects.
    /// </returns>
    public Author Author => _author ??= _item.Child<Author>("Author");
    private Author _author;

    /// <summary>
    /// Categories as list of Category.
    /// </summary>
    /// <remarks>
    /// Generated to return child-list child because field settings had Multi-Value=true. The type Category was specified in the field settings.
    /// </remarks>
    /// <returns>
    /// An IEnumerable of specified type, but can be empty.
    /// </returns>
    public IEnumerable<Category> Categories => _categories ??= _item.Children<Category>("Categories");
    private IEnumerable<Category> _categories;

    /// <summary>
    /// Content as string. <br/>
    /// For advanced manipulation like scrubHtml, use .String("Content", scrubHtml: true) etc.
    /// </summary>
    public string Content => _item.String("Content", fallback: "");

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
    /// InnerContent as single item of ITypedItem.
    /// </summary>
    /// <remarks>
    /// Generated to only return 1 child because field settings had Multi-Value=false. 
    /// </remarks>
    /// <returns>
    /// A single item OR null if nothing found, so you can use ?? to provide alternate objects.
    /// </returns>
    public ITypedItem InnerContent => _innerContent ??= _item.Child("InnerContent");
    private ITypedItem _innerContent;

    /// <summary>
    /// MetaDescription as string. <br/>
    /// For advanced manipulation like scrubHtml, use .String("MetaDescription", scrubHtml: true) etc.
    /// </summary>
    public string MetaDescription => _item.String("MetaDescription", fallback: "");

    /// <summary>
    /// MetaTitle as string. <br/>
    /// For advanced manipulation like scrubHtml, use .String("MetaTitle", scrubHtml: true) etc.
    /// </summary>
    public string MetaTitle => _item.String("MetaTitle", fallback: "");

    /// <summary>
    /// PublicationMoment as DateTime.
    /// </summary>
    public DateTime PublicationMoment => _item.DateTime("PublicationMoment");

    /// <summary>
    /// SharingDescription as string. <br/>
    /// For advanced manipulation like scrubHtml, use .String("SharingDescription", scrubHtml: true) etc.
    /// </summary>
    public string SharingDescription => _item.String("SharingDescription", fallback: "");

    /// <summary>
    /// ShowOnStartPage as bool. <br/>
    /// To get nullable use .Get("ShowOnStartPage") as bool?;
    /// </summary>
    public bool ShowOnStartPage => _item.Bool("ShowOnStartPage");

    /// <summary>
    /// Tags as list of Tag.
    /// </summary>
    /// <remarks>
    /// Generated to return child-list child because field settings had Multi-Value=true. The type Tag was specified in the field settings.
    /// </remarks>
    /// <returns>
    /// An IEnumerable of specified type, but can be empty.
    /// </returns>
    public IEnumerable<Tag> Tags => _tags ??= _item.Children<Tag>("Tags");
    private IEnumerable<Tag> _tags;

    /// <summary>
    /// Teaser as string. <br/>
    /// For advanced manipulation like scrubHtml, use .String("Teaser", scrubHtml: true) etc.
    /// </summary>
    public string Teaser => _item.String("Teaser", fallback: "");

    /// <summary>
    /// Title as string. <br/>
    /// For advanced manipulation like scrubHtml, use .String("Title", scrubHtml: true) etc.
    /// </summary>
    /// <remarks>
    /// This hides base property Title.
    /// To access original, convert using AsItem(...) or cast to ITypedItem.
    /// Consider renaming this field in the underlying content-type.
    /// </remarks>
    public new string Title => _item.String("Title", fallback: "");

    /// <summary>
    /// UrlKey as string. <br/>
    /// For advanced manipulation like scrubHtml, use .String("UrlKey", scrubHtml: true) etc.
    /// </summary>
    public string UrlKey => _item.String("UrlKey", fallback: "");

    /// <summary>
    /// VarAdvancedHeaders as bool. <br/>
    /// To get nullable use .Get("VarAdvancedHeaders") as bool?;
    /// </summary>
    public bool VarAdvancedHeaders => _item.Bool("VarAdvancedHeaders");

    /// <summary>
    /// VarCustomTeaser as bool. <br/>
    /// To get nullable use .Get("VarCustomTeaser") as bool?;
    /// </summary>
    public bool VarCustomTeaser => _item.Bool("VarCustomTeaser");
  }
}