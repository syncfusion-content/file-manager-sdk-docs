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

## Monitor and control tool execution

The `OnWebMcpExecute` event is triggered before a tool is executed. Set `ShowConfirmationDialog` to `true` on the event args to show a confirmation dialog before write operations run.

{% tabs %}
{% highlight razor tabtitle="FileManager.razor" %}

@page "/"
@using Syncfusion.Blazor.FileManager;
@using System.Text.Json;

<SfFileManager TValue="FileManagerDirectoryContent"
               EnableWebMcp="true"
               @ref="FileManager"
               ID="FM">
    <FileManagerEvents TValue="FileManagerDirectoryContent" OnWebMcpExecute="BeforeMcpHandler"></FileManagerEvents>
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

    private async Task BeforeMcpHandler(FileManagerWebMcpExecuteEventArgs args)
    {
        args.ShowConfirmationDialog = true;
        if (FileManager is null)
        {
            args.Result = JsonSerializer.Serialize(new { Error = "FileManager instance not available." });
            return;
        }
    }
}

{% endhighlight %}
{% endtabs %}

## File Manager WebMCP tools

The Syncfusion® Blazor File Manager component exposes 7 tools that enable AI agents to browse files, manage file operations, control the user interface, perform navigation, and automate common file management workflows.

| Tool Name | Description |
|-----------|-------------|
| getSelectedFiles | Returns the list of currently selected files and folders, including metadata such as name, ID, type, size, and modification details |
| manageFileSystemItems | Creates folders, renames files or folders, and deletes one or more file system items |
| manageFileUploadAndDownload | Opens the upload workflow or downloads one or more selected files |
| navigateAndOpenFiles | Navigates backward, opens files or folders, and refreshes the current file view |
| searchAndFilterFiles | Applies filters to files and folders based on specified criteria |
| manageUserInterface | Enables or disables menu and toolbar items, closes dialogs, and refreshes the layout |
| manageSelection | Selects all items or clears the current selection |

## Try a first prompt

With your agent connected, ask for something the component can do, for example "Create a folder named Reports in the current directory." The agent picks the matching tool, the component runs it, and the File Manager changes on screen.

## See also

* [WebMCP overview](https://help.syncfusion.com/file-manager-sdk/ai-tools/webmcp-tools) explains how a component registers tools and how an agent calls them.
* [WebMCP Supported Syncfusion Blazor Components](https://blazor.syncfusion.com/documentation/webmcp/components) lists the built-in tools you can call from an agent prompt.