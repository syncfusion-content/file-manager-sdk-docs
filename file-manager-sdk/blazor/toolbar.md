---
layout: post
title: Toolbar in Blazor File Manager | Syncfusion
description: Learn about the built-in toolbar items in the Blazor File Manager for creating folders, sorting, uploading, refreshing, and viewing files.
control: File Manager
platform: file-manager-sdk
documentation: ug
---

# Toolbar in Blazor File Manager

The Toolbar in the [Blazor File Manager](https://www.syncfusion.com/blazor-components/blazor-file-manager) provides a user-friendly interface for performing various file operations. It contains pre-defined items that correspond to specific actions. Here are some key points about the toolbar.

## Built-in toolbar items

By default, the Blazor File Manager includes several pre-defined toolbar items. These items are ready to use and come with associated actions. This collection can be modified by defining the required items in [FileManagerToolbarSettings](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.FileManagerToolbarSettings.html).

Some common built-in toolbar items include:

* `New Folder` - Creates a new folder in the current directory.
* `SortBy` - Allows users to sort files and folders based on different criteria (e.g., name, size, date modified).
* `Upload` - Enables users to upload files to the server.
* `Refresh` - Reloads the contents of the current directory from the file system provider.
* `View` - Switches the File Manager layout mode (e.g., Details or Large Icons view).
* `Details` - Displays extended metadata about the selected files and folders.

## Control toolbar visibility

The toolbar visibility can also be controlled by using the [Visible](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.FileManagerToolbarSettings.html#Syncfusion_Blazor_FileManager_FileManagerToolbarSettings_Visible) property, which defaults to `true`. Set this property to `false` to hide the toolbar. You can also toggle this property dynamically based on your application logic.

```cshtml

@using Syncfusion.Blazor.FileManager

<SfFileManager TValue="FileManagerDirectoryContent">
    <FileManagerAjaxSettings Url="https://physical-service.syncfusion.com/api/FileManager/FileOperations"
                             UploadUrl="https://physical-service.syncfusion.com/api/FileManager/Upload"
                             DownloadUrl="https://physical-service.syncfusion.com/api/FileManager/Download"
                             GetImageUrl="https://physical-service.syncfusion.com/api/FileManager/GetImage">
    </FileManagerAjaxSettings>
    <FileManagerToolbarSettings Visible=false></FileManagerToolbarSettings>
</SfFileManager>

```

## Events

The Blazor File Manager toolbar component has the [ToolbarCreated](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.FileManagerEvents-1.html#Syncfusion_Blazor_FileManager_FileManagerEvents_1_ToolbarCreated) and [ToolbarItemClicked](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.FileManagerEvents-1.html#Syncfusion_Blazor_FileManager_FileManagerEvents_1_ToolbarItemClicked) events that are triggered for certain actions. These events can be bound to the Blazor File Manager using the **FileManagerEvents** component, which requires `TValue` to be provided.

> **Note:** All File Manager events should be provided in a single `FileManagerEvents` component.

### ToolbarCreated

The [ToolbarCreated](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.FileManagerEvents-1.html#Syncfusion_Blazor_FileManager_FileManagerEvents_1_ToolbarCreated) event of the Blazor File Manager component is triggered before creating the toolbar items.

```cshtml

@using Syncfusion.Blazor.FileManager

<SfFileManager TValue="FileManagerDirectoryContent">
    <FileManagerAjaxSettings Url="https://physical-service.syncfusion.com/api/FileManager/FileOperations"
                             UploadUrl="https://physical-service.syncfusion.com/api/FileManager/Upload"
                             DownloadUrl="https://physical-service.syncfusion.com/api/FileManager/Download"
                             GetImageUrl="https://physical-service.syncfusion.com/api/FileManager/GetImage">
    </FileManagerAjaxSettings>
    <FileManagerEvents TValue="FileManagerDirectoryContent" ToolbarCreated="ToolbarCreated"></FileManagerEvents>
</SfFileManager>

@code {
    public void ToolbarCreated(ToolbarCreateEventArgs args)
    {
        // Here, you can customize your code.
    }
}

```

### ToolbarItemClicked

The [ToolbarItemClicked](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.FileManagerEvents-1.html#Syncfusion_Blazor_FileManager_FileManagerEvents_1_ToolbarItemClicked) event of the Blazor File Manager component is triggered when the toolbar item is clicked.

```cshtml

@using Syncfusion.Blazor.FileManager

<SfFileManager TValue="FileManagerDirectoryContent">
    <FileManagerAjaxSettings Url="https://physical-service.syncfusion.com/api/FileManager/FileOperations"
                             UploadUrl="https://physical-service.syncfusion.com/api/FileManager/Upload"
                             DownloadUrl="https://physical-service.syncfusion.com/api/FileManager/Download"
                             GetImageUrl="https://physical-service.syncfusion.com/api/FileManager/GetImage">
    </FileManagerAjaxSettings>
    <FileManagerEvents TValue="FileManagerDirectoryContent" ToolbarItemClicked="ToolbarItemClicked"></FileManagerEvents>
</SfFileManager>

@code {
    public void ToolbarItemClicked(ToolbarClickEventArgs<FileManagerDirectoryContent> args)
    {
        // Here, you can customize your code.
    }
}

```

## See Also

[Adding Custom Item To Toolbar](https://blazor.syncfusion.com/documentation/file-manager/how-to/add-custom-tool-bar)