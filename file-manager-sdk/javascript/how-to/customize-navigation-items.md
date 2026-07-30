---
layout: post
title: Customize Navigation in JavaScript File Manager | Syncfusion
description: Learn how to customize the Navigation Pane in the JavaScript File Manager component of Syncfusion Essential JS 2 and more.
platform: file-manager-sdk
control: File Manager
publishingplatform: file-manager-sdk
documentation: ug
domainurl: https://help.syncfusion.com/file-manager-sdk
---

# Customize the navigation pane in JavaScript File Manager component

The navigation pane displays the folder hierarchy in a tree structure. Use the `navigationPaneTemplate` property to customize the layout of each folder node. This template enables showing additional metadata, custom icons, or other UI elements alongside the folder name to match application requirements.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/file-manager-sdk/javascript/navigation-pane-template/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager-sdk/javascript/navigation-pane-template/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager-sdk/javascript/navigation-pane-template/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/file-manager-sdk/javascript/navigation-pane-template" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/file-manager-sdk/javascript/navigation-pane-template/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager-sdk/javascript/navigation-pane-template/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager-sdk/javascript/navigation-pane-template/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/file-manager-sdk/javascript/navigation-pane-template" %}
{% endif %}