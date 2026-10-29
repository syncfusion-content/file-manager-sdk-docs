---
layout: post
title: WebMCP tool integration for TypeScript File Manager | Syncfusion
description: Learn how to integrate WebMCP with the Syncfusion TypeScript File Manager control to enable AI interaction, configure tools, manage access, and monitor execution.
control: File Manager
platform: file-manager-sdk
documentation: ug
domainurl: https://help.syncfusion.com/file-manager-sdk
appliesto: UI Component Suite, File Manager SDK
---

# WebMCP Tools Integration for Syncfusion® TypeScript File Manager Control

WebMCP enables AI agents to discover and interact with Syncfusion® JavaScript controls through a standardized tool interface. By enabling WebMCP, AI-powered applications can securely discover control capabilities, read data, perform actions, and automate workflows through a standardized interface.


## WebMCP Overview

WebMCP allows AI assistants running in the browser to interact directly with Syncfusion® controls through natural language prompts.

Instead of relying on DOM inspection or simulating user interactions, AI assistants can interact directly with control APIs through WebMCP tools. This approach provides more reliable and accurate results.

Once connected, an AI assistant can perform tasks such as:

- Browse and open files and folders.
- Upload or download files.
- Create, rename, and delete file system items.
- Perform control-specific actions through natural language prompts.

> WebMCP is currently an experimental browser capability and requires a Chromium-based browser with WebMCP support enabled. Availability and required browser flags may change as the specification evolves.

## Prerequisites

- Syncfusion® JavaScript controls
- Chromium-based Browser (like Chrome, Edge, or Brave)
- [Node.js 24+](https://nodejs.org/en) (LTS recommended).
- WebMCP browser extension installed
- AI API key configured in the extension

## WebMCP setup

Before you can use WebMCP locally, enable the feature flag and install the browser extension:

1. Enable `WebMCP for testing` flag via `chrome://flags/`. Click **"Relaunch"** to restart Chrome.

2. Search for **"WebMCP - Model Context Tool Inspector"** in [Chrome Web Store](https://chromewebstore.google.com/detail/webmcp-model-context-tool/gbpdfapgefenggkahomfgkhfehlcenpd). Click **"Add to Chrome"**.

3. Visit [Google AI Studio](https://aistudio.google.com/app/apikey) to create or copy an API key. Open the WebMCP extension → paste your API key.

The WebMCP extension is now configured and ready to interact with WebMCP-enabled Syncfusion® controls.

## Integrating WebMCP tools

Follow these steps to integrate WebMCP support into the Syncfusion® TypeScript File Manager control.

### Step 1: Create an application

Create an application using the Essential® JS 2 webpack quickstart and add the Syncfusion® TypeScript File Manager control by following the [Getting Started with TypeScript File Manager](https://help.syncfusion.com/file-manager-sdk/typescript/getting-started) guide. After completing the setup, follow the steps below to enable WebMCP integration.

### Step 2: Enable WebMCP support

Import the WebMCP module and inject it into the control to make WebMCP functionality available.

```ts
import { FileManager, Toolbar, NavigationPane, DetailsView, WebMcpFileManager } from '@syncfusion/ej2-filemanager';

FileManager.Inject(Toolbar, NavigationPane, DetailsView, WebMcpFileManager);

let hostUrl: string = 'https://physical-service.syncfusion.com/';
let filemanagerInstance: FileManager = new FileManager({
  ajaxSettings: {
    downloadUrl: hostUrl + 'api/FileManager/Download',
    getImageUrl: hostUrl + 'api/FileManager/GetImage',
    uploadUrl: hostUrl + 'api/FileManager/Upload',
    url: hostUrl + 'api/FileManager/FileOperations'
  }
});

filemanagerInstance.appendTo('#filemanager');

```

### Step 3: Register control tools

Set the `enableWebMcp` property to `true` to register the control's available tools with the WebMCP runtime.

When `enableWebMcp` is enabled, supported control tools are automatically registered with the WebMCP runtime and become discoverable by authorized WebMCP clients.

For example, a File Manager control may expose tools such as:

- getSelectedFiles
- manageFileSystemItems
- manageFileUploadAndDownload

An AI assistant can discover these tools and invoke them based on user prompts.

```ts
import { FileManager, Toolbar, NavigationPane, DetailsView, WebMcpFileManager } from '@syncfusion/ej2-filemanager';

FileManager.Inject(Toolbar, NavigationPane, DetailsView, WebMcpFileManager);

let hostUrl: string = 'https://physical-service.syncfusion.com/';
let filemanagerInstance: FileManager = new FileManager({
  enableWebMcp: true,
  ajaxSettings: {
    downloadUrl: hostUrl + 'api/FileManager/Download',
    getImageUrl: hostUrl + 'api/FileManager/GetImage',
    uploadUrl: hostUrl + 'api/FileManager/Upload',
    url: hostUrl + 'api/FileManager/FileOperations'
  }
});

filemanagerInstance.appendTo('#filemanager');

```

### Step 4: Customize tool registration

Use the `webMcpSettings` property to customize how WebMCP tools are exposed to AI agents. The available settings are listed below.

| Property | Description |
|-----------|-------------|
| `name` | Prefix applied to registered tool names. If name: `sales` is specified, a tool such as `getSelectedFiles` may be registered as `sales_getSelectedFiles`, allowing multiple control instances to coexist without tool name conflicts. |
| `tools` | List of tool names to expose. Any supported tools not included in this list will not be registered. |
| `exposeTo` | List of trusted domains that are allowed to interact with the control through WebMCP. |

```ts
import { FileManager, Toolbar, NavigationPane, DetailsView, WebMcpFileManager } from '@syncfusion/ej2-filemanager';

FileManager.Inject(Toolbar, NavigationPane, DetailsView, WebMcpFileManager);

let hostUrl: string = 'https://physical-service.syncfusion.com/';
let filemanagerInstance: FileManager = new FileManager({
  enableWebMcp: true,
  webMcpSettings: {
    name: 'docs',
    tools: ['getSelectedFiles', 'manageFileSystemItems', 'manageFileUploadAndDownload'],
    exposeTo: ['https://www.syncfusion.com/']
  },
  ajaxSettings: {
    downloadUrl: hostUrl + 'api/FileManager/Download',
    getImageUrl: hostUrl + 'api/FileManager/GetImage',
    uploadUrl: hostUrl + 'api/FileManager/Upload',
    url: hostUrl + 'api/FileManager/FileOperations'
  }
});

filemanagerInstance.appendTo('#filemanager');

```

> Use the `exposeTo` property to restrict WebMCP access to trusted domains. This helps prevent unauthorized WebMCP clients from interacting with your control tools.

### Step 5: Monitor and control tool execution

The `beforeWebMcpToolExecute` event is triggered before a tool is executed. This event allows you to:

- Audit tool usage.
- Validate incoming requests.
- Cancel tool execution when necessary.
- Apply custom business rules and security policies.

> AI-generated requests should always be validated before executing write operations. Restrict access using `exposeTo` and perform additional authorization checks within `beforeWebMcpToolExecute` when modifying application data.

```ts
import { FileManager, Toolbar, NavigationPane, DetailsView, WebMcpFileManager } from '@syncfusion/ej2-filemanager';

FileManager.Inject(Toolbar, NavigationPane, DetailsView, WebMcpFileManager);

let hostUrl: string = 'https://physical-service.syncfusion.com/';
let filemanagerInstance: FileManager = new FileManager({
  enableWebMcp: true,
  webMcpSettings: {
    name: 'docs',
    tools: ['getSelectedFiles', 'manageFileSystemItems', 'manageFileUploadAndDownload'],
    exposeTo: ['https://www.syncfusion.com/']
  },
  ajaxSettings: {
    downloadUrl: hostUrl + 'api/FileManager/Download',
    getImageUrl: hostUrl + 'api/FileManager/GetImage',
    uploadUrl: hostUrl + 'api/FileManager/Upload',
    url: hostUrl + 'api/FileManager/FileOperations'
  },
  beforeWebMcpToolExecute: (args: any) => {
    // Example business rule
    if (args.toolName.includes('manageFileSystemItems')) {
      const hour: number = new Date().getHours();
      if (hour < 9 || hour > 17) {
        args.cancel = true;
        console.log('File system operations are allowed only between 9:00 AM and 5:00 PM.');
      }
    }
  }
});

filemanagerInstance.appendTo('#filemanager');

```

## File Manager WebMCP tools

The Syncfusion® File Manager control exposes 7 tools that enable AI agents to browse files, manage file operations, control the user interface, perform navigation, and automate common file management workflows. Explore the Syncfusion® TypeScript File Manager control with WebMCP integration through this [demo](https://demos.syncfusion.com/file-manager-sdk/web-mcp/index.html).

| Tool Name | Description |
|-----------|-------------|
| getSelectedFiles | Returns the list of currently selected files and folders, including metadata such as name, ID, type, size, and modification details |
| manageFileSystemItems | Creates folders, renames files or folders, and deletes one or more file system items |
| manageFileUploadAndDownload | Opens the upload workflow or downloads one or more selected files |
| navigateAndOpenFiles | Navigates backward, opens files or folders, and refreshes the current file view |
| searchAndFilterFiles | Applies filters to files and folders based on specified criteria |
| manageUserInterface | Enables or disables menu and toolbar items, closes dialogs, and refreshes the layout |
| manageSelection | Selects all items or clears the current selection |

## Best practices

- Expose only the tools required by your application.
- Use the `name` property when multiple control instances exist on the same page.
- Configure `exposeTo` to limit access to trusted domains.
- Monitor tool activity through the `beforeWebMcpToolExecute` event.
- Apply application-specific validation before executing tool operations.

## Explore the demo

Explore the Syncfusion® TypeScript File Manager control with WebMCP integration through this [demo](https://demos.syncfusion.com/file-manager-sdk/web-mcp/index.html).

## Next steps

After successfully enabling WebMCP, you can:

- Integrate WebMCP with other Syncfusion® JavaScript controls.
- Build AI-powered workflows that interact directly with application data and UI elements.
- Create secure and controlled tool execution pipelines using custom validation logic.

## See also

- [WebMCP Supported Syncfusion JavaScript Controls](https://ej2.syncfusion.com/documentation/webmcp/components)
