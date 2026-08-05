---
layout: post
title: Enable or disable a toolbar item in TypeScript File Manager | Syncfusion
description: Learn how to enable or disable a toolbar item in the TypeScript File Manager at runtime based on user actions or selection state.
control: File Manager
platform: file-manager-sdk
publishingplatform: file-manager-sdk
documentation: ug
domainurl: https://help.syncfusion.com/file-manager-sdk
---

# How to enable or disable a toolbar item in TypeScript File Manager

Toolbar items can be enabled or disabled using the [`enableToolbarItems`](../../api/file-manager#enabletoolbaritems) and [`disableToolbarItems`](../../api/file-manager#disabletoolbaritems) methods.

The example below demonstrates enabling and disabling toolbar items via button click.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/file-manager-sdk/typescript/toolbar-items-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager-sdk/typescript/toolbar-items-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager-sdk/typescript/toolbar-items-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/file-manager-sdk/typescript/toolbar-items-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/file-manager-sdk/typescript/toolbar-items-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager-sdk/typescript/toolbar-items-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager-sdk/typescript/toolbar-items-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/file-manager-sdk/typescript/toolbar-items-cs1" %}
{% endif %}