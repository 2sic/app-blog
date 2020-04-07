# The popular 2sxc Blog App

![2sxc blog logo](app-icon.png)

* Check out a [live demo](http://2sxc.org/en/blog)
* Read more about it in this [release-post](http://2sxc.org/en/blog/post/may-the-4th-be-with-you-again-presenting-the-dnn-blog-app)
* download the 2sxc app for installation in the [app-catalog](http://2sxc.org/en/apps/app/dnn-blog-app-for-dnn-dotnetnuke)

## CSS Framework Detection

_Here you'll see how the content-templates switch between Bootstrap3 and Bootstrap4 templates_

Almost every view is implemented as Bootstrap4, but as one of the first lines you'll see:

```
@if(Connect.Koi.Koi.Is("bs3")) {
  @RenderPage("../bs3/Person/_some-file.cshtml")
  return;
}
```

This does the following

1. Ask Koi if it's using Bootstrap 3 (code 'bs3') using [Koi.Is(...)](https://connect-koi.net/components)
1. If it's a match, it will render the BS3 file and then return

So if it is Boostrap3, then the rest of the view will not be rendered at all. 

> If you start making changes and you're not using Bootstrap3 at all, you can also delete these lines!