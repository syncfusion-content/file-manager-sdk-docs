---
layout: post
title: Drag and drop in JavaScript File Manager component | Syncfusion
description: Learn how to enable and configure drag-and-drop in the JavaScript File Manager component, and the events it raises during the operation.
platform: file-manager-sdk
control: File Manager
publishingplatform: file-manager-sdk
documentation: ug
domainurl: https://help.syncfusion.com/file-manager-sdk
---

# Drag and drop in JavaScript File Manager component

The File Manager component supports moving files and folders within the file system using drag-and-drop. Enable or disable this feature using the [`allowDragAndDrop`](../api/file-manager#allowdraganddrop) property of the File Manager.

The following events are raised during drag-and-drop operations:

* [`fileDragStart`](../api/file-manager#filedragstart) - Triggered when file or folder dragging starts.
* [`fileDragging`](../api/file-manager#filedragging) - Triggered while the file or folder is being dragged.
* [`fileDragStop`](../api/file-manager#filedragstop) - Triggered when the file or folder is about to be dropped on the target.
* [`fileDropped`](../api/file-manager#filedropped) - Triggered after the file or folder has been dropped.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/file-manager-sdk/javascript/drag-and-drop-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager-sdk/javascript/drag-and-drop-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager-sdk/javascript/drag-and-drop-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/file-manager-sdk/javascript/drag-and-drop-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/file-manager-sdk/javascript/drag-and-drop-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager-sdk/javascript/drag-and-drop-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager-sdk/javascript/drag-and-drop-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/file-manager-sdk/javascript/drag-and-drop-cs1" %}
{% endif %}