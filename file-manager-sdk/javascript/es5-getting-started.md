---
layout: post
title: Getting started with JavaScript File Manager control | Syncfusion
description: Learn how to get started with the ES5 JavaScript File Manager component using Syncfusion Essential JS 2.
platform: file-manager-sdk
control: File Manager
publishingplatform: file-manager-sdk
documentation: ug
domainurl: https://help.syncfusion.com/file-manager-sdk
---

# Getting started with JavaScript File Manager control

This section explains the steps required to create a simple Essential<sup style="font-size:70%">&reg;</sup> JS 2 File Manager and demonstrate the basic usage of the File Manager control in a JavaScript application.

## Prerequisites

To get started with application, ensure the following software to be installed in the machine.

* [git](https://git-scm.com/downloads)
* [Node.js](https://nodejs.org/en/)

### Browser support

| Browser | Supported versions |
|----------|----------|
| Chrome | 63+ |
| Firefox | 58+ |
| Opera | 50+ |
| Edge | 13+ |
| IE | 11+ |
| Safari | 9+ |
| iOS | 9+ |
| Android | 4.4+ |
| Windows Mobile | IE 11+ |

## Dependencies

The following list shows the dependencies required to use the File Manager with all its features.

```javascript
|-- @syncfusion/ej2-filemanager
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-layouts
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-lists
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-splitbuttons
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-grids
```

## Setup for local environment

Follow these steps to set up your local environment.

**Step 1:** Create a root folder named **my-app** for your application.

**Step 2:** Open Visual Studio Code and create two files inside the **my-app** folder:
- **index.html** — the main HTML file that loads the CDN resources and provides the File Manager container element.
- **index.js** — the JavaScript file where the File Manager control is initialized.

Refer to the [Adding Syncfusion File Manager CDN resources](#adding-syncfusion-file-manager-cdn-resources) and [Adding File Manager control](#adding-file-manager-control) sections below for the content to add to each file.

**Step 3:** In **index.html**, add a `<script>` tag at the end of `<body>` to link **index.js**:

```html
<script src="index.js" type="text/javascript"></script>
```

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> File Manager CDN resources

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 File Manager control can be initialized by the following way.

This setup includes additional dependencies required for more advanced functionalities of the File Manager, such as buttons, dropdowns, navigations and other components. Use this setup when you need to integrate additional features like filtering, sorting, context menu, and more.

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>Essential JS 2 File Manager</title>
    <!-- Essential JS 2 File Manager's dependent bootstrap5.3 theme -->
    <link href="http://cdn.syncfusion.com/ej2/ej2-base/styles/bootstrap5.3.css" rel="stylesheet" type="text/css" />
    <link href="http://cdn.syncfusion.com/ej2/ej2-popups/styles/bootstrap5.3.css" rel="stylesheet" type="text/css" />
    <link href="http://cdn.syncfusion.com/ej2/ej2-filemanager/styles/bootstrap5.3.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/ej2-buttons/styles/bootstrap5.3.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/ej2-navigations/styles/bootstrap5.3.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/ej2-dropdowns/styles/bootstrap5.3.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/ej2-lists/styles/bootstrap5.3.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/ej2-inputs/styles/bootstrap5.3.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/ej2-splitbuttons/styles/bootstrap5.3.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/ej2-layouts/styles/bootstrap5.3.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/ej2-grids/styles/bootstrap5.3.css" rel="stylesheet" type="text/css" />

    <!-- Essential JS 2 File Manager's dependent scripts -->
    <script src="https://cdn.syncfusion.com/ej2/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-data/dist/global/ej2-data.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-popups/dist/global/ej2-popups.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-filemanager/dist/global/ej2-filemanager.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-buttons/dist/global/ej2-buttons.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-navigations/dist/global/ej2-navigations.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-dropdowns/dist/global/ej2-dropdowns.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-lists/dist/global/ej2-lists.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-inputs/dist/global/ej2-inputs.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-splitbuttons/dist/global/ej2-splitbuttons.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-layouts/dist/global/ej2-layouts.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-grids/dist/global/ej2-grids.min.js" type="text/javascript"></script>
</head>
<body>
</body>
</html>
```

> To include all required Essential JS 2 styles and scripts, use the following CDN links.
>
> Essential JS 2 combined bootstrap5.3 theme (all components)
> <link href="https://cdn.syncfusion.com/ej2/34.1.29/bootstrap5.3.css" rel="stylesheet" type="text/css" />
>
> Essential JS 2 combined script (all components)
> <script src="https://cdn.syncfusion.com/ej2/34.1.29/dist/ej2.min.js" type="text/javascript"></script>

## Adding File Manager control

You can start adding Essential<sup style="font-size:70%">&reg;</sup> JS 2 file manager control to the application. To get started, add the file manager control in **index.js** file using the following code.

{% tabs %}
{% highlight js tabtitle="index.js" %}
var hostUrl = 'https://physical-service.syncfusion.com/';
var filemanagerInstance = new ej.filemanager.FileManager({
    ajaxSettings: {
        url: hostUrl + 'api/FileManager/FileOperations'
    }
});
filemanagerInstance.appendTo('#filemanager');
{% endhighlight %}

{% highlight html tabtitle="index.html" %}
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <title>Essential JS 2 File Manager</title>

    <!-- Essential JS 2 bootstrap5.3 theme -->
    <link href="https://cdn.syncfusion.com/ej2/33.1.44/bootstrap5.3.css" rel="stylesheet" type="text/css" />
    <!-- Essential JS 2 all script -->
    <script src="https://cdn.syncfusion.com/ej2/33.1.44/dist/ej2.min.js" type="text/javascript"></script>

</head>

<body>
    <!-- Add the HTML <div> element for File Manager  -->
    <div id="filemanager"></div>
    <script src="index.js" type="text/javascript"></script>
</body>

</html>
{% endhighlight %}

{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/file-manager-sdk/javascript/help.syncfusion.com/code-snippet/file-manager-sdk/javascript/es5-getting-started-cs1" %}

### Server-side setup

The sample uses `https://physical-service.syncfusion.com` as the [`url`](../api/file-manager/ajaxsettings#url) endpoint in [`ajaxSettings`](../api/file-manager#ajaxsettings).

To use your own files, host a File Manager service and replace the `url` value with your service endpoint. See the [File System Provider](../file-system-provider) documentation for setup details.

>Note: The [`ajaxSettings`](../api/file-manager#ajaxsettings) property must be defined while initializing the File Manager. File Manager utilizes the URLs mentioned in `ajaxSettings` to send file operation requests to the server. The File Manager service link is provided in the `hostUrl` variable.

## Run the application

Now, run the **index.html** in web browser, it will render the Essential<sup style="font-size:70%">&reg;</sup> JS 2 File Manager control.


## Registering Syncfusion license

Syncfusion<sup style="font-size:70%">&reg;</sup> Essential<sup style="font-size:70%">&reg;</sup> JS 2 controls require a valid license key from version 16.2.0.17 onwards. Without a license key, a license validation message will appear in the browser console.

**Step 1:** Obtain your license key from the [Syncfusion License Portal](https://www.syncfusion.com/account/downloads) or from the [licensing FAQ page](https://ej2.syncfusion.com/documentation/licensing/licensing-troubleshoot).

**Step 2:** Register the license key in your **index.js** file before initializing any Syncfusion<sup style="font-size:70%">&reg;</sup> control.

```javascript
// Register Syncfusion license key
ej.base.registerLicense('YOUR_LICENSE_KEY_HERE');
```

> Replace `'YOUR_LICENSE_KEY_HERE'` with the actual license key obtained from your Syncfusion account. For more information, refer to the [Syncfusion Licensing documentation](https://ej2.syncfusion.com/documentation/licensing/license-key-registration).

## Troubleshooting

**File Manager styles are not applied:** Ensure that the required Syncfusion theme CDN link is correctly included in `index.html` file. Verify that the CDN links are accessible and loaded before the File Manager is rendered.

**Trial license warning message:** Register your Syncfusion license key before initializing any Syncfusion<sup style="font-size:70%">&reg;</sup> control. Refer to the [Registering a license key](https://ej2.syncfusion.com/javascript/documentation/licensing/license-key-registration#javascript-es5) section.

## See also

* [Ajax Settings Configuration (uploadUrl, downloadUrl, getImageUrl)](../file-operations.md#ajax-settings-configuration)
* [Injecting Services for Overview](../user-interface#injecting-services-for-overview)
* [File Manager Views](../views)
* [File Manager File Operations](../file-operations)
* [File Manager Upload](../upload)
* [File Manager Customization](../customization)