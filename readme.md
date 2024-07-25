<image src="app-icon.png" align="right" width="200px">

# Blog 6 App for Dnn and Oqtane

> This is a [2sxc](https://2sxc.org) App for [DNN ☢️](https://www.dnnsoftware.com/) and [Oqtane 💧](https://www.oqtane.org/)

A standard blog app to use with 2sxc

| Aspect              | Status | Comments or Version
| ------------------- | :----: | -------------------
| 2sxc                | ✅    | requires 2sxc v17.07.00
| Dnn                 | ✅    | For v9.6.1
| Oqtane              | ✅    | Requires v05.00
| No jQuery           | ✅    |
| Live Demo           | ➖    | [2givelife blog](https://www.2givelife.org/blog) [Blazor CMS blog](https://blazor-cms.org/blog)
| Install Checklist   | ✅    | See [Installation](https://azing.org/2sxc/r/vgApEx0X) on [azing.org](https://azing.org/2sxc)
| Source & License    | ✅    | included, ISC/MIT
| App Catalog         | ✅    | See [app catalog](https://2sxc.org/en/apps/app/blog-v5-hybrid-for-dnn-and-oqtane)
| Screenshots         | ✅    | See [app catalog](https://2sxc.org/en/apps/app/blog-v5-hybrid-for-dnn-and-oqtane)
| Best Practices      | ✅    | Uses v16.01 conventions
| Bootstrap 3         | ➖    | Use the old Blog4 if you need it
| Bootstrap 4         | ✅    |
| Bootstrap 5         | ✅    |

## Customize the App

If you want to use the "Home top posts" template, you need to ["Configure Main-List and Details Page"](https://azing.org/2sxc/r/c42g7EjU) in the app settings.
There are also a lot of app resources you can adjust to your needs.

If you want to customize the CSS, you will usually follow the ["Create Custom Styles in a Standard 2sxc App" checklist](https://azing.org/2sxc/r/gg_aB9FD)

---

## History

### V5 2021-10

* v5.00 2021-10
  * Now hybrid and also works in Oqtane
  * New folder `Blog5` to allow side-by side install with previous versions
  * Guid Reset to allow side-by-side install with previous version
  * Updated to 2sxc 12.03 features like using global settings, images etc.
  * Dropped Bootstrap3 support because of the many changes - if you need that, use the previous version 4
  * Updated Search-mechanisms to be mostly configuration and otherwise separate from Razor as is now v12 standard  
  * Simplified Razor names to new best practices
  * Moved all razor to `bs4` to make it easier for Bootstrap5 which will come soon
* v5.01 2022-03
  * Updated License
  * Changes default view
* v5.02 2022-04
  * Changed all access to Services to ToSic.Sxc.Services
  * Changed all Images to use the IImageService
  * Made the teaser for the posts optional
  * If the teaser is left empty it will take the first 100 characters of the content text to replace the teaser
  * Activated image configuration
  * Replaced data-enableoptimizations with IPageService.AssetAttributes
* v5.03 2022-06
  * Changed all base classes to their sxc14 equivalents
  * Removed all GetService<> and switched to use the ServiceKit14
  * Updated toolbars to use the new IToolbarService
* v5.04 2023-05
  * Removed _ from Filenames
  * Enhanced Kit.Image with `imgAltFallback`

### V6 2023-05

* v6.00 2023-05-25 (Towel Day)
  * new main version with folder `Blog6` to allow side-by-side install with previous versions and new Guid
  * Updated to 2sxc 16.01
  * Changed all dynamic code to use Pro/Typed
  * Introduced rich WYSIWYG where the images auto-align and resize
  * Reduced code amount by merging Bootstrap4 with Bootstrap5
* v06.03 2023-07
  * Changed pro/Typed API to match 2sxc 16.02 (breaking changes)
* v06.04 2023-08
  * Changed Categories.cshtml to use `.Parents(type: ...)` for breaking change in 16.03 where `type` is required
* v06.17.00 2024-04
  * strong Typed
  * Auto Generated Class
* v06.17.01 2024-07
  * removed BS3
  * Update app.sln and app.csproj