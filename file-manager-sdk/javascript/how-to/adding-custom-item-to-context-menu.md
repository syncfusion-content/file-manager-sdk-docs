---
layout: post
title: Add Custom Menu Item in JavaScript File Manager | Syncfusion
description: Learn how to add custom items to the context menu in the JavaScript File Manager control and handle custom actions effectively.
platform: file-manager-sdk
control: File Manager
publishingplatform: file-manager-sdk
documentation: ug
domainurl: https://help.syncfusion.com/file-manager-sdk
---

# Add Custom Context Menu Item in JavaScript File Manager

The context menu can be customized using the [`contextMenuSettings`](../../api/file-manager#contextmenusettings), [`menuOpen`](../../api/file-manager#menuopen), and [`menuClick`](../../api/file-manager#menuclick) events.

The example below shows how to add a custom item to the context menu. Use the `contextMenuSettings` property to add the item, the `menuOpen` event to add an icon, and the `menuClick` event to handle the item's action.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/file-manager-sdk/javascript/contextmenu-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager-sdk/javascript/contextmenu-cs2/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager-sdk/javascript/contextmenu-cs2/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/file-manager-sdk/javascript/contextmenu-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/file-manager-sdk/javascript/contextmenu-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager-sdk/javascript/contextmenu-cs2/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager-sdk/javascript/contextmenu-cs2/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/file-manager-sdk/javascript/contextmenu-cs2" %}
{% endif %}