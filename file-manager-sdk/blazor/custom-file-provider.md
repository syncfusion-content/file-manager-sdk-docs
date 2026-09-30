---
layout: post
title: Custom File Provider in Blazor File Manager | Syncfusion
description: Learn how to build a custom file provider for the Blazor File Manager by following the standard request and response format for file actions.
control: File Manager
platform: file-manager-sdk
documentation: ug
---

# Custom File Provider in Blazor File Manager

You can also create a custom file provider specific to your needs to connect with the [Blazor File Manager](https://www.syncfusion.com/blazor-components/blazor-file-manager) component, instead of relying on the Syncfusion predefined providers. To ensure compatibility, your provider must return the same request and response format that the standard file system provider uses. Below are the details for each file operation, with links to the request and response parameters.


* **Read** - Reads the files and subdirectories from a specified directory. Refer to the [read operation request and response parameters](https://blazor.syncfusion.com/documentation/file-manager/file-operations#reading-files-and-folders) for details.

* **Create** - Creates new files or directories within the file system to add new content or organize the directory structure. Refer to the [create operation request and response parameters](https://blazor.syncfusion.com/documentation/file-manager/file-operations#creating-files-and-folders) for details.

* **Rename** - Renames existing files or directories to maintain a clear and organized file system. Refer to the [rename operation request and response parameters](https://blazor.syncfusion.com/documentation/file-manager/file-operations#renaming-files-and-folders) for details.

* **Move** - Moves files or directories from one location to another to reorganize the file structure. Refer to the [move operation request and response parameters](https://blazor.syncfusion.com/documentation/file-manager/file-operations#moving-files-and-folders) for details.

* **Copy** - Copies files or directories from one location to another for backup or organizational purposes. Refer to the [copy operation request and response parameters](https://blazor.syncfusion.com/documentation/file-manager/file-operations#copying-files-and-folders) for details.

* **Delete** - Deletes files or directories from the file system to remove unnecessary or outdated content. Refer to the [delete operation request and response parameters](https://blazor.syncfusion.com/documentation/file-manager/file-operations#deleting-files-and-folders) for details.

* **Upload** - Uploads files from the client to the server to add new content to the file system. Refer to the [upload operation request and response parameters](https://blazor.syncfusion.com/documentation/file-manager/file-operations#uploading-files) for details.

* **Download** - Downloads files from the server to the client to retrieve content stored on the server. Refer to the [download operation request and response parameters](https://blazor.syncfusion.com/documentation/file-manager/file-operations#downloading-files) for details.

* **Get File Details** - Retrieves detailed information about a specific file or directory, such as size, type, location, and last modified date. Refer to the [get file details operation request and response parameters](https://blazor.syncfusion.com/documentation/file-manager/file-operations#getting-file-details) for details.

* **Search** - Searches for files and directories within the file system based on specified criteria to quickly find files by name or other attributes. Refer to the [search operation request and response parameters](https://blazor.syncfusion.com/documentation/file-manager/file-operations#searching-files-and-folders) for details.

* **Get Image** - Retrieves image files from the file system to display them in the File Manager UI. Refer to the [get image operation request and response parameters](https://blazor.syncfusion.com/documentation/file-manager/file-operations#getting-images) for details.

Implement these operations uniformly to ensure that the File Manager component functions smoothly with your custom file provider, maintaining consistency in how files are managed and accessed across all operations.

N> Refer to the [custom file provider sample](https://github.com/SyncfusionExamples/blazor-file-manager-custom-file-provider) to see the request and response handling implemented end-to-end.