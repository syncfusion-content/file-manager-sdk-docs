---
layout: post
title: WebMCP tool integration for React File Manager | Syncfusion
description: Learn how to integrate WebMCP with the Syncfusion React File Manager component to enable AI interaction, configure tools, manage access, and monitor execution.
control: File Manager
platform: file-manager-sdk
documentation: ug
domainurl: https://help.syncfusion.com/file-manager-sdk
appliesto: UI Component Suite, File Manager SDK
---

# WebMCP Tools Integration for Syncfusion® React File Manager Component

WebMCP enables AI agents to discover and interact with Syncfusion® React components through a standardized tool interface. By enabling WebMCP, AI-powered applications can securely discover component capabilities, read data, perform actions, and automate workflows through a standardized interface.


## WebMCP Overview

WebMCP allows AI assistants running in the browser to interact directly with Syncfusion® components through natural language prompts.

Instead of relying on DOM inspection or simulating user interactions, AI assistants can interact directly with component APIs through WebMCP tools. This approach provides more reliable and accurate results.

Once connected, an AI assistant can perform tasks such as:

- Browse and open files and folders.
- Upload or download files.
- Create, rename, and delete file system items.
- Perform component-specific actions through natural language prompts.

> WebMCP is currently an experimental browser capability and requires a Chromium-based browser with WebMCP support enabled. Availability and required browser flags may change as the specification evolves.

## Prerequisites

- Syncfusion® React components
- Chromium-based Browser (like Chrome, Edge, or Brave)
- [Node.js 24+](https://nodejs.org/en) (LTS recommended).
- WebMCP browser extension installed
- AI API key configured in the extension

## WebMCP setup

Before you can use WebMCP locally, enable the feature flag and install the browser extension:

1. Enable `WebMCP for testing` flag via `chrome://flags/`. Click **"Relaunch"** to restart Chrome.

2. Search for **"WebMCP - Model Context Tool Inspector"** in [Chrome Web Store](https://chromewebstore.google.com/detail/webmcp-model-context-tool/gbpdfapgefenggkahomfgkhfehlcenpd). Click **"Add to Chrome"**.

3. Visit [Google AI Studio](https://aistudio.google.com/app/apikey) to create or copy an API key. Open the WebMCP extension → paste your API key.

The WebMCP extension is now configured and ready to interact with WebMCP-enabled Syncfusion® components.

## Integrating WebMCP tools

Follow these steps to integrate WebMCP support into Syncfusion® React components. The following example uses the File Manager component.

### Step 1: Set up the Vite project

Create a React Vite application and integrate the Syncfusion® React File Manager component by following the [Getting Started with React File Manager](https://help.syncfusion.com/file-manager-sdk/react/getting-started) guide. After completing the setup, follow the steps below to enable WebMCP integration.

### Step 2: Enable WebMCP support

Import the WebMCP module and inject it into the component to make WebMCP functionality available.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}

import { FileManagerComponent, Inject, NavigationPane, DetailsView, Toolbar, WebMcpFileManager } from '@syncfusion/ej2-react-filemanager';

function App() {
  let hostUrl = "https://physical-service.syncfusion.com/";
  const ajaxSettings = {
    downloadUrl: hostUrl + 'api/FileManager/Download',
    getImageUrl: hostUrl + 'api/FileManager/GetImage',
    uploadUrl: hostUrl + 'api/FileManager/Upload',
    url: hostUrl + 'api/FileManager/FileOperations'
  };

  return (
    <FileManagerComponent id="filemanager" ajaxSettings={ajaxSettings}>
      <Inject services={[NavigationPane, DetailsView, Toolbar, WebMcpFileManager]} />
    </FileManagerComponent>
  );
}

export default App;

{% endhighlight %}
{% endtabs %}

### Step 3: Register component tools

Set the `enableWebMcp` property to `true` to register the component's available tools with the WebMCP runtime.

When `enableWebMcp` is enabled, supported component tools are automatically registered with the WebMCP runtime and become discoverable by authorized WebMCP clients.

For example, a File Manager component may expose tools such as:

- getSelectedFiles
- manageFileSystemItems
- manageFileUploadAndDownload

An AI assistant can discover these tools and invoke them based on user prompts.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}

import { FileManagerComponent, Inject, NavigationPane, DetailsView, Toolbar, WebMcpFileManager } from '@syncfusion/ej2-react-filemanager';

function App() {
  let hostUrl = "https://physical-service.syncfusion.com/";
  const ajaxSettings = {
    downloadUrl: hostUrl + 'api/FileManager/Download',
    getImageUrl: hostUrl + 'api/FileManager/GetImage',
    uploadUrl: hostUrl + 'api/FileManager/Upload',
    url: hostUrl + 'api/FileManager/FileOperations'
  };

  return (
    <FileManagerComponent id="filemanager" ajaxSettings={ajaxSettings} enableWebMcp={true}>
      <Inject services={[NavigationPane, DetailsView, Toolbar, WebMcpFileManager]} />
    </FileManagerComponent>
  );
}

export default App;

{% endhighlight %}
{% endtabs %}

### Step 4: Customize tool registration

Use the `webMcpSettings` property to customize how WebMCP tools are exposed to AI agents. The available settings are listed below.

| Property | Description |
|-----------|-------------|
| `name` | Prefix applied to registered tool names. If name: `sales` is specified, a tool such as `getSelectedFiles` may be registered as `sales_getSelectedFiles`, allowing multiple component instances to coexist without tool name conflicts. |
| `tools` | List of tool names to expose. Any supported tools not included in this list will not be registered. |
| `exposeTo` | List of trusted domains that are allowed to interact with the component through WebMCP. |

{% raw %}

{% tabs %}
{% highlight js tabtitle="App.jsx" %}

import { FileManagerComponent, Inject, NavigationPane, DetailsView, Toolbar, WebMcpFileManager } from '@syncfusion/ej2-react-filemanager';

function App() {
  let hostUrl = "https://physical-service.syncfusion.com/";
  const ajaxSettings = {
    downloadUrl: hostUrl + 'api/FileManager/Download',
    getImageUrl: hostUrl + 'api/FileManager/GetImage',
    uploadUrl: hostUrl + 'api/FileManager/Upload',
    url: hostUrl + 'api/FileManager/FileOperations'
  };

  return (
    <FileManagerComponent id="filemanager" ajaxSettings={ajaxSettings} enableWebMcp={true}
      webMcpSettings={{
        name: 'docs',
        tools: ['getSelectedFiles', 'manageFileSystemItems', 'manageFileUploadAndDownload'],
        exposeTo: ['https://www.syncfusion.com/']
      }}>
      <Inject services={[NavigationPane, DetailsView, Toolbar, WebMcpFileManager]} />
    </FileManagerComponent>
  );
}

export default App;

{% endhighlight %}
{% endtabs %}

{% endraw %}

> Use the `exposeTo` property to restrict WebMCP access to trusted domains. This helps prevent unauthorized WebMCP clients from interacting with your component tools.

### Step 5: Monitor and control tool execution

The `beforeWebMcpToolExecute` event is triggered before a tool is executed. This event allows you to:

- Audit tool usage.
- Validate incoming requests.
- Cancel tool execution when necessary.
- Apply custom business rules and security policies.

> AI-generated requests should always be validated before executing write operations. Restrict access using `exposeTo` and perform additional authorization checks within `beforeWebMcpToolExecute` when modifying application data.

{% raw %}

{% tabs %}
{% highlight js tabtitle="App.jsx" %}

import { FileManagerComponent, Inject, NavigationPane, DetailsView, Toolbar, WebMcpFileManager } from '@syncfusion/ej2-react-filemanager';

function App() {
  let hostUrl = "https://physical-service.syncfusion.com/";
  const ajaxSettings = {
    downloadUrl: hostUrl + 'api/FileManager/Download',
    getImageUrl: hostUrl + 'api/FileManager/GetImage',
    uploadUrl: hostUrl + 'api/FileManager/Upload',
    url: hostUrl + 'api/FileManager/FileOperations'
  };

  const beforeWebMcpToolExecute = (args) => {
    // Example business rule
    if (args.toolName.includes('manageFileSystemItems')) {
      const hour = new Date().getHours();
      if (hour < 9 || hour > 17) {
        args.cancel = true;
        console.log('File system operations are allowed only between 9:00 AM and 5:00 PM.');
      }
    }
  };

  return (
    <FileManagerComponent id="filemanager" ajaxSettings={ajaxSettings} enableWebMcp={true}
      webMcpSettings={{
        name: 'docs',
        tools: ['getSelectedFiles', 'manageFileSystemItems', 'manageFileUploadAndDownload'],
        exposeTo: ['https://www.syncfusion.com/']
      }}
      beforeWebMcpToolExecute={beforeWebMcpToolExecute}>
      <Inject services={[NavigationPane, DetailsView, Toolbar, WebMcpFileManager]} />
    </FileManagerComponent>
  );
}

export default App;

{% endhighlight %}
{% endtabs %}

{% endraw %}

## File Manager WebMCP tools

The Syncfusion® File Manager component exposes 7 tools that enable AI agents to browse files, manage file operations, control the user interface, perform navigation, and automate common file management workflows. Explore the Syncfusion® React File Manager component with WebMCP integration through this [demo](https://demos.syncfusion.com/file-manager-sdk/web-mcp/index.html).

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
- Use the `name` property when multiple component instances exist on the same page.
- Configure `exposeTo` to limit access to trusted domains.
- Monitor tool activity through the `beforeWebMcpToolExecute` event.
- Apply application-specific validation before executing tool operations.

## Explore the demo

Explore the Syncfusion® React File Manager component with WebMCP integration through this [demo](https://demos.syncfusion.com/file-manager-sdk/web-mcp/index.html).

## Next steps

After successfully enabling WebMCP, you can:

- Integrate WebMCP with other Syncfusion® React components.
- Build AI-powered workflows that interact directly with application data and UI elements.
- Create secure and controlled tool execution pipelines using custom validation logic.

## See also

- [WebMCP Supported Syncfusion React Components](https://ej2.syncfusion.com/react/documentation/webmcp/components)
