---
layout: post
title: Context Menu in Blazor File Manager | Syncfusion
description: Learn how to add and customize context menu items for files, folders, and layout areas in the Blazor File Manager.
control: File Manager
platform: file-manager-sdk
documentation: ug
appliesto: UI Component Suite, File Manager SDK
---

# Context Menu in Blazor File Manager

The context menu items can be added for the files, folders, and layout in the [Blazor FileManager](https://www.syncfusion.com/blazor-components/blazor-file-manager) component using the following properties of the [ContextMenuSettings](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.FileManagerContextMenuSettings.html):

* [File](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.FileManagerContextMenuSettings.html#Syncfusion_Blazor_FileManager_FileManagerContextMenuSettings_File) - Specifies the array of strings used to configure file items.
* [Folder](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.FileManagerContextMenuSettings.html#Syncfusion_Blazor_FileManager_FileManagerContextMenuSettings_Folder) - Specifies the array of strings used to configure folder items.
* [Layout](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.FileManagerContextMenuSettings.html#Syncfusion_Blazor_FileManager_FileManagerContextMenuSettings_Layout) - Specifies the array of strings used to configure layout items.

**Built-in default items:** `Open`, `Delete`, `Rename`, `Downloads`, `Details`, `SortBy`, `View`, `Refresh`, `NewFolder`, `Upload`, `Selection` (also known as `Select all`). Use `|` as a separator between groups.

The following table provides the default context menu items and the targets where they appear.

<!-- markdownlint-disable MD033 -->
<table border="1">
    <tr>
        <th>Menu Name</th>
        <th>Menu Items</th>
        <th>Where it appears</th>
    </tr>
    <tr>
        <td>Layout menu</td>
        <td>
            <ul>
                <li>SortBy</li>
                <li>View</li>
                <li>Refresh</li>
                <li>NewFolder</li>
                <li>Upload</li>
                <li>Details</li>
                <li>Select all</li>
            </ul>
        </td>
        <td>
            <ul>
                <li>Empty space in the view section (details view and large icon view area).</li>
                <li>Empty folder content.</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>Folder menu</td>
        <td>
            <ul>
                <li>Open</li>
                <li>Delete</li>
                <li>Rename</li>
                <li>Downloads</li>
                <li>Details</li>
            </ul>
        </td>
        <td>
            <ul>
                <li>Folders in treeview, details view, and large icon view.</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>File menu</td>
        <td>
            <ul>
                <li>Open</li>
                <li>Delete</li>
                <li>Rename</li>
                <li>Downloads</li>
                <li>Details</li>
            </ul>
        </td>
        <td>
            <ul>
                <li>Files in details view and large icon view.</li>
            </ul>
        </td>
    </tr>
</table>

## Prerequisites

Before implementing the context menu samples in this document, ensure that:

* The **Syncfusion.Blazor.FileManager** NuGet package is installed.
* The Syncfusion license key is registered in your Blazor application.
* The required namespaces (`Syncfusion.Blazor`, `Syncfusion.Blazor.FileManager`, and `Syncfusion.Blazor.Navigations`) are registered in `_Imports.razor`.

> Refer to the [Getting Started with Blazor Server App](https://blazor.syncfusion.com/documentation/file-manager/getting-started-with-server-app) documentation for setup of the File Manager Web API service used by the `FileManagerAjaxSettings`.

## Events overview

The File Manager context menu exposes two events used throughout this document:

* **MenuOpened** — fires immediately before the context menu is rendered. Use this event to add icons, enable/disable items, or hide items.
* **OnMenuClick** — fires when a context menu item is clicked. Use this event to handle interactions for custom items.

Both events are properties of the `FileManagerEvents` component. All event handlers must be declared within a **single** `FileManagerEvents` component bound to the `SfFileManager`.

> `MenuOpenEventArgs` exposes `Items` (the current menu items collection) and `FileDetails` (the currently selected files/folders). `MenuClickEventArgs` exposes `Item` (the clicked item) and `FileDetails`.

## Adding Custom Items

In the Blazor File Manager component, the context menu can be customized by using the [ContextMenuSettings](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.FileManagerContextMenuSettings.html) and the [MenuOpened](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.FileManagerEvents-1.html#Syncfusion_Blazor_FileManager_FileManagerEvents_1_MenuOpened) event.

The following example demonstrates how to add a custom item to the context menu. Use **ContextMenuSettings** to add the new menu item, and the **MenuOpened** event to attach an icon to the newly created menu item. The custom item `Id` follows the pattern `{ComponentID}_cm_{itemName}`; the example below shows this for the `Custom` item.

```cshtml

@using Syncfusion.Blazor.FileManager

<SfFileManager TValue="FileManagerDirectoryContent" @ref="FileManager">
    <FileManagerEvents TValue="FileManagerDirectoryContent"></FileManagerEvents>
    <FileManagerAjaxSettings Url="https://physical-service.syncfusion.com/api/FileManager/FileOperations"
                             UploadUrl="https://physical-service.syncfusion.com/api/FileManager/Upload"
                             DownloadUrl="https://physical-service.syncfusion.com/api/FileManager/Download"
                             GetImageUrl="https://physical-service.syncfusion.com/api/FileManager/GetImage">
    </FileManagerAjaxSettings>
    <FileManagerContextMenuSettings File="@Items" Folder="@Items" Layout="@Items"></FileManagerContextMenuSettings>
    <FileManagerEvents TValue="FileManagerDirectoryContent" MenuOpened="MenuOpened"></FileManagerEvents>
</SfFileManager>

@code {
    SfFileManager<FileManagerDirectoryContent>? FileManager;
    public string[] Items = new string[] { "NewFolder", "Upload", "Delete", "Download", "Rename", "SortBy", "Refresh", "Selection", "View", "Details", "Custom" };
    public void MenuOpened(MenuOpenEventArgs<FileManagerDirectoryContent> args)
    {
        for(int i=0; i < args.Items.Count(); i++)
        {
            if (args.Items[i].Id == FileManager?.ID + "_cm_custom")
            {
                args.Items[i].IconCss = "e-icons e-fe-tick";
            }
        }
    }
}

<style>
    .e-fe-tick::before {
        content: '\e614';
    }
</style> 

```

## Showing Different Context Menu for Files and Folders

In the Blazor File Manager component, you can customize the context menu items for files and folders using the [ContextMenuSettings](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.FileManagerContextMenuSettings.html) [File](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.FileManagerContextMenuSettings.html#Syncfusion_Blazor_FileManager_FileManagerContextMenuSettings_File) and [Folder](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.FileManagerContextMenuSettings.html#Syncfusion_Blazor_FileManager_FileManagerContextMenuSettings_Folder) properties.

The following example demonstrates how to show different context menu items for files and folders.

> If `Layout` is not specified, the default layout context menu is rendered. Provide an explicit array if you need to customize it.

```cshtml

@using Syncfusion.Blazor.FileManager

<SfFileManager TValue="FileManagerDirectoryContent" @ref="FileManager">
    <FileManagerEvents TValue="FileManagerDirectoryContent"></FileManagerEvents>
    <FileManagerAjaxSettings Url="https://physical-service.syncfusion.com/api/FileManager/FileOperations"
                             UploadUrl="https://physical-service.syncfusion.com/api/FileManager/Upload"
                             DownloadUrl="https://physical-service.syncfusion.com/api/FileManager/Download"
                             GetImageUrl="https://physical-service.syncfusion.com/api/FileManager/GetImage">
    </FileManagerAjaxSettings>
    <FileManagerContextMenuSettings File="@FileItems" Folder="@FolderItems"></FileManagerContextMenuSettings>
</SfFileManager>

@code {
    SfFileManager<FileManagerDirectoryContent>? FileManager;
    public string[] FileItems = new string[] { "Delete", "Download", "Rename", "|", "Details" };
    public string[] FolderItems = new string[] { "Open", "|", "Cut", "Copy", "Paste"};
}

```

## Enabling or Disabling Items

In the Blazor File Manager component, you can enable or disable context menu items by setting the [Disabled](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.MenuItemModel.html#Syncfusion_Blazor_FileManager_MenuItemModel_Disabled) property of each item in the [MenuOpened](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.FileManagerEvents-1.html#Syncfusion_Blazor_FileManager_FileManagerEvents_1_MenuOpened) event arguments to `true` or `false`.

In the following example, the **Cut** context menu item is disabled for the folders.

```cshtml

@using Syncfusion.Blazor.FileManager

<SfFileManager TValue="FileManagerDirectoryContent">
    <FileManagerEvents TValue="FileManagerDirectoryContent"></FileManagerEvents>
    <FileManagerAjaxSettings Url="https://physical-service.syncfusion.com/api/FileManager/FileOperations"
                             UploadUrl="https://physical-service.syncfusion.com/api/FileManager/Upload"
                             DownloadUrl="https://physical-service.syncfusion.com/api/FileManager/Download"
                             GetImageUrl="https://physical-service.syncfusion.com/api/FileManager/GetImage">
    </FileManagerAjaxSettings>
    <FileManagerEvents TValue="FileManagerDirectoryContent" MenuOpened="MenuOpened"></FileManagerEvents>
</SfFileManager>

@code {

    public void MenuOpened(MenuOpenEventArgs<FileManagerDirectoryContent> args) 
    {
        bool isFile = args.FileDetails.Any(detail => !detail.IsFile);

        foreach (var item in args.Items)
        {
            if (item.Text == "Cut")
            {
                item.Disabled = isFile;
            }
        }
    }
}

```


## Showing or Hiding Items

In the Blazor File Manager component, you can control the visibility of context menu items by setting the [Hidden](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.MenuItemModel.html#Syncfusion_Blazor_FileManager_MenuItemModel_Hidden) property of each item in the [MenuOpened](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.FileManagerEvents-1.html#Syncfusion_Blazor_FileManager_FileManagerEvents_1_MenuOpened) event arguments to `true` or `false`.

In the following example, the **Cut** context menu item is shown only when one or more files are selected.

```cshtml

@using Syncfusion.Blazor.FileManager

<SfFileManager TValue="FileManagerDirectoryContent" >
    <FileManagerEvents TValue="FileManagerDirectoryContent"></FileManagerEvents>
    <FileManagerAjaxSettings Url="https://physical-service.syncfusion.com/api/FileManager/FileOperations"
                             UploadUrl="https://physical-service.syncfusion.com/api/FileManager/Upload"
                             DownloadUrl="https://physical-service.syncfusion.com/api/FileManager/Download"
                             GetImageUrl="https://physical-service.syncfusion.com/api/FileManager/GetImage">
    </FileManagerAjaxSettings>
    <FileManagerEvents TValue="FileManagerDirectoryContent" MenuOpened="MenuOpened"></FileManagerEvents>
</SfFileManager>

@code {

    public void MenuOpened(MenuOpenEventArgs<FileManagerDirectoryContent> args)
    {
        bool isFile = args.FileDetails.Any(file => !file.IsFile);

        foreach (var item in args.Items)
        {
            if (item.Text == "Cut")
            {
                item.Hidden = isFile;
            }
        }
    }
}

```

## Events

The Blazor File Manager context menu exposes the [MenuOpened](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.FileManagerEvents-1.html#Syncfusion_Blazor_FileManager_FileManagerEvents_1_MenuOpened) and [OnMenuClick](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.FileManagerEvents-1.html#Syncfusion_Blazor_FileManager_FileManagerEvents_1_OnMenuClick) events that fire in response to specific user actions. Both events are bound to the File Manager through the **FileManagerEvents** component, which requires the **TValue** to be specified.

**Version compatibility:** This documentation is applicable to Syncfusion Blazor File Manager for .NET 6 and later (including .NET 8 and .NET 9) with Syncfusion.Blazor.FileManager package version 19.1.0.50 or later.

N> All the events must be provided in a single **FileManagerEvents** component. Declaring multiple `FileManagerEvents` blocks for the same `SfFileManager` will throw a runtime error.

### MenuOpened

The [MenuOpened](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.FileManagerEvents-1.html#Syncfusion_Blazor_FileManager_FileManagerEvents_1_MenuOpened) event of the Blazor File Manager component is triggered before the context menu is opened.

```cshtml

@using Syncfusion.Blazor.FileManager

<SfFileManager TValue="FileManagerDirectoryContent">
    <FileManagerAjaxSettings Url="https://physical-service.syncfusion.com/api/FileManager/FileOperations"
                             UploadUrl="https://physical-service.syncfusion.com/api/FileManager/Upload"
                             DownloadUrl="https://physical-service.syncfusion.com/api/FileManager/Download"
                             GetImageUrl="https://physical-service.syncfusion.com/api/FileManager/GetImage">
    </FileManagerAjaxSettings>
    <FileManagerEvents TValue="FileManagerDirectoryContent" MenuOpened="MenuOpened"></FileManagerEvents>
</SfFileManager>

@code {
    public void MenuOpened(MenuOpenEventArgs<FileManagerDirectoryContent> args)
    {
        // Here, you can customize your code.
    }
}

```

### OnMenuClick

The [OnMenuClick](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.FileManagerEvents-1.html#Syncfusion_Blazor_FileManager_FileManagerEvents_1_OnMenuClick) event of the Blazor File Manager component is triggered when the context menu item is clicked.

```cshtml

@using Syncfusion.Blazor.FileManager

<SfFileManager TValue="FileManagerDirectoryContent">
    <FileManagerAjaxSettings Url="https://physical-service.syncfusion.com/api/FileManager/FileOperations"
                             UploadUrl="https://physical-service.syncfusion.com/api/FileManager/Upload"
                             DownloadUrl="https://physical-service.syncfusion.com/api/FileManager/Download"
                             GetImageUrl="https://physical-service.syncfusion.com/api/FileManager/GetImage">
    </FileManagerAjaxSettings>
    <FileManagerEvents TValue="FileManagerDirectoryContent" OnMenuClick="OnMenuClick"></FileManagerEvents>
</SfFileManager>

@code {
    public void OnMenuClick(MenuClickEventArgs<FileManagerDirectoryContent> args)
    {
        // Here, you can customize your code.
    }
}

```

## Troubleshooting

* **Layout context menu shown unexpectedly** — ensure `Layout` is set on `FileManagerContextMenuSettings` when customizing only `File` and `Folder`.
* **Custom item not appearing** — verify the item name in the array matches a built-in default, or that you have wired the `MenuOpened` hook to set its required properties.
* **Service URL errors** — confirm that the host serving `physical-service.syncfusion.com/api/FileManager/*` is reachable from your environment, or replace the URLs with your own File Manager Web API service.

## See Also

* [Adding Custom Item To Context Menu](https://blazor.syncfusion.com/documentation/file-manager/how-to/adding-custom-item-to-context-menu)
* [Custom File Provider in Blazor File Manager](https://blazor.syncfusion.com/documentation/file-manager/custom-file-provider)
* [Access Control in Blazor File Manager](https://blazor.syncfusion.com/documentation/file-manager/access-control)
* [File Operations in Blazor File Manager](https://blazor.syncfusion.com/documentation/file-manager/file-operations)