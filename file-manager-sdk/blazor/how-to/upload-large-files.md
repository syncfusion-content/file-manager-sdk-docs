---
layout: post
title: How to upload large files in Blazor File Manager | Syncfusion
description: Learn how to enable large file uploads in the Blazor File Manager by configuring the maximum file size in upload settings.
control: File Manager
platform: file-manager-sdk
documentation: ug
appliesto: UI Component Suite, File Manager SDK
---

# How to Upload Large Files in Blazor File Manager

The Blazor File Manager enforces an upload size limit on the client and a separate request-body limit on the host server. To upload large files, **both** limits must be raised; otherwise the smaller of the two will reject the request. This guide covers the component-level `MaxFileSize` setting and the corresponding server configuration.

To enable large file uploads, set the [MaxFileSize](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.FileManagerUploadSettings.html#Syncfusion_Blazor_FileManager_FileManagerUploadSettings_MaxFileSize) property in the [`FileManagerUploadSettings`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.FileManagerUploadSettings.html) class. The value is specified in **bytes** (for example, `30000000` ≈ 30 MB).

The following example sets the client-side limit:

```cshtml

<SfFileManager @ref="FileManager" TValue="FileManagerDirectoryContent">
    <FileManagerAjaxSettings Url="https://physical-service.syncfusion.com/api/FileManager/FileOperations"
                                UploadUrl="https://physical-service.syncfusion.com/api/FileManager/Upload"
                                DownloadUrl="https://physical-service.syncfusion.com/api/FileManager/Download"
                                GetImageUrl="https://physical-service.syncfusion.com/api/FileManager/GetImage">
    </FileManagerAjaxSettings>
    <FileManagerUploadSettings MaxFileSize="30000000"></FileManagerUploadSettings>
    <FileManagerEvents></FileManagerEvents>
</SfFileManager>

```

> **Note:** The example above sets the client limit to roughly 30 MB. Make sure the server-side limit shown below is **greater than or equal to** this value; otherwise the host will reject uploads before the component's limit is reached. The empty `<FileManagerEvents>` element in the snippet is optional and is included only to show the default hook surface.

## Server-Side Configuration for Large File Uploads

To handle large file uploads on the server side, configure the request size limit in the host's `web.config` file. The example below sets the IIS `maxAllowedContentLength` to 1 GB:

```xml

<configuration>
  <system.webServer>
    <security> 
      <requestFiltering> 
        <requestLimits maxAllowedContentLength="1073741824" ></requestLimits> 
      </requestFiltering> 
    </security> 
  </system.webServer>
</configuration>

```

N> The `web.config` configuration above applies when the Blazor File Manager service is hosted under IIS or IIS Express. For self-hosted scenarios (such as Blazor Server running on the Kestrel web server, or any other non-IIS host), raise the equivalent limit in `Program.cs` using `WebHost.ConfigureKestrel` and the form options' `MultipartBodyLengthLimit` property.

### Version compatibility

This configuration applies to the Syncfusion Blazor File Manager from **Version 18.4.0.30** onward and is compatible with .NET 6, .NET 7, .NET 8, and .NET 9 host applications.

### Related upload settings

In addition to `MaxFileSize`, the [`FileManagerUploadSettings`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.FileManagerUploadSettings.html) class exposes the following useful properties:

- `MinFileSize` — minimum allowed upload size, in bytes.
- `AutoUpload` — automatically starts the upload when a file is selected.
- `DirectoryUpload` — allows uploading entire folders.
- `AllowedExtensions` — restricts uploads to a list of file extensions.

### Troubleshooting

If large uploads fail with one of the following errors, the server-side limit is still lower than the file being uploaded:

- **413 Request Entity Too Large** — raise `maxAllowedContentLength` in `web.config` and the Kestrel/form options in `Program.cs`.
- **Bad Request (400)** — the component's `MaxFileSize` was reached on the client; raise the component setting and re-deploy.
- **IIS HTTP 500.13 / 500.19** — the `web.config` change was not picked up; restart the application pool or the development server.

### See also

- [Getting started with the Blazor File Manager](https://help.syncfusion.com/file-manager-sdk/blazor/getting-started)
- [Upload files in Blazor File Manager](https://help.syncfusion.com/file-manager-sdk/blazor/upload)
- [File operations in Blazor File Manager](https://help.syncfusion.com/file-manager-sdk/blazor/file-operations)