---
layout: post
title: Customize thumbnails in ASP.NET Core File Manager | Syncfusion
description: Learn how to customize thumbnails in the ASP.NET Core File Manager by adding your own icons for file types and folders in the LargeIcons view.
control: File Manager
platform: file-manager-sdk
documentation: ug
appliesto: UI Component Suite, File Manager SDK
---

# How to customize thumbnails in ASP.NET Core File Manager

The default appearance of the File Manager can be customized with your own icon by using the `showThumbnail` property.

The following example demonstrates how to add a custom icon in the large icons view.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/file-manager-sdk/asp-net-core/show-thumbnail/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="HomeController_core.cs" %}
{% include code-snippet/file-manager-sdk/asp-net-core/show-thumbnail/HomeController_core.cs %}
{% endhighlight %}
{% endtabs %}

The output will look like the image below.

![File Manager custom thumbnail ](../images/custom_thumbnail.PNG)