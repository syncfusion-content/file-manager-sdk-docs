---
layout: post
title: Enable or disable a toolbar item in ASP.NET MVC File Manager | Syncfusion
description: Learn how to enable or disable a toolbar item in the ASP.NET MVC File Manager at runtime based on user actions or selection state.
control: File Manager
platform: file-manager-sdk
publishingplatform: file-manager-sdk
documentation: ug
---

# How to enable or disable a toolbar item in ASP.NET MVC File Manager

The toolbar items can be enabled or disabled by specifying them in the `enableToolbarItems` or `disableToolbarItems` methods, respectively.

The following example shows enabling and disabling toolbar items on button click.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/file-manager-sdk/asp-net-mvc/toolbar-items/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="HomeController_core.cs" %}
{% include code-snippet/file-manager-sdk/asp-net-mvc/toolbar-items/HomeController_core.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/file-manager-sdk/asp-net-mvc/toolbar-items/razor %}
{% endhighlight %}
{% highlight c# tabtitle="HomeController_mvc.cs" %}
{% include code-snippet/file-manager-sdk/asp-net-mvc/toolbar-items/HomeController_mvc.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}



The output will look like the image below when enabling toolbar items.

![File Manager enable toolbar items ](../images/enable_toolbar_items.PNG)

The output will look like the image below when disabling toolbar items.

![File Manager disable toolbar items ](../images/disable_toolbar_items.PNG)