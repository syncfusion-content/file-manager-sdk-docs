---
layout: post
title: Getting Started with Blazor FileManager in Blazor Server App | Syncfusion
description: Learn how to get started with the Blazor FileManager component in a Blazor Server App using Visual Studio, VS Code, or the .NET CLI.
control: File Manager
platform: file-manager-sdk
documentation: ug
appliesto: UI Component Suite, File Manager SDK
---

# Getting Started with Blazor FileManager in Blazor Server App

This section briefly explains how to include the [Blazor FileManager](https://www.syncfusion.com/blazor-components/blazor-file-manager) component in your Blazor Server App using [Visual Studio](https://visualstudio.microsoft.com/vs/), [Visual Studio Code](https://code.visualstudio.com/), and the [.NET CLI](https://learn.microsoft.com/en-us/dotnet/core/tools/).

> **Compatibility:** This guide targets **.NET 8, .NET 9, and .NET 10**. Blazor Server requires a persistent SignalR connection, so the FileManager runs server-side; for very large uploads, configure the maximum upload size and SignalR buffer sizes on the host.

## Prerequisites

- Install the latest [.NET SDK](https://dotnet.microsoft.com/download) (8.0 or later).
- For **Visual Studio**: install [Visual Studio 2022 17.8+](https://visualstudio.microsoft.com/vs/) with the **ASP.NET and web development** workload.
- For **VS Code**: install the [C# Dev Kit](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csdevkit) extension.
- Trust the local development certificate: `dotnet dev-certs https --trust` (required for Blazor Web Apps and Server Apps).
- (Optional) Install the [Syncfusion® Blazor Extension](https://blazor.syncfusion.com/documentation/visual-studio-code-integration/create-project) for templating.

## Register Syncfusion license key

Syncfusion Blazor components require a valid license key. Register it once at the top of **Program.cs** before `AddSyncfusionBlazor()`:

```csharp
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
```

See [Registering Syncfusion license key](https://blazor.syncfusion.com/documentation/getting-started/license-key) for more details.

## Option 1: Using .NET CLI Templates (recommended)

The fastest path is to scaffold a project from the preconfigured [Syncfusion Web App Template](https://help.syncfusion.com/extension/syncfusion-blazor-webapp-template-via-nuget/installation).

1. Install the template:

    ```bash
    dotnet new install Syncfusion.Blazor.WebApp.Templates
    ```

2. Create a new Blazor Server App project:

    ```bash
    dotnet new syncfusionblazorwebapp --name MyApp --interactivity Server
    ```

3. Restore, then run the project:

    ```bash
    cd MyApp
    dotnet restore
    dotnet run
    ```

4. Continue with [Add the Blazor FileManager component](#add-blazor-filemanager-component) to wire up the component on the home page.

## Option 2: Manually creating a Blazor Server App

Use this option if you prefer to start from the official Microsoft template.

{% tabcontents %}

{% tabcontent VS %}

Create a **Blazor Server App** by using the **Blazor Web App** template in Visual Studio via [Microsoft Templates](https://learn.microsoft.com/en-us/aspnet/core/blazor/tooling?view=aspnetcore-10.0&pivots=vs) or the [Syncfusion® Blazor Extension](https://blazor.syncfusion.com/documentation/visual-studio-integration/template-studio).

{% endtabcontent %}

{% tabcontent VS Code %}

Run the following command to create a new Blazor Web App project with the **Blazor Web App** template (Server render mode is configured in the UI or via the template parameters):

```bash
dotnet new blazor -o BlazorApp
cd BlazorApp
```

Alternatively, create a **Blazor Web App** using Visual Studio Code via [Microsoft Templates](https://learn.microsoft.com/en-us/aspnet/core/blazor/tooling?view=aspnetcore-10.0&pivots=vsc) or the [Syncfusion® Blazor Extension](https://blazor.syncfusion.com/documentation/visual-studio-code-integration/create-project). The **C# Dev Kit** extension is required in either case.

{% endtabcontent %}

{% endtabcontents %}

> Configure the appropriate [Interactive render mode](https://learn.microsoft.com/en-us/aspnet/core/blazor/components/render-modes?view=aspnetcore-10.0#render-modes) (`Server`) and [Interactivity location](https://learn.microsoft.com/en-us/aspnet/core/blazor/tooling?view=aspnetcore-10.0&pivots=vs) (`Per page/component` or `Global`) when creating the project. For detailed information, refer to the [interactive render mode documentation](https://blazor.syncfusion.com/documentation/common/interactive-render-mode).
>
> If you use `Per page/component`, each Razor page that uses the FileManager must declare `@rendermode InteractiveServer` at the top. If you use `Global`, render mode is configured once in **App.razor**.

### Install the required Blazor packages

Install the [Syncfusion.Blazor.FileManager](https://www.nuget.org/packages/Syncfusion.Blazor.FileManager) and [Syncfusion.Blazor.Themes](https://www.nuget.org/packages/Syncfusion.Blazor.Themes/) NuGet packages. All Syncfusion Blazor packages are available on [nuget.org](https://www.nuget.org/packages?q=syncfusion.blazor). See the [NuGet packages](https://blazor.syncfusion.com/documentation/nuget-packages) topic for details. For the latest available version, see the [Release Notes](https://blazor.syncfusion.com/documentation/release-notes).

{% tabcontents %}

{% tabcontent VS %}

1. Go to *Tools → NuGet Package Manager → Manage NuGet Packages for Solution*.
2. Search the required NuGet packages (`Syncfusion.Blazor.FileManager` and `Syncfusion.Blazor.Themes`) and install them.

Alternatively, install the same packages using the Package Manager Console:

```powershell
Install-Package Syncfusion.Blazor.FileManager -Version {{ site.releaseversion }}
Install-Package Syncfusion.Blazor.Themes -Version {{ site.releaseversion }}
```

{% endtabcontent %}

{% tabcontent VS Code %}

Open the terminal and run the following commands:

```bash
dotnet add package Syncfusion.Blazor.FileManager -v {{ site.releaseversion }}
dotnet add package Syncfusion.Blazor.Themes -v {{ site.releaseversion }}
```

{% endtabcontent %}

{% endtabcontents %}

### Add import namespaces

Open **~/_Imports.razor** and import the `Syncfusion.Blazor` and `Syncfusion.Blazor.FileManager` namespaces:

```csharp
@using Syncfusion.Blazor
@using Syncfusion.Blazor.FileManager
```

### Register the Blazor service

Open **Program.cs** and add the `using Syncfusion.Blazor;` namespace reference at the top. A typical Server App **Program.cs** looks similar to:

```csharp
using Syncfusion.Blazor;

Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddRazorPages();
builder.Services.AddServerSideBlazor();
builder.Services.AddSyncfusionBlazor();

var app = builder.Build();

if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();
app.MapBlazorHub();
app.MapFallbackToPage("/_Host");

app.Run();
```

### Add stylesheet and script resources

The theme stylesheet and script can be accessed from NuGet through [Static Web Assets](https://blazor.syncfusion.com/documentation/appearance/themes#static-web-assets). Open **App.razor** and add the following at the end of the `<head>` section and at the end of the `<body>` section:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <base href="/" />
    <link rel="icon" type="image/x-icon" href="favicon.ico" />
    <link href="_content/Syncfusion.Blazor.Themes/fluent2.css" rel="stylesheet" />
</head>
<body>
    <script src="_content/Syncfusion.Blazor.Core/scripts/syncfusion-blazor.min.js" type="text/javascript"></script>
    @* existing template body *@
</body>
</html>
```

> If your template ships with default Bootstrap or other theme links, remove or replace them to avoid style conflicts. See [Blazor Themes](https://blazor.syncfusion.com/documentation/appearance/themes) and [Adding Script Reference](https://blazor.syncfusion.com/documentation/common/adding-script-references) for alternative approaches (CDN, CRG).

### Add Blazor FileManager component

Open **Home.razor** under **~/Components/Pages/** and add the Blazor FileManager component.

```razor
@page "/"
@rendermode InteractiveServer
@using Syncfusion.Blazor.FileManager

<SfFileManager TValue="FileManagerDirectoryContent">
    <FileManagerAjaxSettings Url="https://physical-service.syncfusion.com/api/FileManager/FileOperations"
                             UploadUrl="https://physical-service.syncfusion.com/api/FileManager/Upload"
                             DownloadUrl="https://physical-service.syncfusion.com/api/FileManager/Download"
                             GetImageUrl="https://physical-service.syncfusion.com/api/FileManager/GetImage">
    </FileManagerAjaxSettings>
</SfFileManager>
```

**Property reference:**

| Property | Type | Description |
| --- | --- | --- |
| `TValue` | `Type` | The data type of the file/folder records returned by the service. Use `FileManagerDirectoryContent` for the default service. |
| `FileManagerAjaxSettings.Url` | `string` | Endpoint used for file operations (read, create, rename, delete, etc.). |
| `FileManagerAjaxSettings.UploadUrl` | `string` | Endpoint that handles file uploads. |
| `FileManagerAjaxSettings.DownloadUrl` | `string` | Endpoint that serves files for download. |
| `FileManagerAjaxSettings.GetImageUrl` | `string` | Endpoint that returns image thumbnails. |

> The endpoints shown above point to Syncfusion's **public sample service** at `https://physical-service.syncfusion.com`. They are read-only and intended for demos. For production use, replace them with your own service implementing the Syncfusion FileManager protocol. See [File System Provider](file-system-provider.md) and [Custom File Provider](custom-file-provider.md) for details.
>
> The `@rendermode InteractiveServer` directive is required only when the app uses `Per page/component` interactivity. If the project is configured for `Global` interactivity, the render mode is set once in **App.razor** and should be omitted here.

![Blazor FileManager component in Blazor Server App](images/blazor-filemanager-server-app.webp)

### Run the application

{% tabcontents %}

{% tabcontent VS %}

Press <kbd>Ctrl</kbd>+<kbd>F5</kbd> (Windows) to launch the application. The Blazor FileManager component will render in your default web browser.

{% endtabcontent %}

{% tabcontent VS Code %}

Open the terminal and run the following command:

```bash
dotnet run
```

{% endtabcontent %}

{% endtabcontents %}

## Troubleshooting

| Issue | Likely cause | Fix |
| --- | --- | --- |
| `SfFileManager` renders but no files appear | The demo service is unreachable or blocked by the network. | Replace the URLs with a local service (see [File System Provider](file-system-provider.md)). |
| Static asset 404 for `_content/Syncfusion.Blazor.Themes/...` | Static web assets were not copied during restore. | Run `dotnet restore` and rebuild. Verify the package reference is present. |
| Component renders as plain HTML with no interactivity | Render mode is not configured for the page. | Add `@rendermode InteractiveServer` at the top of the Razor page, or set the project to `Global` interactivity. |
| `AddSyncfusionBlazor` not found | `Syncfusion.Blazor` namespace not imported. | Add `using Syncfusion.Blazor;` to **Program.cs** and `@using Syncfusion.Blazor` to **~/_Imports.razor**. |
| License watermark shown at runtime | License key not registered. | Call `Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY")` at app startup. |

## See also

- [File operations](file-operations.md)
- [File system provider](file-system-provider.md)
- [Custom file provider](custom-file-provider.md)
- [Upload](upload.md)
- [Data binding](data-binding.md)
- [Getting started with Blazor Web App](getting-started-with-web-app.md)
- [Getting started with Blazor WebAssembly App](getting-started-with-wasm-app.md)
