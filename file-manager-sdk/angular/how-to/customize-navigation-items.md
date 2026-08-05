---
layout: post
title: Customize the navigation pane in Angular File Manager | Syncfusion
description: Learn how to customize the navigation pane in the Angular File Manager by templating each folder node to show extra metadata or custom icons.
control: File Manager
platform: file-manager-sdk
documentation: ug
domainurl: https://help.syncfusion.com/file-manager-sdk
---

# How to customize the navigation pane in Angular File Manager

The navigation pane in the File Manager Component displays the folder hierarchy in a tree-like structure. You can customize the layout of each folder node in the navigation pane using the `navigationPaneTemplate` property. This allows you to modify the appearance of folders based on your application's requirements.

You may use this template to show additional metadata, custom icons, or other UI elements alongside the folder name.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/file-manager-sdk/angular/navigation-pane-template/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/file-manager-sdk/angular/navigation-pane-template/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/file-manager-sdk/angular/navigation-pane-template/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/file-manager-sdk/angular/navigation-pane-template" %}