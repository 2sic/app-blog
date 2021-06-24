<image src="app-icon.png" align="right" width="200px">

# Blog App for DNN (DotNetNuke)

A standard blog app to use with 2sxc

## Installing the app

You can install the app with the ["Installing Blog" checklist](https://azing.org/2sxc/r/vgApEx0X)

## Customizing the app

### Configuration (Settings, Resources)

If you want to use the "Home top posts" template, you need to ["Configure Main-List and Details Page"](https://azing.org/2sxc/r/c42g7EjU) in the app settings.
There are also a lot of app resources you can adjust to your needs.

### Style

If you want to customize the CSS, you will usually follow the ["Create Custom Styles in a Standard 2sxc App" checklist](https://azing.org/2sxc/r/gg_aB9FD)

## Screenshots

Read more about it in the [App Catalog](https://2sxc.org/en/apps/app/blog-app-v4)

---

## History

### V5 June 2021

* New folder `Blog5` to allow side-by side install with previous versions
* Guid Reset to allow side-by-side install with previous version
* Updated to 2sxc 12.03 features like using global settings, images etc.
* Dropped Bootstrap3 support because of the many changes - if you need that, use the previous version 4
* Updated Search-mechanisms to be mostly configuration and otherwise separate from Razor as is now v12 standard
* Simplified Razor names to new best practices
* Moved all razor to `bs4` to make it easier for Bootstrap5 which will come soon