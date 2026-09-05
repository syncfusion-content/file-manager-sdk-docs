---
layout: post
title: Use nested File Manager in Angular | Syncfusion
description: Learn how to integrate the Angular Angular File Manager within components such as Tab and Dialog to build flexible and interactive application layouts.
control: File Manager
platform: file-manager-sdk
documentation: ug
domainurl: https://help.syncfusion.com/file-manager-sdk
---

# Nested items in Angular File Manager component

The Angular File Manager component can be seamlessly rendered inside other Syncfusion components such as Dialog, Tab, and more. This integration capability allows you to create complex interfaces where file management functionality is needed within different UI contexts.

* [Adding Angular File Manager inside a Dialog](#adding-file-manager-inside-the-dialog)
* [Adding Angular File Manager inside a Tab](#adding-file-manager-inside-the-tab)

When nesting the Angular File Manager, consider the parent container's dimensions as they will affect the Angular File Manager's display area. You may need to adjust the width and height properties accordingly to ensure proper visibility and usability.

## Adding Angular File Manager inside a Dialog

The following example demonstrates how to render the Angular File Manager component inside a Dialog. When users click the browse button in the Uploader element, the Angular File Manager opens within a Dialog component, allowing them to select files from the managed file system. Once files are selected, they can be processed according to your application's needs.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/file-manager-sdk/angular/file-dialog-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/file-manager-sdk/angular/file-dialog-cs1/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/file-manager-sdk/angular/file-dialog-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
{% previewsample "https://help.syncfusion.com/samples/file-manager-sdk/angular/file-dialog-cs1" %}

## Adding Angular File Manager inside a Tab

The following example demonstrates how to place the Angular File Manager component inside the content area of a Tab element.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/file-manager-sdk/angular/file-tab-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/file-manager-sdk/angular/file-tab-cs1/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/file-manager-sdk/angular/file-tab-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/file-manager-sdk/angular/file-tab-cs1" %}