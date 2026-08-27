---
layout: post
title: Views in Angular File Manager | Syncfusion
description: Learn how to switch between Large Icons and Details views in the Angular File Manager for flexible file browsing.
control: File Manager
platform: file-manager-sdk
documentation: ug
domainurl: https://help.syncfusion.com/file-manager-sdk
---

# Views in Angular File Manager

The view section in the Angular File Manager displays files and folders for users to browse and manage. The Angular File Manager component offers two distinct view modes to present your content, each optimized for different use cases:

* [LargeIcons View](#largeicons-view) - Displays files and folders as a icons (default view)
* [Details View](#details-view) - Presents files and folders in a grid format with additional information

You can set the initial view of the Angular File Manager using the [view](https://ej2.syncfusion.com/angular/documentation/api/file-manager/index-default#view) property.


## LargeIcons View

LargeIcons view is the default presentation mode that displays files and folders as a icons. This view is ideal for visual browsing and when you need to quickly identify files by their thumbnails.

The following example demonstrates the Angular File Manager with details view.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/file-manager-sdk/angular/large-icons-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/file-manager-sdk/angular/large-icons-cs1/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/file-manager-sdk/angular/large-icons-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/file-manager-sdk/angular/large-icons-cs1" %}

### Customize existing Large Icons View

The large icons view layout can be customized using the `largeIconsTemplate` property, which allows you to display file or folder information, apply custom formatting, and use conditional rendering based on item type. You can customize it further based on your application requirements.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/file-manager-sdk/angular/large-icon-view-template/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/file-manager-sdk/angular/large-icon-view-template/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/file-manager-sdk/angular/large-icon-view-template/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/file-manager-sdk/angular/large-icon-view-template" %}

## Details View


Details view displays files and folders in a grid format with additional information such as size, type, and modified date. This view is particularly useful when managing large numbers of files or when you need to sort and filter based on file properties.

Details view is an injectable module in the Angular File Manager; therefore, it must be injected before rendering the Angular File Manager to enable its functionality. You can set the Angular File Manager to display in details view by setting the [view](https://ej2.syncfusion.com/angular/documentation/api/file-manager/index-default#view) property to 'Details'.
 
The following example demonstrates the Angular File Manager with details view.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/file-manager-sdk/angular/details-view-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/file-manager-sdk/angular/details-view-cs1/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/file-manager-sdk/angular/details-view-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/file-manager-sdk/angular/details-view-cs1" %}