---
layout: post
title: Customize the navigation pane in ASP.NET Core File Manager | Syncfusion
description: Learn how to customize the navigation pane in the ASP.NET Core File Manager by templating each folder node to show extra metadata or custom icons.
control: File Manager
platform: file-manager-sdk
publishingplatform: file-manager-sdk
documentation: ug
---

# How to customize the navigation pane in ASP.NET Core File Manager

The navigation pane in the File Manager Control displays the folder hierarchy in a tree-like structure. You can customize the layout of each folder node in the navigation pane using the `navigationPaneTemplate` property. This allows you to modify the appearance of folders based on your application's requirements.

You may use this template to show additional metadata, custom icons, or other UI elements alongside the folder name.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/file-manager-sdk/asp-net-core/navigation-pane-template/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="HomeController_core.cs" %}
{% include code-snippet/file-manager-sdk/asp-net-core/navigation-pane-template/HomeController_core.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/file-manager-sdk/asp-net-core/navigation-pane-template/razor %}
{% endhighlight %}
{% highlight c# tabtitle="HomeController_mvc.cs" %}
{% include code-snippet/file-manager-sdk/asp-net-core/navigation-pane-template/HomeController_mvc.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}