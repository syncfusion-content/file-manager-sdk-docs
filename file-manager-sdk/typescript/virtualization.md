---
layout: post
title: Virtualization in TypeScript File Manager component | Syncfusion
description: Learn how to enable UI virtualization for the TypeScript File Manager component to efficiently render large file sets in Details and Large Icons views.
platform: file-manager-sdk
control: File Manager
publishingplatform: file-manager-sdk
documentation: ug
domainurl: https://help.syncfusion.com/file-manager-sdk
---

# Virtualization in TypeScript File Manager component

The File Manager control's UI virtualization allows for the dynamic loading of a large number of directories and files in both the details view and large icons view without degrading performance.

## Module injection

To use UI virtualization, you must import the `Virtualization` module from the `ej2-filemanager` package and inject it using the `FileManager.Inject()` function.

```ts

import { FileManager, Virtualization } from '@syncfusion/ej2-filemanager';

FileManager.Inject(Virtualization);

```

## Enable virtualization

Virtualization behavior depends on the viewport size (height/width). Enable it by setting the [`enableVirtualization`](../api/file-manager#enablevirtualization) property to `true`. Virtualization applies to both Large Icons and Details views where supported.

In the example below, a sizable collection of files can be found in the folders **Documents** and **Text Documents**.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/file-manager-sdk/typescript/virtualization-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager-sdk/typescript/virtualization-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager-sdk/typescript/virtualization-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/file-manager-sdk/typescript/virtualization-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/file-manager-sdk/typescript/virtualization-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager-sdk/typescript/virtualization-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager-sdk/typescript/virtualization-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/file-manager-sdk/typescript/virtualization-cs1" %}
{% endif %}

## Limitations for Virtualization

* Programmatic selection using the [`selectAll`](../api/file-manager#selectall) method is not supported with virtual scrolling.
* The keyboard shortcut **CTRL+A** will only select the files and directories that are currently visible within the viewport, rather than selecting all files and directories in the entire directory tree.
* Selected file items are not maintained while scrolling, considering the performance of the control.