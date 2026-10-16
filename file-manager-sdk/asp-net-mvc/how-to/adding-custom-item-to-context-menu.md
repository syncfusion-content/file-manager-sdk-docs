---
layout: post
title: Adding custom item to context menu in ASP.NET MVC File Manager | Syncfusion
description: Learn how to add a custom item to the context menu in the ASP.NET MVC File Manager with custom icons and click handlers.
control: File Manager
platform: file-manager-sdk
publishingplatform: file-manager-sdk
documentation: ug
appliesto: UI Component Suite, File Manager SDK
---

# How to add custom item to context menu in ASP.NET MVC File Manager

The context menu can be customized using the `contextMenuSettings`,`menuOpen`, and `menuClick` events.

The following example shows adding a custom item in the context menu.

The `menuOpen` event is used to add the new menu item. The `menuClick` event is used to add event handler to the new menu item.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/file-manager-sdk/asp-net-mvc/how-to/context-menu/razor %}
{% endhighlight %}
{% highlight c# tabtitle="HomeController_mvc.cs" %}
{% include code-snippet/file-manager-sdk/asp-net-mvc/how-to/context-menu/HomeController_mvc.cs %}
{% endhighlight %}
{% endtabs %}

The output will look like the image below.

![File Manager adding custom item in context menu](../images/custom_contextmenu.png)