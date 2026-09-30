---
layout: post
title: How to customize the navigation pane in Blazor File Manager | Syncfusion
description: Learn how to customize the layout of folder nodes in the Blazor File Manager navigation pane with a custom template.
control: File Manager
platform: file-manager-sdk
documentation: ug
---

# How to Customize the Navigation Pane in Blazor File Manager

The navigation pane in the [Blazor File Manager](https://www.syncfusion.com/blazor-components/blazor-file-manager) component displays the folder hierarchy in a tree-like structure. You can customize the layout of each folder node by using the `NavigationPaneTemplate` property to modify the appearance of folders based on your application's requirements—for example, to show additional metadata, custom icons, or other UI elements alongside the folder name.

## Prerequisites

- A Blazor application targeting .NET 6.0 or later (Server, WebAssembly, MAUI, or Web App).
- The `Syncfusion.Blazor.FileManager` NuGet package installed.
- A configured File Manager service that exposes the AJAX endpoints used by `FileManagerAjaxSettings`. See [Getting Started](./getting-started) for setup details.

## Template context

The template's `context` parameter is of type `FileManagerDirectoryContent`. Common members available inside the template include `Name`, `FilterPath`, `HasChild`, and `SubDirectoriesCount`. The generic argument `TValue` passed to `SfFileManager` determines the type used here; using `TValue="FileManagerDirectoryContent"` matches the built-in default.

> **Note:** Replacing the default template content removes the built-in folder icon and expand/collapse twist arrow. Re-render those elements explicitly if you want to preserve the default node affordance.

```cshtml
@using Syncfusion.Blazor.FileManager;

<SfFileManager TValue="FileManagerDirectoryContent">
    <ChildContent>
        <FileManagerAjaxSettings Url="https://physical-service.syncfusion.com/api/FileManager/FileOperations"
                                 UploadUrl="https://physical-service.syncfusion.com/api/FileManager/Upload"
                                 DownloadUrl="https://physical-service.syncfusion.com/api/FileManager/Download"
                                 GetImageUrl="https://physical-service.syncfusion.com/api/FileManager/GetImage">
        </FileManagerAjaxSettings>
    </ChildContent>
    <NavigationPaneTemplate>
        <div class="e-nav-pane-node" style="display: inline-flex; align-items: center;">
            @if (context is FileManagerDirectoryContent item)
            {
                <span class="folder-name" style="margin-left:8px;">@item.Name</span>
            }
        </div>
    </NavigationPaneTemplate>
</SfFileManager>

```