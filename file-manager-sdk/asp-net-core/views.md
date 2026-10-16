---
layout: post
title: Views in ASP.NET Core File Manager | Syncfusion
description: Learn how to switch between Large Icons and Details views in the ASP.NET Core File Manager for flexible file browsing.
control: File Manager
platform: file-manager-sdk
documentation: ug
appliesto: UI Component Suite, File Manager SDK
---


# Views in ASP.NET Core File Manager

The view section displays files and folders for user browsing. The `view` API can also be used to change the initial view of the File Manager.

The File Manager has two types of `views` to display the files and folders.

* [LargeIcons View](#largeicons-view)
* [Details View](#details-view)

## LargeIcons View

By default, File Manager is rendered with the large icons view. The following example demonstrates this.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/file-manager-sdk/asp-net-core/large-icons/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="HomeController_core.cs" %}
{% include code-snippet/file-manager-sdk/asp-net-core/large-icons/HomeController_core.cs %}
{% endhighlight %}
{% endtabs %}

The output will look like the image below.

![File Manager largeicons view](./images/large_icons.PNG)

### Customize existing Large Icons View

The large icons view layout can be customized using the `largeIconsTemplate` property, which allows you to display file or folder information, apply custom formatting, and use conditional rendering based on item type. You can customize it further based on your application requirements.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/file-manager-sdk/asp-net-core/large-icon-view-template/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="HomeController_core.cs" %}
{% include code-snippet/file-manager-sdk/asp-net-core/large-icon-view-template/HomeController_core.cs %}
{% endhighlight %}
{% endtabs %}

## Details View

The default appearance of the File Manager can be changed from large icons to details view by using the `view` property. In the Details view, the files are displayed in a sorted list order. This file list comprises of several columns of information about the files such as **Name**, **Date Modified**, **Type**, and **Size**. The following example demonstrates the File Manager with details view.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/file-manager-sdk/asp-net-core/overview/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="HomeController_core.cs" %}
{% include code-snippet/file-manager-sdk/asp-net-core/overview/HomeController_core.cs %}
{% endhighlight %}
{% endtabs %}

The output will look like the image below.

![File Manager details view](./images/overview.PNG)
