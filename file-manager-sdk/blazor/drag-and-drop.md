---
layout: post
title: Drag and Drop in Blazor File Manager | Syncfusion
description: Learn how to move files and folders within the Blazor File Manager using drag and drop and the events that fire during the operation.
control: File Manager
platform: file-manager-sdk
documentation: ug
appliesto: UI Component Suite, File Manager SDK
---

# Drag and Drop in Blazor File Manager

The [Blazor File Manager](https://www.syncfusion.com/blazor-components/blazor-file-manager) allows files and folders to be moved within the file system by drag and dropping them. This support can be enabled or disabled using the [AllowDragAndDrop](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.SfFileManager-1.html#Syncfusion_Blazor_FileManager_SfFileManager_1_AllowDragAndDrop) property of the Blazor File Manager.

To disable multiple file selection and enable drag-drop operations in a Blazor File Manager component, watch this video.

{% youtube
"youtube:https://www.youtube.com/watch?v=KU3RwdzDvJ0" %}

```cshtml

@using Syncfusion.Blazor.FileManager

<SfFileManager AllowDragAndDrop="true" TValue="FileManagerDirectoryContent">
    <FileManagerAjaxSettings Url="https://physical-service.syncfusion.com/api/FileManager/FileOperations"
                             UploadUrl="https://physical-service.syncfusion.com/api/FileManager/Upload"
                             DownloadUrl="https://physical-service.syncfusion.com/api/FileManager/Download"
                             GetImageUrl="https://physical-service.syncfusion.com/api/FileManager/GetImage">
    </FileManagerAjaxSettings>
</SfFileManager>

```
## Output

After successful compilation of the application, simply press `F5` to run the application.

![Drag and Drop in Blazor FileManager](images/blazor-filemanager-drag-and-drop.webp)

## Events

The File Manager component provides three key events that allow monitoring and controlling the drag and drop workflow. These events fire at different stages of the operation, enabling implementation of custom validation and business logic. For a complete list of available event arguments and properties, refer to the [`FileDragEventArgs`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.FileDragEventArgs-1.html) API documentation.

### OnFileDragStart Event

The [`OnFileDragStart`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.FileManagerEvents-1.html#Syncfusion_Blazor_FileManager_FileManagerEvents_1_OnFileDragStart) event fires when the user initiates a drag operation on files or folders. This event can be used to validate dragged items or prevent specific files from being dragged by setting the `Cancel` property to **true**. The following example demonstrates how to prevent dragging of the "Documents" folder:

```cshtml
@using Syncfusion.Blazor.FileManager

<SfFileManager TValue="FileManagerDirectoryContent" AllowDragAndDrop="true">
    <FileManagerAjaxSettings Url="https://physical-service.syncfusion.com/api/FileManager/FileOperations"
                             UploadUrl="https://physical-service.syncfusion.com/api/FileManager/Upload"
                             DownloadUrl="https://physical-service.syncfusion.com/api/FileManager/Download"
                             GetImageUrl="https://physical-service.syncfusion.com/api/FileManager/GetImage">
    </FileManagerAjaxSettings>
    <FileManagerEvents TValue="FileManagerDirectoryContent" OnFileDragStart="OnFileDragStart">
    </FileManagerEvents>
</SfFileManager>

@code {
    public void OnFileDragStart(FileDragEventArgs<FileManagerDirectoryContent> args)
    {
        if (args.FileDetails[0].Name == "Documents")
        {
            // Prevent dragging from the Documents folder
            args.Cancel = true;
        }
    }
}
```

### OnFileDragStop Event

The [`OnFileDragStop`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.FileManagerEvents-1.html#Syncfusion_Blazor_FileManager_FileManagerEvents_1_OnFileDragStop) event fires when the user is about to drop files or folders at the target location. This event allows to validate the target destination and cancel the operation if needed by setting `Cancel` to **true**. The following example demonstrates how to prevent dropping items into the "Music" folder:

```cshtml
@using Syncfusion.Blazor.FileManager

<SfFileManager TValue="FileManagerDirectoryContent" AllowDragAndDrop="true">
    <FileManagerAjaxSettings Url="https://physical-service.syncfusion.com/api/FileManager/FileOperations"
                             UploadUrl="https://physical-service.syncfusion.com/api/FileManager/Upload"
                             DownloadUrl="https://physical-service.syncfusion.com/api/FileManager/Download"
                             GetImageUrl="https://physical-service.syncfusion.com/api/FileManager/GetImage">
    </FileManagerAjaxSettings>
    <FileManagerEvents TValue="FileManagerDirectoryContent" OnFileDragStop="OnFileDragStop">
    </FileManagerEvents>
</SfFileManager>

@code {
    public void OnFileDragStop(FileDragEventArgs<FileManagerDirectoryContent> args)
    {
        // Check the target folder path where items are being dropped
        if (args.DropTargetDetail.Name == "Music")
        {
            // Prevent dropping into the Music folder
            args.Cancel = true;
        }
    }
}
```

### FileDropped Event

The [`FileDropped`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.FileManagerEvents-1.html#Syncfusion_Blazor_FileManager_FileManagerEvents_1_FileDropped) event fires after a drag and drop operation completes. This event allows you to execute post-operation actions after files or folders have been moved.

```cshtml
@using Syncfusion.Blazor.FileManager

<SfFileManager TValue="FileManagerDirectoryContent" AllowDragAndDrop="true">
    <FileManagerAjaxSettings Url="https://physical-service.syncfusion.com/api/FileManager/FileOperations"
                             UploadUrl="https://physical-service.syncfusion.com/api/FileManager/Upload"
                             DownloadUrl="https://physical-service.syncfusion.com/api/FileManager/Download"
                             GetImageUrl="https://physical-service.syncfusion.com/api/FileManager/GetImage">
    </FileManagerAjaxSettings>
    <FileManagerEvents TValue="FileManagerDirectoryContent" FileDropped="FileDropped">
    </FileManagerEvents>
</SfFileManager>

@code {
    public void FileDropped(FileDragEventArgs<FileManagerDirectoryContent> args)
    {
        // Here, customize the code as needed.
    }
}
```

## Drag and Drop with Navigation Pane

The File Manager allows you to drag files and folders from the main layout area and drop them into folders displayed in the navigation pane. This feature provides an efficient way to organize and move files across different directory structures without navigating through multiple levels. When you drag an item from the file layout and hover over a folder in the navigation pane, that folder is highlighted to indicate it is a valid drop target. Release the mouse button to complete the move operation.

## Drag and Drop with Breadcrumb Navigation

The File Manager supports dragging and dropping files directly onto the breadcrumb navigation path. When you drag a file from the layout area and drop it on any folder in the breadcrumb path, the file is immediately moved to that target folder. This feature is particularly useful for moving files up the directory hierarchy or to sibling folders without extensive navigation through multiple directory levels.

For example, if you are currently viewing `~/Documents/Projects/2024`, you can drag a file and drop it directly on the breadcrumb segments like `Documents` or `Projects` to move the file to those locations. After the drop operation completes, the file is automatically placed in the appropriate folder according to your drop target selection. This seamless workflow significantly improves file management efficiency.
