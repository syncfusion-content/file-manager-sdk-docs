---
layout: post
title: Selection in TypeScript File Manager component | Syncfusion
description: Learn how to use and configure multiple selection, range selection, and disabling multi-selection in the TypeScript File Manager component.
platform: file-manager-sdk
control: File Manager
publishingplatform: file-manager-sdk
documentation: ug
domainurl: https://help.syncfusion.com/file-manager-sdk
---

# Multiple selection in TypeScript File Manager component

The File Manager component supports multiple selection by enabling the [`allowMultiSelection`](../api/file-manager#allowmultiselection) property (enabled by default). Use the Ctrl or Shift keys while selecting items to create multi-selection ranges; checkboxes can also be used. Use `Ctrl + A` to select all items in the current directory. The [`fileSelect`](../api/file-manager#fileselect) is triggered whenever items are selected or unselected.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/file-manager-sdk/typescript/multiselect-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager-sdk/typescript/multiselect-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager-sdk/typescript/multiselect-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/file-manager-sdk/typescript/multiselect-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/file-manager-sdk/typescript/multiselect-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager-sdk/typescript/multiselect-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager-sdk/typescript/multiselect-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/file-manager-sdk/typescript/multiselect-cs1" %}
{% endif %}

> Note: The File Manager control supports selecting files and folders initially or dynamically by specifying their names in the [`selectedItems`](../api/file-manager#selecteditems) property.

## Range selection

The File Manager control supports selecting files and folders in specific ranges through mouse drag, similar to File Explorer. This is especially useful in scenarios where users need to select a large group of files quickly without manually clicking each one. 

{% if page.publishingplatform == "typescript" %}

To enable range selection, you need to set the [`enableRangeSelection`](../api/file-manager#enablerangeselection) property to `true` and ensure that multi-selection is allowed using the [`allowMultiSelection`](../api/file-manager#allowmultiselection) property.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/file-manager-sdk/typescript/rangeselection-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager-sdk/typescript/rangeselection-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager-sdk/typescript/rangeselection-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/file-manager-sdk/typescript/rangeselection-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

To enable range selection, you need to set the [`enableRangeSelection`](https://ej2.syncfusion.com/javascript/documentation/api/file-manager#allowmultiselection_enableRangeSelection) property to `true` and ensure that multi-selection is allowed using the [`allowMultiSelection`](https://ej2.syncfusion.com/javascript/documentation/api/file-manager#allowmultiselection) property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/file-manager-sdk/typescript/rangeselection-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager-sdk/typescript/rangeselection-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager-sdk/typescript/rangeselection-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/file-manager-sdk/typescript/rangeselection-cs1" %}
{% endif %}

## Disable multi selection

Setting the [`allowMultiSelection`](../api/file-manager#allowmultiselection) property to false will prevent you from selecting multiple files or folders with standard selection methods. However, you can still select multiple items if checkboxes are visible. To fully disable all multi-selection capabilities, you must also set the [`showItemCheckBoxes`](../api/file-manager#showitemcheckboxes) property to false. This ensures that you cannot use checkboxes for multiple selections.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight js tabtitle="index.ts" %}
{% include code-snippet/file-manager-sdk/typescript/disablemultiselection-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager-sdk/typescript/disablemultiselection-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager-sdk/typescript/disablemultiselection-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/file-manager-sdk/typescript/disablemultiselection-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/file-manager-sdk/typescript/disablemultiselection-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager-sdk/typescript/disablemultiselection-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager-sdk/typescript/disablemultiselection-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/file-manager-sdk/typescript/disablemultiselection-cs1" %}
{% endif %}
