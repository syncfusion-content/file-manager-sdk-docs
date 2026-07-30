---
layout: post
title: Manage Toolbar Items in JavaScript File Manager | Syncfusion
description: Learn how to enable or disable toolbar items in the JavaScript File Manager control to customize available user actions.
platform: file-manager-sdk
control: File Manager
publishingplatform: file-manager-sdk
documentation: ug
domainurl: https://help.syncfusion.com/file-manager-sdk
---

# Enable or Disable Toolbar Item in JavaScript File Manager

Toolbar items can be enabled or disabled using the [`enableToolbarItems`](../../api/file-manager#enabletoolbaritems) and [`disableToolbarItems`](../../api/file-manager#disabletoolbaritems) methods.

The example below demonstrates enabling and disabling toolbar items via button click.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/file-manager-sdk/javascript/toolbar-items-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager-sdk/javascript/toolbar-items-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager-sdk/javascript/toolbar-items-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/file-manager-sdk/javascript/toolbar-items-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/file-manager-sdk/javascript/toolbar-items-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager-sdk/javascript/toolbar-items-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager-sdk/javascript/toolbar-items-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/file-manager-sdk/javascript/toolbar-items-cs1" %}
{% endif %}