---
layout: post
title: Views in Blazor File Manager | Syncfusion
description: Learn how to switch between Large Icons and Details views in the Blazor File Manager and customize the appearance of files and folders.
control: File Manager
platform: file-manager-sdk
documentation: ug
appliesto: UI Component Suite, File Manager SDK
---

# Views in Blazor File Manager

The [Blazor File Manager](https://www.syncfusion.com/blazor-components/blazor-file-manager) component renders the file system in two built-in layouts: the `Large Icons View` for visual recognition and the `Details View` for organized information.

Choose a layout based on how end users browse content:

- **Large Icons View:** Best for image-heavy folders and quick visual scanning.
- **Details View:** Best when file metadata (size, type, modified date) drives selection.

## Large Icons View

`ViewType.LargeIcons` is the default starting view in the File Manager. The view can be changed using the **View** button on the [Toolbar](https://blazor.syncfusion.com/documentation/file-manager/file-operations#toolbar), or through the **View** submenu in the [Context Menu](https://blazor.syncfusion.com/documentation/file-manager/context-menu). To set the initial view in code, assign the `View` API (for example, `ViewType.LargeIcons` or `ViewType.Details`).

In the Large Icons View, thumbnails are shown at a larger size that displays the data in a form that best suits its content. For image files, a **preview** is displayed. Extension thumbnails are displayed for other file types.

### Customize existing Large Icons View

The Large Icons View layout can be customized using the `LargeIconsTemplate` property, which lets you display file or folder information, apply custom formatting, and use conditional rendering based on item type. The following sample renders a custom card per item and is configured to use the Syncfusion sample service endpoint; replace the URLs with your own service before running the sample.

> **Note:** The `e-fe-*` icon classes and other File Manager styles ship with the `Syncfusion.Blazor.FileManager` NuGet package. Reference the Syncfusion stylesheet (for example, `_content/Syncfusion.Blazor/styles.css`) in `App.razor` or `_Host.cshtml` for the icon classes to resolve.

```cshtml

@using Syncfusion.Blazor.FileManager;
<SfFileManager TValue="FileManagerDirectoryContent" CssClass="e-fm-template-sample">
    <ChildContent>
        <FileManagerAjaxSettings Url="https://physical-service.syncfusion.com/api/FileManager/FileOperations"
                                 UploadUrl="https://physical-service.syncfusion.com/api/FileManager/Upload"
                                 DownloadUrl="https://physical-service.syncfusion.com/api/FileManager/Download"
                                 GetImageUrl="https://physical-service.syncfusion.com/api/FileManager/GetImage">
        </FileManagerAjaxSettings>
    </ChildContent>
    <LargeIconsTemplate Context="item">
        @if (item is not null)
        {
            <div class="custom-icon-card">
                <div class="file-header">
                    <div class="file-name" title="@item.Name">@item.Name</div>
                </div>
                <div class="@GetFileTypeCssClass(item)"></div>
                <div class="file-formattedDate">Created on @item.DateCreated.ToString("MMMM d, yyyy")</div>
            </div>
        }
    </LargeIconsTemplate>
</SfFileManager>

@code {
    private string GetFileTypeCssClass(FileManagerDirectoryContent item)
    {
        if (!item.IsFile)
        {
            return $"e-list-icon e-fe-folder";
        }
        var ext = System.IO.Path.GetExtension(item.Name)?.TrimStart('.') ?? string.Empty;
        var type = ExtensionIconClassMap.GetValueOrDefault(ext, "unknown");
        return $"e-list-icon e-fe-{type}";
    }
    private static readonly Dictionary<string, string> ExtensionIconClassMap = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase)
    {
        { "jpg", "image" }, { "jpeg", "image" }, { "png", "image" }, { "gif", "image" },
        { "mp3", "music" }, { "wav", "music" }, { "mp4", "video" }, { "avi", "video" },
        { "xlsx", "xlsx" }, { "xls", "xlsx" }, { "pptx", "pptx" }, { "ppt", "pptx" },
        { "rar", "rar" }, { "zip", "zip" }, { "txt", "txt" }, { "js", "js" },
        { "css", "css" }, { "html", "html" }, { "exe", "exe" }, { "msi", "msi" },
        { "php", "php" }, { "doc", "doc" }, { "docx", "docx" }, { "xml", "xml" },
        { "pdf", "pdf" }
    };
}
<style>
    .e-fm-template-sample .custom-icon-card {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 10px;
        height: 100%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    .e-fm-template-sample .file-header {
        display: contents;
        align-items: center;
        width: 100%;
        margin-bottom: 10px;
    }

    .e-fm-template-sample .file-name {
        font-size: 14px;
        font-weight: 600;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 110px;
    }

    .e-fm-template-sample .file-formattedDate {
        font-size: 12px;
        margin-top: 8px;
        text-align: center;
        font-weight: 600;
    }

    .e-filemanager.e-fm-template-sample .e-large-icons .e-list-item {
        height: 150px;
        width: 135px;
    }
</style>

```

## Details View

In the Details View, files are displayed in a sorted list order. This file list comprises several columns of information about each file, including **Name**, **Date Modified**, **Type**, and **Size**. Each file has its own small icon representing the file type by default. Additional columns can be added using the [FileManagerDetailsViewSettings](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.FileManagerDetailsViewSettings.html) API. The Details View allows you to perform sorting by clicking a column header. Sorting behavior is controlled per column by the `AllowSorting` property of each `FileManagerColumn` (default: `true`).

### Define custom columns

To add a custom column to the Details View, use the [FileManagerColumn](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.FileManagerColumn.html) from the `Syncfusion.Blazor.FileManager` namespace. Each `Template` block receives a `FileManagerDirectoryContent` instance, so custom columns can render any field that the server returns (for example, `Type`). The following example shows how to add a `Category` column to the Details View.

```cshtml

@using Syncfusion.Blazor.FileManager

<SfFileManager TValue="FileManagerDirectoryContent" View="ViewType.Details">
    <FileManagerAjaxSettings Url="https://physical-service.syncfusion.com/api/FileManager/FileOperations"
                             UploadUrl="https://physical-service.syncfusion.com/api/FileManager/Upload"
                             DownloadUrl="https://physical-service.syncfusion.com/api/FileManager/Download"
                             GetImageUrl="https://physical-service.syncfusion.com/api/FileManager/GetImage">
    </FileManagerAjaxSettings>
    <FileManagerDetailsViewSettings>
        <FileManagerColumns>
            <FileManagerColumn Field="Name" HeaderText="Name"></FileManagerColumn>
            <FileManagerColumn Field="Size" HeaderText="Size"></FileManagerColumn>
            <FileManagerColumn Field="DateModified" HeaderText="DateModified"></FileManagerColumn>
            <FileManagerColumn Field="Type">
                <HeaderTemplate>
                    <span>Category</span>
                </HeaderTemplate>
                <Template>
                    @{
                        var data = (context as FileManagerDirectoryContent);
                        <div>@data.Type</div>
                    }
                </Template>
            </FileManagerColumn>
        </FileManagerColumns>
    </FileManagerDetailsViewSettings>
</SfFileManager>

```

### Customize existing column format

The Details View column appearance, such as column [Width](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.FileManagerColumn.html#Syncfusion_Blazor_FileManager_FileManagerColumn_Width), [Format](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.FileManagerColumn.html#Syncfusion_Blazor_FileManager_FileManagerColumn_Format), [HeaderText](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.FileManagerColumn.html#Syncfusion_Blazor_FileManager_FileManagerColumn_HeaderText), and [Template](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.FileManagerColumn.html#Syncfusion_Blazor_FileManager_FileManagerColumn_Template), can be customized on each field using the [FileManagerColumn](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.FileManagerColumn.html) property. `Format` values follow the C# [date and time format strings](https://learn.microsoft.com/dotnet/standard/base-types/custom-date-and-time-format-strings).

```cshtml

@using Syncfusion.Blazor.FileManager

<SfFileManager TValue="FileManagerDirectoryContent" View="ViewType.Details">
    <FileManagerAjaxSettings Url="https://physical-service.syncfusion.com/api/FileManager/FileOperations"
                             UploadUrl="https://physical-service.syncfusion.com/api/FileManager/Upload"
                             DownloadUrl="https://physical-service.syncfusion.com/api/FileManager/Download"
                             GetImageUrl="https://physical-service.syncfusion.com/api/FileManager/GetImage">
    </FileManagerAjaxSettings>
    <FileManagerDetailsViewSettings>
        <FileManagerColumns>
            <FileManagerColumn Field="Name">
                <HeaderTemplate><span class="e-headertext">Name</span></HeaderTemplate>
                <Template>
                    @{
                        var data = (context as FileManagerDirectoryContent);
                        <div><span class="e-fe-text">@data!.Name</span></div>
                    }
                </Template>
            </FileManagerColumn>
            <FileManagerColumn Field="Size" HeaderText="Size" MinWidth="50" Width="110"></FileManagerColumn>
            <FileManagerColumn Field="DateModified" HeaderText="DateModified" Format="MM/dd/yyyy h:mm tt"></FileManagerColumn>
        </FileManagerColumns>
    </FileManagerDetailsViewSettings>
</SfFileManager>

```

## See Also

- [Toolbar](https://blazor.syncfusion.com/documentation/file-manager/file-operations#toolbar)
- [Context Menu](https://blazor.syncfusion.com/documentation/file-manager/context-menu)
- [Multiple file selection](https://blazor.syncfusion.com/documentation/file-manager/multiple-file-selection)
- [Blazor File Manager live samples](https://github.com/syncfusion/blazor-samples/tree/master/FileManager)



