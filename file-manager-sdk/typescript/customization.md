---
layout: post
title: Customization in TypeScript File Manager component | Syncfusion
description: Learn how to customize the TypeScript File Manager component in Syncfusion Essential JS 2, and more.
platform: file-manager-sdk
control: File Manager
publishingplatform: file-manager-sdk
documentation: ug
domainurl: https://help.syncfusion.com/file-manager-sdk
---

# Customization in TypeScript File Manager component

The File Manager component allows customizing features such as context menu, search, upload, and toolbar using APIs. The following areas can be customized in the File Manager component:

* [Context menu customization](#context-menu-customization)
* [Details view customization](#details-view-customization)
* [Navigation pane customization](#navigation-pane-customization)
* [Show/hide file extension](#showhide-file-extension)
* [Show/hide hidden items](#showhide-hidden-items)
* [Show/hide thumbnail images in large icons view](#showhide-thumbnail-images-in-large-icons-view)
* [Toolbar customization](#toolbar-customization)
* [Upload customization](#upload-customization)
* [Tooltip customization](#tooltip-customization)

## Context menu customization

Context menu settings—such as the items displayed for files, folders, and layout interactions, as well as visibility—can be customized using the [`contextMenuSettings`](../api/file-manager#contextmenusettings) property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/file-manager-sdk/typescript/contextmenu-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager-sdk/typescript/contextmenu-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager-sdk/typescript/contextmenu-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/file-manager-sdk/typescript/contextmenu-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/file-manager-sdk/typescript/contextmenu-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager-sdk/typescript/contextmenu-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager-sdk/typescript/contextmenu-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/file-manager-sdk/typescript/contextmenu-cs1" %}
{% endif %}

## Details view customization

Details view settings—such as column width, header text, and templates for each field—can be customized using the [`detailsViewSettings`](../api/file-manager#detailsviewsettings) property.
{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/file-manager-sdk/typescript/detailsview-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager-sdk/typescript/detailsview-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager-sdk/typescript/detailsview-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/file-manager-sdk/typescript/detailsview-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/file-manager-sdk/typescript/detailsview-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager-sdk/typescript/detailsview-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager-sdk/typescript/detailsview-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/file-manager-sdk/typescript/detailsview-cs1" %}
{% endif %}

## Navigation pane customization

Navigation pane settings—such as minimum and maximum width, visibility, and sort order—can be customized using the [`navigationPaneSettings`](../api/file-manager#navigationpanesettings) property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/file-manager-sdk/typescript/navigationpane-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager-sdk/typescript/navigationpane-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager-sdk/typescript/navigationpane-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/file-manager-sdk/typescript/navigationpane-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/file-manager-sdk/typescript/navigationpane-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager-sdk/typescript/navigationpane-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager-sdk/typescript/navigationpane-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/file-manager-sdk/typescript/navigationpane-cs1" %}
{% endif %}

## Show/hide file extension

File extensions are displayed in the File Manager component by default. Hide them by disabling the [`showFileExtension`](../api/file-manager#showfileextension) property.

In the File Manager component, the [`fileLoad`](../api/file-manager#fileload) and [`fileOpen`](../api/file-manager#fileopen) events are triggered before a file/folder is rendered and before a file/folder is opened, respectively. These events can be used to perform operations before rendering or opening a file/folder.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/file-manager-sdk/typescript/fileextension-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager-sdk/typescript/fileextension-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager-sdk/typescript/fileextension-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/file-manager-sdk/typescript/fileextension-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/file-manager-sdk/typescript/fileextension-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager-sdk/typescript/fileextension-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager-sdk/typescript/fileextension-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/file-manager-sdk/typescript/fileextension-cs1" %}
{% endif %}

## Show/hide hidden items

The File Manager component supports showing or hiding hidden items by enabling or disabling the [`showHiddenItems`](../api/file-manager#showhiddenitems) property.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/file-manager-sdk/typescript/hiddenitems-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager-sdk/typescript/hiddenitems-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager-sdk/typescript/hiddenitems-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/file-manager-sdk/typescript/hiddenitems-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/file-manager-sdk/typescript/hiddenitems-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager-sdk/typescript/hiddenitems-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager-sdk/typescript/hiddenitems-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/file-manager-sdk/typescript/hiddenitems-cs1" %}
{% endif %}

## Show/hide thumbnail images in Large Icons view

Thumbnail images are displayed in the File Manager component's Large Icons view by default. Hide them by disabling the [`showThumbnail`](../api/file-manager#showthumbnail) property.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/file-manager-sdk/typescript/disablethumbnail-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager-sdk/typescript/disablethumbnail-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager-sdk/typescript/disablethumbnail-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/file-manager-sdk/typescript/disablethumbnail-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/file-manager-sdk/typescript/disablethumbnail-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager-sdk/typescript/disablethumbnail-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager-sdk/typescript/disablethumbnail-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/file-manager-sdk/typescript/disablethumbnail-cs1" %}
{% endif %}

## Toolbar customization

Toolbar settings—such as the items displayed and their visibility—can be customized using the [`toolbarSettings`](../api/file-manager#toolbarsettings) property.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/file-manager-sdk/typescript/toolbar-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager-sdk/typescript/toolbar-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager-sdk/typescript/toolbar-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/file-manager-sdk/typescript/toolbar-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/file-manager-sdk/typescript/toolbar-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager-sdk/typescript/toolbar-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager-sdk/typescript/toolbar-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/file-manager-sdk/typescript/toolbar-cs1" %}
{% endif %}

### See Also

* [How to add new items or customize default items](../file-manager/how-to/adding-custom-item-to-toolbar)

## Upload customization

Upload settings—such as minimum and maximum file size and auto upload behavior—can be configured using the [`uploadSettings`](../api/file-manager#uploadsettings) property.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/file-manager-sdk/typescript/upload-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager-sdk/typescript/upload-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager-sdk/typescript/upload-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/file-manager-sdk/typescript/upload-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/file-manager-sdk/typescript/upload-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager-sdk/typescript/upload-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager-sdk/typescript/upload-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/file-manager-sdk/typescript/upload-cs1" %}
{% endif %}

## Tooltip customization

Tooltip values can be customized by adding extra content to the title attributes of the toolbar, navigation pane, Details view, and Large Icons view in the File Manager component.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/file-manager-sdk/typescript/tooltip-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager-sdk/typescript/tooltip-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager-sdk/typescript/tooltip-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/file-manager-sdk/typescript/tooltip-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/file-manager-sdk/typescript/tooltip-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager-sdk/typescript/tooltip-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager-sdk/typescript/tooltip-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/file-manager-sdk/typescript/tooltip-cs1" %}
{% endif %}

## Maintaining control state on page reload

The File Manager can maintain its state on page reload. Enable the [`enablePersistence`](../api/file-manager#enablepersistence) property to preserve the following:
* Previous view of the File Manager - [`view`](../api/file-manager#view)
* Previous path of the File Manager - [`path`](../api/file-manager#path)
* Previous selected items of the File Manager - [`selectedItems`](../api/file-manager#selecteditems)

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/file-manager-sdk/typescript/persistence-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager-sdk/typescript/persistence-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/file-manager-sdk/typescript/persistence-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager-sdk/typescript/es5-getting-started-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/file-manager-sdk/typescript/es5-getting-started-cs5" %}

{% endif %}

>**Note:** Refresh the files of the current folder programmatically by calling the [`refreshFiles`](../api/file-manager#refreshfiles) method.

## Specifying the current path of the File Manager

The current path of the File Manager can be specified initially or dynamically using the [`path`](../api/file-manager#path) property.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}

import { FileManager, Toolbar, NavigationPane, DetailsView } from '@syncfusion/ej2-filemanager';

FileManager.Inject(Toolbar, NavigationPane, DetailsView)

let hostUrl: string = 'https://physical-service.syncfusion.com/';
// initialize File Manager Control
let filemanagerInstance: FileManager = new FileManager({
    ajaxSettings: {
        url: hostUrl + 'api/FileManager/FileOperations',
        getImageUrl: hostUrl + 'api/FileManager/GetImage',
        uploadUrl: hostUrl + 'api/FileManager/Upload',
        downloadUrl: hostUrl + 'api/FileManager/Download'
    },
    // Specify the required current path
    path: '/Pictures'
});

// render initialized File Manager
filemanagerInstance.appendTo('#filemanager');

{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "javascript" %}

```javascript
var hostUrl = 'https://physical-service.syncfusion.com/';
// inject feature modules of the File Manager
ej.filemanager.FileManager.Inject(ej.filemanager.DetailsView,ej.filemanager.Toolbar,ej.filemanager.NavigationPane);
// initialize File Manager Control
var filemanagerInstance = new ej.filemanager.FileManager({
    ajaxSettings: {
        url: hostUrl + 'api/FileManager/FileOperations',
        getImageUrl: hostUrl + 'api/FileManager/GetImage',
        uploadUrl: hostUrl + 'api/FileManager/Upload',
        downloadUrl: hostUrl + 'api/FileManager/Download'
    },
    // Specify the required current path
    path: '/Pictures'
});
// render initialized File Manager
filemanagerInstance.appendTo('#filemanager');
```

{% endif %}