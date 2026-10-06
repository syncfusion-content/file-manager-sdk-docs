---
layout: post
title: Getting Started with Blazor FileManager in Blazor WebAssembly App | Syncfusion
description: Learn how to get started with the Blazor FileManager component in a Blazor WebAssembly App using Visual Studio, VS Code, or the .NET CLI.
control: File Manager
platform: file-manager-sdk
documentation: ug
appliesto: UI Component Suite, File Manager SDK
---

<!-- markdownlint-disable MD024 -->

# Getting Started with Blazor FileManager in Blazor WebAssembly App

This section briefly explains how to include the [Blazor FileManager](https://www.syncfusion.com/blazor-components/blazor-file-manager) component in a Blazor WebAssembly App using [Visual Studio](https://visualstudio.microsoft.com/vs/), [Visual Studio Code](https://code.visualstudio.com/), and the [.NET CLI](https://learn.microsoft.com/en-us/dotnet/core/tools/).

> **Ready to streamline your Blazor development?** <br/>Discover the full potential of Blazor components with AI Coding Assistants. Effortlessly integrate, configure, and enhance projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into preferred AI-powered IDEs like VS Code, Cursor, CodeStudio and more. [Explore AI Coding Assistants](https://blazor.syncfusion.com/documentation/ai-coding-assistant/overview)

**Prerequisites:** Install the [.NET SDK](https://dotnet.microsoft.com/download) (6.0 or later) for your target framework.

Throughout this document, `{{ site.releaseversion }}` represents the current Syncfusion Essential Studio version. Replace it with the published version (for example, `27.1.48`) when copying the snippets below.

## Using .NET CLI Templates

Quickly set up a Blazor application using the preconfigured [Syncfusion WebAssembly App Template](https://help.syncfusion.com/extension/syncfusion-blazor-webassemblyapp-template-via-nuget/installation).

First, install the template using the .NET CLI.

{% tabs %}
{% highlight bash tabtitle="Terminal" %}

dotnet new install Syncfusion.Blazor.WebAssemblyApp.Templates

{% endhighlight %}
{% endtabs %}

Verify the template is installed by running `dotnet new list syncfusion`. Confirm that `syncfusionblazorwasmapp` appears in the output.

Next, create a new project using the following command. The `--pwa true` flag enables Progressive Web App support.

{% tabs %}
{% highlight bash tabtitle="Terminal" %}

dotnet new syncfusionblazorwasmapp --name MyApp --pwa true

{% endhighlight %}

{% endtabs %}

After creating the project, navigate to the main project folder (for example, `MyApp`) and run the following command.

{% highlight bash tabtitle="Terminal" %}

cd MyApp
dotnet run

{% endhighlight %}

## Manually creating a new Blazor WebAssembly App

Use the following manual steps only if you choose not to scaffold from the Syncfusion template above. When you use the template, it automatically installs the NuGet packages, registers namespaces, registers services, and adds resource references, so you can skip the matching sections below.

{% tabcontents %}

{% tabcontent Visual Studio %}

Create a **Blazor WebAssembly App** using Visual Studio via [Microsoft Templates](https://learn.microsoft.com/en-us/aspnet/core/blazor/tooling?view=aspnetcore-10.0&pivots=vs) or the [Syncfusion® Blazor Extension](https://blazor.syncfusion.com/documentation/visual-studio-integration/template-studio).

{% endtabcontent %}

{% tabcontent Visual Studio Code %}

Create a **Blazor WebAssembly App** in Visual Studio Code using one of the following:

- **Microsoft Templates** — run `dotnet new blazorwasm -o BlazorApp` from the integrated terminal.
- **Syncfusion® Blazor Extension** — see [create project from VS Code](https://blazor.syncfusion.com/documentation/visual-studio-code-integration/create-project).
- **C# Dev Kit** extension — see the [C# Dev Kit marketplace page](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csdevkit).

{% tabs %}
{% highlight bash tabtitle="Terminal" %}

dotnet new blazorwasm -o BlazorApp
cd BlazorApp

{% endhighlight %}
{% endtabs %}

{% endtabcontent %}

{% endtabcontents %}

### Install the required Blazor packages

Install the [Syncfusion.Blazor.FileManager](https://www.nuget.org/packages/Syncfusion.Blazor.FileManager) and [Syncfusion.Blazor.Themes](https://www.nuget.org/packages/Syncfusion.Blazor.Themes/) NuGet packages. All Syncfusion Blazor packages are available on [nuget.org](https://www.nuget.org/packages?q=syncfusion.blazor). See the [NuGet packages](https://blazor.syncfusion.com/documentation/nuget-packages) topic for details.

{% tabcontents %}

{% tabcontent Visual Studio %}

1. Go to *Tools → NuGet Package Manager → Manage NuGet Packages for Solution*.
2. Search the required NuGet packages (`Syncfusion.Blazor.FileManager` and `Syncfusion.Blazor.Themes`) and install them.

Alternatively, you can install the same packages using the Package Manager Console with the following commands.

{% tabs %}
{% highlight csharp tabtitle="Package Manager Console" %}

Install-Package Syncfusion.Blazor.FileManager -Version {{ site.releaseversion }}
Install-Package Syncfusion.Blazor.Themes -Version {{ site.releaseversion }}

{% endhighlight %}
{% endtabs %}

{% endtabcontent %}

{% tabcontent Visual Studio Code %}

Open the terminal and run the following commands.

{% tabs %}
{% highlight bash tabtitle="Terminal" %}

dotnet add package Syncfusion.Blazor.FileManager -v {{ site.releaseversion }}
dotnet add package Syncfusion.Blazor.Themes -v {{ site.releaseversion }}

{% endhighlight %}
{% endtabs %}

{% endtabcontent %}

{% endtabcontents %}

### Add import namespaces

After both NuGet packages finish installing, open the **~/_Imports.razor** file and import the `Syncfusion.Blazor` and `Syncfusion.Blazor.FileManager` namespaces.

{% tabs %}
{% highlight C# tabtitle="~/_Imports.razor" %}

@using Syncfusion.Blazor
@using Syncfusion.Blazor.FileManager

{% endhighlight %}
{% endtabs %}

### Register the Blazor service

Open the **Program.cs** file in the Blazor WebAssembly App, add `using Syncfusion.Blazor;` at the top, and register the Syncfusion Blazor service. If you have a [Syncfusion license key](https://blazor.syncfusion.com/documentation/getting-started/license-key), register it above `AddSyncfusionBlazor()` to suppress the license-warning banner.

{% tabs %}
{% highlight C# tabtitle="Program.cs" %}

using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using Syncfusion.Blazor;

var builder = WebAssemblyHostBuilder.CreateDefault(args);

// Optional: register Syncfusion license key to suppress the license-warning banner.
// Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");

builder.Services.AddSyncfusionBlazor();

await builder.Build().RunAsync();

{% endhighlight %}
{% endtabs %}

### Add stylesheet and script resources

The theme stylesheet and script can be accessed from NuGet through [Static Web Assets](https://blazor.syncfusion.com/documentation/appearance/themes#static-web-assets). Include both references inside **~wwwroot/index.html**: the [stylesheet](https://blazor.syncfusion.com/documentation/appearance/themes) at the end of the `<head>` section, and the Syncfusion script at the end of the `<body>` section, **after** the Blazor framework script (`blazor.web.js`), so that Blazor FileManager functionality loads correctly.

{% tabs %}
{% highlight html tabtitle="~wwwroot/index.html" %}

<head>
    <!-- ...existing code... -->
    <link href="_content/Syncfusion.Blazor.Themes/fluent2.css" rel="stylesheet" />
</head>
<body>
    <!-- ...existing code... -->
    <script src="_framework/blazor.web.js"></script>
    <script src="_content/Syncfusion.Blazor.Core/scripts/syncfusion-blazor.min.js" type="text/javascript"></script>
</body>

{% endhighlight %}
{% endtabs %}

If your template already injects the Syncfusion stylesheet through a `_Layout.cshtml` or `HeadOutlet` mechanism, skip the `<link>` tag above to avoid duplicate assets.

### Add Blazor FileManager component

The [Blazor FileManager](https://www.syncfusion.com/blazor-components/blazor-file-manager) supports two ways to load data: RESTful JSON services via [`FileManagerAjaxSettings`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.FileManagerAjaxSettings.html) (shown below), or in-memory data via the [`OnRead`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.SfFileManager-1.html#Syncfusion_Blazor_FileManager_SfFileManager_1_OnRead) event — see [Data Binding in Blazor FileManager](https://blazor.syncfusion.com/documentation/file-manager/data-binding) for the second approach.

Open a Razor file located in the **~/Pages/*.razor** folder (for example, **Home.razor**) and add the following code. The `TValue="FileManagerDirectoryContent"` generic parameter binds the component to the default file/folder model used by Syncfusion FileManager. The sample points to the public demo service so that you can run the app immediately; for production usage, replace the URLs with your own service endpoints that expose the [FileManager service contract](https://blazor.syncfusion.com/documentation/file-manager/data-binding#ajaxsettings).

{% tabs %}
{% highlight razor tabtitle="Home.razor" %}

<SfFileManager TValue="FileManagerDirectoryContent">
    <FileManagerAjaxSettings Url="https://physical-service.syncfusion.com/api/FileManager/FileOperations"
                             UploadUrl="https://physical-service.syncfusion.com/api/FileManager/Upload"
                             DownloadUrl="https://physical-service.syncfusion.com/api/FileManager/Download"
                             GetImageUrl="https://physical-service.syncfusion.com/api/FileManager/GetImage">
    </FileManagerAjaxSettings>
</SfFileManager>

{% endhighlight %}
{% endtabs %}

The `FileManagerAjaxSettings` properties used above:

| Property | Purpose |
| -- | -- |
| `Url` | Endpoint that returns directory and file content for `read`, `create`, `rename`, `delete`, `move`, `copy`, `search`, and `details` operations. |
| `UploadUrl` | Endpoint that receives upload requests. |
| `DownloadUrl` | Endpoint that streams files for download. |
| `GetImageUrl` | Endpoint that streams thumbnail images for preview. |

### Run the application

{% tabcontents %}

{% tabcontent Visual Studio %}

Press <kbd>Ctrl</kbd>+<kbd>F5</kbd> (Windows) or <kbd>⌘</kbd>+<kbd>F5</kbd> (macOS) to launch the application. The [Blazor FileManager](https://www.syncfusion.com/blazor-components/blazor-file-manager) component will render in your default web browser.

{% endtabcontent %}

{% tabcontent Visual Studio Code %}

Open the terminal and run the following command.

{% tabs %}
{% highlight bash tabtitle="Terminal" %}

dotnet run

{% endhighlight %}
{% endtabs %}

{% endtabcontent %}

{% endtabcontents %}

## Troubleshooting

- **"Override or hide the watermark and validation messages" / "This application uses Syncfusion trial version"** — register a valid license key with `Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY")` in `Program.cs`. Get a free or paid key at https://www.syncfusion.com/account/downloads.
- **FileManager area is blank, no folders shown** — the browser cannot reach `physical-service.syncfusion.com` (browser offline, blocked by firewall, or CORS). Configure a local FileManager backend controller as shown in [Data Binding in Blazor FileManager](https://blazor.syncfusion.com/documentation/file-manager/data-binding#ajaxsettings) and update the URLs to point to `/api/...`.
- **Theme does not render correctly** — verify `_content/Syncfusion.Blazor.Themes/fluent2.css` is included only once and that the URL matches the project's Static Web Assets path.
- **"Cannot read property of undefined" / script errors in the browser console** — confirm `syncfusion-blazor.min.js` loads *after* `blazor.web.js` in `index.html`.

## See also

1. [Getting Started with Blazor FileManager Data Binding](https://blazor.syncfusion.com/documentation/file-manager/data-binding)
2. [Getting Started with Blazor Web App](https://blazor.syncfusion.com/documentation/getting-started/blazor-web-app)
3. [Getting Started with Blazor Server App](https://blazor.syncfusion.com/documentation/getting-started/blazor-server-side-visual-studio)
4. [Getting Started with Blazor WebAssembly App](https://blazor.syncfusion.com/documentation/getting-started/blazor-webassembly-app)
