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

The [Blazor File Manager](https://www.syncfusion.com/blazor-components/blazor-file-manager) allows files and folders to be moved within the file system by dragging and dropping them. This support can be enabled or disabled using the [AllowDragAndDrop](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.SfFileManager-1.html#Syncfusion_Blazor_FileManager_SfFileManager_1_AllowDragAndDrop) property of the Blazor File Manager. By default, `AllowDragAndDrop` is set to `true`.

The events that trigger when using drag and drop functionality are listed below.

* [`OnFileDragStart`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.FileManagerEvents-1.html#Syncfusion_Blazor_FileManager_FileManagerEvents_1_OnFileDragStart) - Triggers when a file or folder drag starts.
* [`OnFileDragStop`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.FileManagerEvents-1.html#Syncfusion_Blazor_FileManager_FileManagerEvents_1_OnFileDragStop) - Triggers when a file or folder is about to be dropped at the target location.
* [`FileDropped`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.FileManagerEvents-1.html#Syncfusion_Blazor_FileManager_FileManagerEvents_1_FileDropped) - Triggers when a file or folder is dropped.

```cshtml

@using Syncfusion.Blazor.FileManager

<SfFileManager AllowDragAndDrop="true" TValue="FileManagerDirectoryContent">
    <FileManagerAjaxSettings  Url="/api/SampleData/FileOperations"
                                UploadUrl="/api/SampleData/Upload"
                                DownloadUrl="/api/SampleData/Download"
                                GetImageUrl="/api/SampleData/GetImage">
    </FileManagerAjaxSettings>
</SfFileManager>

```

## Output

Press `F5` to run the application. You can now drag a file or folder onto a target folder to move it within the file system.

![A file being dragged onto a target folder in the Blazor File Manager](images/blazor-filemanager-drag-and-drop.webp)
