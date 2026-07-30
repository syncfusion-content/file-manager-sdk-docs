---
layout: post
title: Customize the Navigation Pane in File Manager component | Syncfusion
description: Learn here all about Customize the Navigation Pane in Angular File Manager component of Syncfusion Essential JS 2 and more.
platform: file-manager-sdk
control: File Manager 
documentation: ug
domainurl: https://help.syncfusion.com/file-manager-sdk
---

# Customize Navigation Pane in Angular File Manager Component

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