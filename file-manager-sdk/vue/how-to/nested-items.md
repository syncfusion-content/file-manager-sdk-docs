---
layout: post
title: Use nested File Manager in Vue | Syncfusion
description: Learn how to integrate the Vue File Manager within components such as Tab and Dialog to build flexible and interactive application layouts.
control: File Manager
platform: file-manager-sdk
documentation: ug
domainurl: https://help.syncfusion.com/file-manager-sdk
---

# Nested items in Vue File Manager component

The File Manager can be rendered inside other components such as Tab, Dialog, and more.

* [Adding File Manager inside the dialog](#adding-file-manager-inside-the-dialog)
* [Adding  File Manager inside the tab](#adding-file-manager-inside-the-tab)

## Adding File Manager inside the dialog

The example below shows the File Manager rendered inside a Dialog. Use the Upload component's browse button to open the File Manager inside the Dialog.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/file-manager-sdk/vue/file-upload-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/file-manager-sdk/vue/file-upload-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/file-manager-sdk/vue/file-upload-cs1" %}

## Adding File Manager inside the tab

The following example demonstrates placing the File Manager inside a Tab's content area.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/file-manager-sdk/vue/file-tab-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/file-manager-sdk/vue/file-tab-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/file-manager-sdk/vue/file-tab-cs1" %}