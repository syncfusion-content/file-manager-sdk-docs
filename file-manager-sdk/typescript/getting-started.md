---
layout: post
title: Getting started with TypeScript File Manager control | Syncfusion
description: Learn how to get started with the TypeScript File Manager component using Syncfusion Essential JS 2.
platform: file-manager-sdk
control: File Manager
publishingplatform: file-manager-sdk
documentation: ug
domainurl: https://help.syncfusion.com/file-manager-sdk
---

# Getting started with TypeScript File Manager control

This section explains the steps to create a simple File Manager and demonstrates the basic usage of the File Manager component using the Essential<sup style="font-size:70%">&reg;</sup> JS 2
[quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack) seed repository. This seed repository is pre-configured with the Essential<sup style="font-size:70%">&reg;</sup> JS 2 package.

> This application is integrated with the **webpack.config.js** configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli#commands). For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started).

## Prerequisites

To get started with application, ensure the following software to be installed in the machine.

| Requirement | Version |
|-------------|---------|
| [git](https://git-scm.com/downloads) | Latest version |
| [Node.js](https://nodejs.org/en/) | 14.15.0 or above |
| [Visual Studio Code](https://code.visualstudio.com/) | Latest version |


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

## Setup for local development

Clone the Essential<sup style="font-size:70%">&reg;</sup> JS 2 quickstart application project from [GitHub](https://github.com/SyncfusionExamples/ej2-quickstart-webpack) using the following command line scripts.

```
git clone https://github.com/SyncfusionExamples/ej2-quickstart-webpack
cd ej2-quickstart-webpack
```

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript File Manager package

Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) packages are available on the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. You can install all Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) controls in a single [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package or individual packages for each control.

Use the following command to install the `@syncfusion/ej2-filemanager` package:

```
npm install @syncfusion/ej2-filemanager --save
```

Then, install the remaining dependent npm packages using the following command:

```
npm install
```

## Adding CSS reference

Themes for Syncfusion<sup style="font-size:70%">&reg;</sup> File Manager components can be applied using CSS files provided through [npm theme packages](https://www.npmjs.com/package/@syncfusion/ej2-tailwind3-theme). For available themes, refer to the [Themes](https://ej2.syncfusion.com/react/documentation/appearance/theme) documentation.

Install the **Tailwind 3** theme package using the following command:
 
{% tabs %}
{% highlight bash tabtitle="npm" %}
 
npm install @syncfusion/ej2-tailwind3-theme --save
 
{% endhighlight %}
{% endtabs %}
 
Then add the following CSS reference to the **~src/style.css** file:
 
{% tabs %}
{% highlight css tabtitle="style.css" %}
 
@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/file-manager/index.css";
 
{% endhighlight %}
{% endtabs %}

## Adding File Manager control

Add the File Manager component in **src/app/app.ts** file using the following code.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { FileManager, Toolbar, NavigationPane, DetailsView } from '@syncfusion/ej2-filemanager';
import './style.css';

FileManager.Inject(Toolbar, NavigationPane, DetailsView);

let hostUrl: string = 'https://physical-service.syncfusion.com/';
let filemanagerInstance: FileManager = new FileManager({
  ajaxSettings: {
    url: hostUrl + 'api/FileManager/FileOperations'
  }
});

filemanagerInstance.appendTo('#filemanager');

{% endhighlight %}

{% highlight css tabtitle="styles.css" %}

@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/file-manager/index.css";

{% endhighlight %}

{% highlight html tabtitle="index.html" %}
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>my-app</title>
  </head>
  <body>
    <div id="filemanager"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>

{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/file-manager-sdk/typescript/help.syncfusion.com/code-snippet/file-manager-sdk/typescript/getting-started-cs1" %}

### Server-side setup

The sample uses `https://physical-service.syncfusion.com` as the [`url`](../api/file-manager/ajaxsettings#url) endpoint in [`ajaxSettings`](../api/file-manager#ajaxsettings).

To use your own files, host a File Manager service and replace the `url` value with your service endpoint. See the [File System Provider](../file-system-provider) documentation for setup details.

>Note: The [`ajaxSettings`](../api/file-manager#ajaxsettings) property must be defined while initializing the File Manager. File Manager utilizes the URLs mentioned in `ajaxSettings` to send file operation requests to the server. The File Manager service link is provided in the `hostUrl` variable.

## Run the application

Use the following command to run the application in the browser.

```bash
npm run dev
```

## Registering Syncfusion license

Syncfusion<sup style="font-size:70%">&reg;</sup> Essential<sup style="font-size:70%">&reg;</sup> JS 2 components require a valid license key from version **16.2.0.41** onwards. Using the components without a license key will display a **license validation message** in the browser console.

**Steps to register the license key:**

1. Sign in to the [Syncfusion License Portal](https://www.syncfusion.com/account/downloads) and copy your license key.
2. Register the key in your **src/app/app.ts** file, before instantiating any Syncfusion component:

```ts
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense('YOUR_LICENSE_KEY_HERE');
```

> For more details on obtaining and registering a license key, refer to the [License Key Generation](https://ej2.syncfusion.com/documentation/licensing/license-key-generation) and [License Key Registration](https://ej2.syncfusion.com/documentation/licensing/license-key-registration) documentation.

## Troubleshooting

**File Manager styles are not applied:** Ensure that the required Syncfusion theme package is installed and the theme CSS is imported correctly in the `src/styles/styles.css` file.

**Trial license warning message:** Register your Syncfusion license key before initializing any Syncfusion<sup style="font-size:70%">&reg;</sup> control. Refer to the [Registering a license key](https://ej2.syncfusion.com/documentation/licensing/license-key-registration#register-syncfusion-license-key-in-the-project) section.

## See also

* [Ajax Settings Configuration (uploadUrl, downloadUrl, getImageUrl)](../file-operations.md#ajax-settings-configuration)
* [Injecting Services for Overview](../user-interface#injecting-services-for-overview)
* [File Manager Views](../views)
* [File Manager File Operations](../file-operations)
* [File Manager Upload](../upload)
* [File Manager Customization](../customization)