---
layout: post
title: Getting Started with WebMCP for Blazor File Manager | Syncfusion
description: Enable WebMCP on the Syncfusion Blazor File Manager, list the registered tools, and try a first agent prompt in an interactive render mode.
control: File Manager
platform: file-manager-sdk
documentation: ug
appliesto: UI Component Suite, File Manager SDK
---

# Getting Started with WebMCP

Enable WebMCP on the Blazor File Manager with one property, then confirm its tools are registered in the browser. This example uses the File Manager component.

## Prerequisites

Before you begin, ensure you have:

* A Blazor app with the Syncfusion<sup style="font-size:70%">&reg;</sup> File Manager component already rendering. Use an interactive render mode. Static SSR does not run the browser registration. See [interactive render mode](https://blazor.syncfusion.com/documentation/common/interactive-render-mode).
* A Chromium-based browser with the WebMCP origin trial or `chrome://flags/#enable-webmcp` enabled. The API is experimental, so confirm it in the browser versions you support.

## Enable WebMCP

Set `EnableWebMcp` to `true`. Optionally set `Name` on the component's `FileManagerWebMcpSettings` tag so tool names stay unique on the page.

{% tabs %}
{% highlight razor tabtitle="FileManager.razor" %}

@page "/"
@using Syncfusion.Blazor.FileManager;

<SfFileManager TValue="FileManagerDirectoryContent"
               EnableWebMcp="true"
               @ref="FileManager"
               ID="FM">
    <FileManagerAjaxSettings Url="https://physical-service.syncfusion.com/api/FileManager/FileOperations"
                             UploadUrl="https://physical-service.syncfusion.com/api/FileManager/Upload"
                             DownloadUrl="https://physical-service.syncfusion.com/api/FileManager/Download"
                             GetImageUrl="https://physical-service.syncfusion.com/api/FileManager/GetImage">
    </FileManagerAjaxSettings>
    <FileManagerWebMcpSettings Name="Testing">
    </FileManagerWebMcpSettings>
</SfFileManager>

@code {
    private SfFileManager<FileManagerDirectoryContent>? FileManager;
}

{% endhighlight %}
{% endtabs %}

`EnableWebMcp` turns registration on. `Name` becomes the prefix for the tool names. If you omit it, the component `ID` is used, then a generated ID.

## Verify the tools

Call `GetWebMcpToolsAsync` to list the tools the component registered.

{% tabs %}
{% highlight razor tabtitle="FileManager.razor" %}

@page "/"
@using Syncfusion.Blazor.FileManager;

<button class="e-btn" @onclick="ShowToolsAsync">List WebMCP tools</button>

<ul>
    @foreach (var line in ToolLines)
    {
        <li>@line</li>
    }
</ul>

<SfFileManager TValue="FileManagerDirectoryContent"
               EnableWebMcp="true"
               @ref="FileManager"
               ID="FM">
    <FileManagerAjaxSettings Url="https://physical-service.syncfusion.com/api/FileManager/FileOperations"
                             UploadUrl="https://physical-service.syncfusion.com/api/FileManager/Upload"
                             DownloadUrl="https://physical-service.syncfusion.com/api/FileManager/Download"
                             GetImageUrl="https://physical-service.syncfusion.com/api/FileManager/GetImage">
    </FileManagerAjaxSettings>
    <FileManagerWebMcpSettings Name="Testing">
    </FileManagerWebMcpSettings>
</SfFileManager>

@code {
    private SfFileManager<FileManagerDirectoryContent>? FileManager;
    private List<string> ToolLines = new();

    private async Task ShowToolsAsync()
    {
        if (FileManager is null) return;
        var tools = await FileManager.GetWebMcpToolsAsync();
        ToolLines = tools.Select(t => $"{t.Name}: {t.Description}").ToList();
    }
}

{% endhighlight %}
{% endtabs %}

Pass a list of names to `GetWebMcpToolsAsync` to inspect specific tools only.

## Supported tools

The Blazor File Manager exposes the following tools through WebMCP.

### Read Tools

| Tool Name | Description |
|---|---|
| getSelectedFiles | Returns the list of currently selected files and folders, including metadata such as name, ID, type, size, and modification details |
| selectAll | Selects all the files and folders in the current directory |
| filterFiles | Applies filters to files and folders based on specified criteria |
| refreshFiles | Refreshes the file and folder items in the current file view |
| refreshLayout | Refreshes the File Manager layout |
| openFile | Opens the selected file or folder |
| traverseBackward | Navigates to the parent directory of the current path |
| clearSelection | Clears the currently selected files and folders |

### Write Tools

| Tool Name | Description |
|---|---|
| createFolder | Creates a new folder in the current directory |
| renameFile | Renames the selected file or folder |
| deleteFiles | Deletes one or more selected files and folders |
| uploadFiles | Opens the upload dialog to upload files to the current directory |
| downloadFiles | Downloads one or more selected files |
| disableMenuItems | Disables one or more context menu items |
| enableMenuItems | Enables one or more context menu items |
| disableToolbarItems | Disables one or more toolbar items |
| enableToolbarItems | Enables one or more toolbar items |

> Write tool execution can be audited or cancelled in the `OnWebMcpExecute` event. Set `ShowConfirmationDialog` on the event args to `true` to show a confirmation dialog before write operations run.

## Try a first prompt

With your agent connected, ask for something the component can do, for example "Create a folder named Reports in the current directory." The agent picks the matching tool, the component runs it, and the File Manager changes on screen.

## See also

* [WebMCP overview](https://help.syncfusion.com/file-manager-sdk/ai-tools/webmcp-tools) explains how a component registers tools and how an agent calls them.
* [WebMCP Supported Syncfusion Blazor Components](https://blazor.syncfusion.com/documentation/webmcp/components) lists the built-in tools you can call from an agent prompt.