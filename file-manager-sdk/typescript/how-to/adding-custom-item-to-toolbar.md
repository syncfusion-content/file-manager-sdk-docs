---
layout: post
title: Add custom item to toolbar in TypeScript File Manager | Syncfusion
description: Learn how to add and customize toolbar items in the TypeScript File Manager control to support custom commands and actions.
platform: file-manager-sdk
control: File Manager
publishingplatform: file-manager-sdk
documentation: ug
domainurl: https://help.syncfusion.com/file-manager-sdk
---

# Add Custom Toolbar Item in TypeScript File Manager

Use the [`toolbarItems`](../../api/file-manager#toolbaritems) API to modify the items displayed in the toolbar. When combining default and custom items, assign a unique `name` to each item so they can be managed independently. Default items can be customized by setting properties such as `tooltipText`, `iconCss`, `text`, `suffixIcon`, and `template`.

The example below demonstrates adding a custom checkbox to the toolbar using the `template` property. It also shows how to modify the default `NewFolder` item and add a custom toolbar item for selection.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/file-manager-sdk/typescript/toolbar-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager-sdk/typescript/toolbar-cs2/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager-sdk/typescript/toolbar-cs2/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/file-manager-sdk/typescript/toolbar-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/file-manager-sdk/typescript/toolbar-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager-sdk/typescript/toolbar-cs2/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager-sdk/typescript/toolbar-cs2/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/file-manager-sdk/typescript/toolbar-cs2" %}
{% endif %}
