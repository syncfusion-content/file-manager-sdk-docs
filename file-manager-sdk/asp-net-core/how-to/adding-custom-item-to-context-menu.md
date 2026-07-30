---
layout: post
title: Custom Contextmenu item in ASP.NET Core File Manager | Syncfusion
description: Learn here all about Adding Custom Item To Context Menu in ASP.NET Core File Manager control of Syncfusion Essential JS 2 and more.
platform: file-manager-sdk
control: Adding Custom Item To Context Menu
publishingplatform: file-manager-sdk
documentation: ug
---

# How to add custom menu item in context menu

The context menu can be customized using the `contextMenuSettings`,`menuOpen`, and `menuClick` events.

The following example shows adding a custom item in the context menu.

The `menuOpen` event is used to add the new menu item. The `menuClick` event is used to add event handler to the new menu item.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/file-manager-sdk/asp-net-core/how-to/context-menu/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="HomeController_core.cs" %}
{% include code-snippet/file-manager-sdk/asp-net-core/how-to/context-menu/HomeController_core.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/file-manager-sdk/asp-net-core/how-to/context-menu/razor %}
{% endhighlight %}
{% highlight c# tabtitle="HomeController_mvc.cs" %}
{% include code-snippet/file-manager-sdk/asp-net-core/how-to/context-menu/HomeController_mvc.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}



The output will look like the image below.

![File Manager adding custom item in context menu](../images/custom_contextmenu.png)