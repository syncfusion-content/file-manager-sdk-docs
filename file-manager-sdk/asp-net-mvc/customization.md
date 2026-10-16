---
layout: post
title: Customization in ASP.NET MVC File Manager | Syncfusion
description: Learn how to customize the ASP.NET MVC File Manager context menu, toolbar, navigation pane, upload, and tooltip using built-in APIs.
control: File Manager
platform: file-manager-sdk
documentation: ug
appliesto: UI Component Suite, File Manager SDK
---


# Customization in ASP.NET MVC File Manager

The File Manager control allows customizing its functionalities such as context menu, searching, uploading, and toolbar using APIs. Given below are some of the functionalities that can be customized in the File Manager,

* [Context menu customization](#context-menu-customization)
* [Details view customization](#details-view-customization)
* [Navigation pane customization](#navigation-pane-customization)
* [Show/Hide file extension](#showhide-file-extension)
* [Show/Hide hidden items](#showhide-hidden-items)
* [Show/Hide thumbnail images in large icons view](#showhide-thumbnail-images-in-large-icons-view)
* [Toolbar customization](#toolbar-customization)
* [Upload customization](#upload-customization)
* [Tooltip customization](#tooltip-customization)

## Context menu customization

The context menu settings, such as items to be displayed on files, folders, layout click, and visibility, can be customized using the `contextMenuSettings` property.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/file-manager-sdk/asp-net-mvc/contextmenu/razor %}
{% endhighlight %}
{% highlight c# tabtitle="HomeController_mvc.cs" %}
{% include code-snippet/file-manager-sdk/asp-net-mvc/contextmenu/HomeController_mvc.cs %}
{% endhighlight %}
{% endtabs %}

The output will be as shown below.

![File Manager contextmenu ](./images/contextmenu_item.PNG)

## Details view customization

The details view settings like, column width, header text, template for each field can be customized using `detailsViewSettings` property.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/file-manager-sdk/asp-net-mvc/details-view/razor %}
{% endhighlight %}
{% highlight c# tabtitle="HomeController_mvc.cs" %}
{% include code-snippet/file-manager-sdk/asp-net-mvc/details-view/HomeController_mvc.cs %}
{% endhighlight %}
{% endtabs %}

Output be like the below.

![File Manager details-view ](./images/details-view.png)

## Navigation pane customization

The navigation pane settings like, minimum and maximum width, visibility and sort order can be customized using `navigationPaneSettings` property.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/file-manager-sdk/asp-net-mvc/navigationpane/razor %}
{% endhighlight %}
{% highlight c# tabtitle="HomeController_mvc.cs" %}
{% include code-snippet/file-manager-sdk/asp-net-mvc/navigationpane/HomeController_mvc.cs %}
{% endhighlight %}
{% endtabs %}

Output be like the below.

![File Manager navigationpane ](./images/navigationpane.PNG)

## Show/Hide file extension

The file extensions are displayed in the File Manager by default. This can be hidden by disabling the `showFileExtension` property.

In File Manager `fileLoad` and `fileOpen` events are triggered before the file/folder is rendered and before the file/folder is opened respectively. These events can be utilized to perform operations before a file/folder is rendered or opened.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/file-manager-sdk/asp-net-mvc/fileextension/razor %}
{% endhighlight %}
{% highlight c# tabtitle="HomeController_mvc.cs" %}
{% include code-snippet/file-manager-sdk/asp-net-mvc/fileextension/HomeController_mvc.cs %}
{% endhighlight %}
{% endtabs %}

Output be like the below.

![File Manager show/hidden extension ](./images/fileextension.PNG)

## Show/Hide hidden items

The File Manager provides support to show/hide the hidden items by enabling/disabling the `showHiddenItems` property.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/file-manager-sdk/asp-net-mvc/hiddenitems/razor %}
{% endhighlight %}
{% highlight c# tabtitle="HomeController_mvc.cs" %}
{% include code-snippet/file-manager-sdk/asp-net-mvc/hiddenitems/HomeController_mvc.cs %}
{% endhighlight %}
{% endtabs %}

Output be like the below.

![File Manager show/hidden items ](./images/hidden_items.png)

## Show/Hide thumbnail images in large icons view

The thumbnail images are displayed in the File Manager's large icons view by default. This can be hidden by disabling the `showThumbnail` property.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/file-manager-sdk/asp-net-mvc/disablethumbnail/razor %}
{% endhighlight %}
{% highlight c# tabtitle="HomeController_mvc.cs" %}
{% include code-snippet/file-manager-sdk/asp-net-mvc/disablethumbnail/HomeController_mvc.cs %}
{% endhighlight %}
{% endtabs %}

Output be like the below.

![File Manager showthumbnail ](./images/thumbnail.PNG)

## Toolbar customization

The toolbar settings, such as items to be displayed in the toolbar and visibility, can be customized using the `toolbarSettings` property.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/file-manager-sdk/asp-net-mvc/toolbar/razor %}
{% endhighlight %}
{% highlight c# tabtitle="HomeController_mvc.cs" %}
{% include code-snippet/file-manager-sdk/asp-net-mvc/toolbar/HomeController_mvc.cs %}
{% endhighlight %}
{% endtabs %}

Output be like the below.

![File Manager toolbar customization ](./images/toolbar_item.PNG)


### See Also

* [How to add new items or customize default items](../file-manager/how-to/adding-custom-item-to-toolbar.md)

## Upload customization

The upload settings, such as minimum and maximum file size and enabling auto upload, can be customized using the `uploadSettings` property.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/file-manager-sdk/asp-net-mvc/upload/razor %}
{% endhighlight %}
{% highlight c# tabtitle="HomeController_mvc.cs" %}
{% include code-snippet/file-manager-sdk/asp-net-mvc/upload/HomeController_mvc.cs %}
{% endhighlight %}
{% endtabs %}

Output be like the below, when file size is below the `minFileSize`.

![File Manager upload customization ](./images/file_size.png)

Output be like the below, when file size is above the `minFileSize`.

![File Manager upload customization ](./images/enable_persistence.PNG)

## Tooltip customization

The tooltip value can be customized by adding extra content to the title of the toolbar, navigation pane, details view and large icons of the File Manager element.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/file-manager-sdk/asp-net-mvc/tooltip/razor %}
{% endhighlight %}
{% highlight c# tabtitle="HomeController_mvc.cs" %}
{% include code-snippet/file-manager-sdk/asp-net-mvc/tooltip/HomeController_mvc.cs %}
{% endhighlight %}
{% endtabs %}

Output be like the below.

![File Manager tooltip customization ](./images/tooltip.png)

## Maintaining component state on page reload

The File Manager supports maintaining the component state on page reload. This can be achieved by enabling [EnablePersistence](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.FileManager.FileManager.html#Syncfusion_EJ2_FileManager_FileManager_EnablePersistence) property which maintains the following,
* Previous view of the File Manager - [View](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.FileManager.FileManager.html#Syncfusion_EJ2_FileManager_FileManager_View)
* Previous path of the File Manager - [Path](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.FileManager.FileManager.html#Syncfusion_EJ2_FileManager_FileManager_Path)
* Previous selected items of the File Manager - [SelectedItems](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.FileManager.FileManager.html#Syncfusion_EJ2_FileManager_FileManager_SelectedItems)

For every operation in File Manager, ajax request will be sent to the server which then processes the request and sends back the response. When the ajax request is success, [Success](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.FileManager.FileManager.html#Syncfusion_EJ2_FileManager_FileManager_Success) event will be triggered and [Failure](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.FileManager.FileManager.html#Syncfusion_EJ2_FileManager_FileManager_Failure) event will be triggered if the request gets failed.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/file-manager-sdk/asp-net-mvc/persistence/razor %}
{% endhighlight %}
{% highlight c# tabtitle="HomeController.cs" %}
{% include code-snippet/file-manager-sdk/asp-net-mvc/persistence/HomeController_mvc.cs %}
{% endhighlight %}
{% endtabs %}

![FileManager enable persistence](images/enable_persistence.png)

N> The files of the current folder opened in the File Manager can be refreshed programmatically by calling `refreshFiles` method

## Specifying the current path of the File Manager

The current path of the File Manager can be specified initially or dynamically using the [Path](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.FileManager.FileManager.html#Syncfusion_EJ2_FileManager_FileManager_Path) property.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/file-manager-sdk/asp-net-mvc/path/razor %}
{% endhighlight %}
{% highlight c# tabtitle="HomeController.cs" %}
{% include code-snippet/file-manager-sdk/asp-net-mvc/path/HomeController_mvc.cs %}
{% endhighlight %}
{% endtabs %}

![FileManager enablertl](images/path.png)

N> [View Sample in GitHub](https://github.com/SyncfusionExamples/ASP-NET-MVC-Getting-Started-Examples/tree/main/FileManager/ASP.NET%20MVC%20Razor%20Examples).
