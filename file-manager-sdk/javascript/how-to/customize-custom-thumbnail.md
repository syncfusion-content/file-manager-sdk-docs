---
layout: post
title: Customize thumbnails in JavaScript File Manager | Syncfusion
description: Learn how to customize thumbnails in the JavaScript File Manager by adding your own icons for file types and folders in the LargeIcons view.
control: File Manager
platform: file-manager-sdk
publishingplatform: file-manager-sdk
documentation: ug
domainurl: https://help.syncfusion.com/file-manager-sdk
---

# How to customize thumbnails in JavaScript File Manager

The File Manager's thumbnail appearance can be customized by enabling and configuring the [`showThumbnail`](../../api/file-manager#showthumbnail) property.

The example below shows how to add a custom thumbnail/icon for items in the large icons view.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/file-manager-sdk/javascript/custom-thumbnail-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager-sdk/javascript/custom-thumbnail-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager-sdk/javascript/custom-thumbnail-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/file-manager-sdk/javascript/custom-thumbnail-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/file-manager-sdk/javascript/custom-thumbnail-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager-sdk/javascript/custom-thumbnail-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager-sdk/javascript/custom-thumbnail-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/file-manager-sdk/javascript/custom-thumbnail-cs1" %}
{% endif %}