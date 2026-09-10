---
layout: post
title: Overview of Syncfusion Blazor File Manager | Syncfusion
description: Learn how to use the Syncfusion Blazor File Manager to browse, organize, upload, download, and manage files and folders across physical, cloud, and database storage.
control: File Manager
platform: file-manager-sdk
documentation: ug
---

# Overview of Syncfusion Blazor File Manager Component

## Introduction to Syncfusion Blazor File Manager

The [Blazor File Manager](https://www.syncfusion.com/blazor-components/blazor-file-manager) is a powerful, Explorer-like UI component for browsing, organizing, and managing files and folders directly within web applications. Built on the `SfFileManager<TValue>` component, it offers a comprehensive set of enterprise-grade capabilities—including a configurable toolbar, navigation pane, breadcrumb, context menu, dual view modes, and complete file operations—paired with a pluggable file-system-provider model that connects to physical disks, cloud storage, and databases. Designed for usability, security, and scalability, it enables developers to build document-management systems, cloud file explorers, and content portals without extensive custom UI work.

## Common use cases

The Blazor File Manager is ideal for a wide range of business scenarios:

| Use Case | Description | Key Features |
|----------|-------------|-------------|
| **Document Management Systems** | Provide users with an Explorer-like interface to browse, organize, and version documents across teams | File Operations, Navigation Pane, Details View |
| **Cloud File Explorers** | Browse and manage files stored in Amazon S3, Azure Blob, or Google Drive directly from the browser | Cloud File Providers, Thumbnail Preview, Search |
| **Image & Media Galleries** | Visualize and preview images and videos with large-icon thumbnails before download | Large Icons View, Image Preview, Drag-and-Drop |
| **Content Portals (CMS)** | Allow content authors to upload, rename, and arrange assets within a structured folder tree | Upload, Context Menu, Toolbar, Sorting |
| **Database-Backed File Stores** | Store file metadata and binaries in SQL and serve them through a standardized provider pattern | SQL Database Provider, Custom File Provider |
| **Collaborative Workspaces** | Let multiple users move, copy, and share files with access-controlled, permission-aware operations | Access Control (provider-specific), Drag-and-Drop, Multiple Selection |

## File System Provider Model

The Blazor File Manager decouples UI from storage through a *file system provider* model. The component sends standardized *file action* requests (read, create, rename, delete, search, copy, move, upload, download, get details, get image) to a backend controller implementing a provider, and renders the responses uniformly. This lets you choose or build the right storage strategy for any application architecture.

**Built-in Providers**

- **[Physical File System Provider](./physical-file-system-provider)** — Browse and manage files on a local disk through an ASP.NET Core controller backed by the `PhysicalFileProvider`. Ideal for on-premises applications and rapid prototyping. See the reference implementation at [ej2-aspcore-file-provider](https://github.com/SyncfusionExamples/ej2-aspcore-file-provider).

- **[Azure Cloud File System Provider](./azure-cloud-file-system-provider)** — Connect to Azure Blob Storage for durable, scalable, cloud-hosted object storage. Requires `accountName`, `accountKey`, and `blobName` credentials.

- **[Amazon S3 Cloud File Provider](./amazon-S3-cloud-file-provider)** — Connect to an AWS S3 bucket using `awsAccessKeyId`, `awsSecretAccessKeyId`, `bucketRegion`, and `awsRegion` to manage objects from the File Manager.

- **[File Transfer Protocol (FTP) File System Provider](./File-Transfer-Protocol-file-system-provider)** — Browse and manage files hosted on remote FTP servers.

- **[SharePoint File Provider](./sharePoint-file-provider)** — Integrate with Microsoft SharePoint document libraries for enterprise content management.

- **[SQL Database File System Provider](./SQL-database-file-system-provider)** — Persist file metadata and binaries in a relational database using a SQL-backed provider.

- **[Google Drive File System Provider](./Google-Drive-file-system-provider)** — Browse and manage files stored in Google Drive through a connector service.

- **[Firebase Real-time Database File System Provider](./Firebase-Real-time-Database-file-system-provider)** — Store and sync file metadata using Firebase's real-time database.

- **[Custom File Provider](./custom-file-provider)** — Build a provider for any proprietary or specialized backend by implementing the standard request/response format for each file action.

**Storage Compatibility**

The File Manager integrates with virtually any storage target through the provider pattern:

| Storage | Key Benefit | Best For |
|---------|------------|----------|
| **[Physical Disk](./physical-file-system-provider)** | Direct local filesystem access | On-premises apps, simple deployments |
| **[Azure Blob Storage](./azure-cloud-file-system-provider)** | Durable, massively scalable cloud object storage | Enterprise cloud apps, large unstructured data |
| **[Amazon S3](./amazon-S3-cloud-file-provider)** | Pay-as-you-go, highly available object storage | Cloud-native apps, cross-region storage |
| **[FTP Server](./File-Transfer-Protocol-file-system-provider)** | Legacy remote file access | Existing FTP infrastructure |
| **SharePoint** | Enterprise document library integration | Intranet content, Microsoft 365 workflows |
| **[SQL Database](./SQL-database-file-system-provider)** | Transactional, queryable file metadata | Apps needing relational metadata, audit |
| **[Google Drive](./Google-Drive-file-system-provider)** | Personal/Google Workspace cloud storage | Google-centric integrations |
| **[Firebase Realtime DB](./Firebase-Real-time-Database-file-system-provider)** | Real-time metadata sync | Collaborative, multi-user apps |
| **[Custom Provider](./custom-file-provider)** | Any proprietary storage or service | Specialized or legacy backends |

**Docker & Service Deployment**

Cloud and database providers include dedicated Docker support for containerized deployments:

| Provider | Docker Guide |
|----------|--------------|
| Amazon S3 | [Amazon S3 Provider Docker Support](./service-deployment/amazon-s3-provider-docker-support) |
| Azure Blob | [Azure Provider Docker Support](./service-deployment/azure-provider-docker-support) |

## Data Binding

The File Manager supports two ways to load files and folders within `SfFileManager<TValue>`:

- **[AjaxSettings](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.FileManagerAjaxSettings.html)** — Bind the component to a RESTful JSON service by configuring `FileManagerAjaxSettings` with the `Url`, `UploadUrl`, `DownloadUrl`, and `GetImageUrl` endpoints. The component automatically sends file-action requests and parses JSON responses.
- **List Objects (IEnumerable)** — Bind to a list of objects and supply responses within the corresponding File Manager events, bypassing the AJAX service entirely. Useful for in-memory or client-side scenarios.

N> When using [`AjaxSettings`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.FileManagerAjaxSettings.html), the File Manager loads data from its AJAX URLs. When using list objects, the File Manager loads data via the responses you provide in the events.

## File Operations

The Blazor File Manager provides comprehensive file and folder manipulation capabilities that let users browse, create, organize, and remove items directly within the interface. Every operation is a standardized *file action* sent to the configured provider and reflected in the UI after a successful server response.

| Operation | Purpose | Key Benefit |
|-----------|---------|-------------|
| **`read`** | Read files/folders from the current path to display content for browsing | Foundation for all navigation |
| **`create`** | Create a new folder in the current path | Quick folder organization |
| **`delete`** | Remove the selected file or folder from the file server | Cleanup and lifecycle management |
| **`rename`** | Rename the selected file or folder | Clear, organized naming |
| **`search`** | Search items matching a search string in the current and child directories | Fast item location |
| **`details`** | Retrieve details of the selected item(s) | Metadata visibility (size, dates, type) |
| **`copy`** | Copy the selected file or folder to a target path | Duplication without re-upload |
| **`move`** | Cut and move the selected file or folder to a target path | Reorganize without duplication |
| **`upload`** | Upload files to the current path | Add new content from client |
| **`download`** | Download files from the server (multiple files as ZIP) | Offline access, sharing |

N> The `CreateFolder`, `Remove`, and `Rename` actions are reflected in the File Manager UI only after a successful server response.

Each request and response carries standardized content fields (`name`, `dateCreated`, `dateModified`, `filterPath`, `hasChild`, `isFile`, `size`, `type`) plus an `error` object (`code`, `message`, `fileExists`) and an optional `details` block. Refer to File Operations for the full request/response schema of each action and the corresponding controller code.

## Views

The File Manager provides two built-in view modes for browsing files and folders, switchable at runtime through the toolbar, context menu, or the [`View`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.SfFileManager-1.html#Syncfusion_Blazor_FileManager_SfFileManager_1_View) API.

| View | Description | Best For | Key Benefit |
|------|-------------|----------|-------------|
| **[Large Icons View](./views#large-icons-view)** | Thumbnail-driven layout with large previews; default starting view | Visual recognition, images, media | Fast visual scanning |
| **[Details View](./views#details-view)** | Sorted tabular list with columns (Name, Date Modified, Type, Size) | Organized information, large directories | Column sorting, custom columns |

**Customizing Views**

- **Large Icons View** — Customize rendering entirely via the `LargeIconsTemplate` property to add file-type icons, background images, formatted dates, and dropdown menus per item.
- **Details View** — Add custom columns via `FileManagerColumn` under `FileManagerDetailsViewSettings`. Customize column `Width`, `MinWidth`, `Format`, `HeaderText`, `HeaderTemplate`, and per-cell `Template`.

## User interface & interaction

The File Manager UI is composed of several coordinated sections, fully configurable to match application workflows and design systems.

**UI Sections**

| Section | Purpose | Customization |
|---------|---------|---------------|
| **Toolbar** | Direct access to file operations at the top of the component | Items, visibility, custom items via templates |
| **[Context Menu](./context-menu)** | Right-click access to file, folder, and layout actions | Per-target items, enable/disable, hide, custom items |
| **[Navigation Pane](./end-user-capabilities#navigation-pane)** | Folder hierarchy tree for easy navigation | Visibility, min/max width, `NavigationPaneTemplate` |
| **Breadcrumb** | Parent-folder navigation with overflow dropdown | Auto-resizing; auto-collapses parent folders |
| **[Large Icons View](./views#large-icons-view)** | Browse using large thumbnails | `LargeIconsTemplate` |
| **[Details View](./views#details-view)** | Browse using a sortable grid | Custom columns, column templates |

**Toolbar**

Built-in toolbar items include `NewFolder`, `SortBy`, `Upload`, `Cut`, `Copy`, `Paste`, `Delete`, `Download`, `Rename`, `Refresh`, `View`, and `Details`. Configure the collection through `FileManagerToolbarSettings`, hide the toolbar via `Visible="false"`, and add custom items with [`FileManagerCustomToolbarItem`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.FileManagerCustomToolbarItem.html) using templates (e.g., a dropdown for folder vs. file upload).

**Context Menu**

The context menu displays different items depending on the target—*Layout* (empty area), *Folder*, or *File*—configured through `FileManagerContextMenuSettings` (`File`, `Folder`, `Layout` arrays). Customize items, enable/disable, show/hide, and inject custom items with icons via the [`MenuOpened`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.FileManagerEvents-1.html#Syncfusion_Blazor_FileManager_FileManagerEvents_1_MenuOpened) and [`OnMenuClick`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.FileManagerEvents-1.html#Syncfusion_Blazor_FileManager_FileManagerEvents_1_OnMenuClick) events.

**Multiple Selection**

| Feature | Purpose | Key Benefit |
|---------|---------|-------------|
| **[AllowMultiSelection](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.SfFileManager-1.html#Syncfusion_Blazor_FileManager_SfFileManager_1_AllowMultiSelection)** | Enable selecting multiple files via Ctrl/Shift-click (enabled by default) | Bulk operations |
| **Checkbox Selection** | Per-item checkboxes with select-all | Clear bulk selection |
| **[Range Selection](./multiple-file-selection#range-selection)** | Drag-select a range of files like File Explorer | Fast group selection |
| **GetSelectedFiles** | Retrieve selected items programmatically | Custom actions on selection |

Use the [`FileSelection`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.FileManagerEvents-1.html#Syncfusion_Blazor_FileManager_FileManagerEvents_1_FileSelection) event to prevent selection of specific items (set `args.Cancel = true`), and [`FileSelected`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.FileManagerEvents-1.html#Syncfusion_Blazor_FileManager_FileManagerEvents_1_FileSelected) to react after selection changes.

**Drag and Drop**

Enable with [`AllowDragAndDrop`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.SfFileManager-1.html#Syncfusion_Blazor_FileManager_SfFileManager_1_AllowDragAndDrop) to move files and folders within the file system. Three events provide full control over the lifecycle:

| Event | Triggers | Use Case |
|-------|----------|----------|
| [`OnFileDragStart`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.FileManagerEvents-1.html#Syncfusion_Blazor_FileManager_FileManagerEvents_1_OnFileDragStart) | Dragging starts | Validate, cancel, or customize drag |
| [`OnFileDragStop`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.FileManagerEvents-1.html#Syncfusion_Blazor_FileManager_FileManagerEvents_1_OnFileDragStop) | Item about to be dropped | Target validation |
| [`FileDropped`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.FileManagerEvents-1.html#Syncfusion_Blazor_FileManager_FileManagerEvents_1_FileDropped) | Item dropped | Post-drop actions |

See [Restrict Drag and Drop / Upload](./how-to/restrict-drag-and-drop-upload.md) for permission-based restrictions.

## Upload

The Blazor File Manager provides rich upload configuration through `FileManagerUploadSettings`, covering file size, type restrictions, chunked uploads, and upload mode.

| Feature | Property | Purpose | Key Benefit |
|---------|----------|---------|-------------|
| **Directory Upload** | [`DirectoryUpload`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.FileManagerUploadSettings.html#Syncfusion_Blazor_FileManager_FileManagerUploadSettings_DirectoryUpload) | Upload entire folders (supported by Physical, Azure, and Amazon S3 providers) | Bulk folder ingestion |
| **Sequential Upload** | [`SequentialUpload`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.FileManagerUploadSettings.html#Syncfusion_Blazor_FileManager_FileManagerUploadSettings_SequentialUpload) | Upload files one after another | Reduced traffic, fewer failures |
| **Chunk Upload** | [`ChunkSize`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.FileManagerUploadSettings.html#Syncfusion_Blazor_FileManager_FileManagerUploadSettings_ChunkSize) | Split large files into chunks with pause/resume | Reliable large-file upload |
| **Auto Upload** | [`AutoUpload`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.FileManagerUploadSettings.html#Syncfusion_Blazor_FileManager_FileManagerUploadSettings_AutoUpload) | Auto-upload on queue add (default `true`) | Manual queue control when `false` |
| **Auto Close** | [`AutoClose`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.FileManagerUploadSettings.html#Syncfusion_Blazor_FileManager_FileManagerUploadSettings_AutoClose) | Auto-close upload dialog after completion | Cleaner UX |
| **Allowed Extensions** | [`AllowedExtensions`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.FileManagerUploadSettings.html#Syncfusion_Blazor_FileManager_FileManagerUploadSettings_AllowedExtensions) | Restrict uploads to specific extensions | Security, type safety |
| **Max File Size** | [`MaxFileSize`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.FileManagerUploadSettings.html#Syncfusion_Blazor_FileManager_FileManagerUploadSettings_MaxFileSize) | Cap the maximum upload size | Resource protection |
| **Upload Mode** | [`UploadMode`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.FileManagerUploadSettings.html#Syncfusion_Blazor_FileManager_FileManagerUploadSettings_UploadMode) | `FormSubmit` (default) or `HttpClient` | HttpClient allows header/auth control via `OnSend` |

N> When `DirectoryUpload` is set to `true`, only folders can be uploaded. When it is set to `false`, only individual files can be uploaded. Simultaneous uploading of files and folders is not supported.

For large-file strategies, see [Upload Large Files](./how-to/upload-large-files.md). For HTTP handler customization, see [Customize HTTP Handler](./how-to/customize-http-handler.md).

## Performance

The Blazor File Manager is engineered for smooth browsing of directories containing hundreds to hundreds of thousands of items through virtualization, on-demand loading, and an efficient provider response format.

| Feature | Benefit | Use Case | Key Benefit |
|---------|---------|----------|-------------|
| **[Virtualization](./virtualization.md)** | Dynamically load only viewport-visible items in both Details and Large Icons views | Large directories (10K+ items) | Smooth scrolling |
| **[Pagination](./pagination.md)** | Segment files/folders into pages with a pager control | Browsable large directories | Predictable page sizes |
| **[Chunked Upload](./upload.md#chunk-upload)** | Upload large files in resumable chunks | Large binary uploads | Network resilience |

Enable virtualization via [`EnableVirtualization`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.SfFileManager-1.html#Syncfusion_Blazor_FileManager_SfFileManager_1_EnableVirtualization). Enable pagination via [`AllowPaging`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.SfFileManager-1.html#Syncfusion_Blazor_FileManager_SfFileManager_1_AllowPaging) with `FileManagerPageSettings` (`PageSize`, `NumericItemsCount`, `CurrentPage`, `PageSizes`, and `Template`).

**Virtualization Limitations**

- Programmatic `SelectAllAsync` is not supported with virtual scrolling.
- `Ctrl+A` selects only items currently in the viewport.
- Selected items are not retained while scrolling or switching views (for performance).

## Customization

The File Manager is fully customizable to align with application design systems and specialized workflows.

| Feature | Purpose | Key Benefit |
|---------|---------|-------------|
| **[Styles & Appearance](./styles)** | Override CSS classes for navigation pane, thumbnails, and layout | Brand-consistent theming |
| **[Toolbar Custom Items](./toolbar)** | Add custom toolbar items with templates | Specialized actions |
| **[Context Menu Custom Items](./context-menu)** | Add custom menu items with icons | Target-aware custom actions |
| **[Large Icons Template](./views#customize-existing-large-icons-view)** | Fully customize large-icon item rendering | Rich visual cards |
| **[Details View Columns](./views#define-custom-columns)** | Add/customize columns with templates and formats | Tailored tabular display |
| **[Navigation Pane Template](./end-user-capabilities#navigation-pane)** | Customize navigation pane icons and content | Custom folder trees |

**Thumbnails** can be customized per file type using CSS selectors (e.g., `.e-fe-image`, `.e-fe-folder`, `.e-fe-zip`, `.e-fe-xlsx`, and others—see Styles and Appearance for the full list). The `.e-navigation` selector customizes the navigation pane.

## Accessibility & Keyboard Navigation

The File Manager is fully accessible and compliant with major accessibility standards:

| Accessibility Criteria | Compatibility |
|------------------------|--------------|
| [WCAG 2.2](https://www.w3.org/TR/WCAG22/) Support | AA |
| [Section 508](https://www.section508.gov/) Support | Full |
| Screen Reader Support | Full |
| Right-To-Left (RTL) Support | Full |
| Color Contrast | Full |
| Mobile Device Support | Full |
| Keyboard Navigation Support | Full |
| [Axe-core](https://www.nuget.org/packages/Deque.AxeCore.Playwright) Validation | Full |

The component follows [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/) patterns with ARIA roles, states, and properties including `aria-disabled`, `aria-haspopup`, `aria-expanded`, `aria-selected`, `aria-label`, `aria-sort`, `aria-grabbed`, `aria-multiselectable`, and others.

**Keyboard Shortcuts**

| Windows | Mac | Action |
|---------|-----|--------|
| <kbd>Page Down</kbd> | <kbd>Page Down</kbd> | Scroll down to next folder/file, select first item |
| <kbd>Page Up</kbd> | <kbd>Page Up</kbd> | Scroll up to previous folder, select first item |
| <kbd>Enter</kbd> | <kbd>Enter</kbd> | Select focused item and navigate into it |
| <kbd>Tab</kbd> | <kbd>Tab</kbd> | Focus first toolbar element, traverse tab order |
| <kbd>Esc</kbd> | <kbd>Esc</kbd> | Close open image preview |
| <kbd>Alt</kbd>+<kbd>N</kbd> | <kbd>⌥</kbd>+<kbd>N</kbd> | Open New Folder dialog |
| <kbd>F5</kbd> | <kbd>F5</kbd> | Refresh the File Manager |
| <kbd>Ctrl+Shift+1</kbd> | <kbd>⌘</kbd>+<kbd>⇧</kbd>+<kbd>1</kbd> | Switch to Grid view |
| <kbd>Ctrl+Shift+2</kbd> | <kbd>⌘</kbd>+<kbd>⇧</kbd>+<kbd>2</kbd> | Switch to Details view |
| <kbd>Ctrl+A</kbd> | <kbd>⌘</kbd>+<kbd>A</kbd> | Select all items (viewport-limited under virtualization) |

## Events

The File Manager exposes a comprehensive event model through `FileManagerEvents<TValue>`. All events should be wired within a single `FileManagerEvents` component.

| Event | Triggers | Use Case |
|-------|----------|----------|
| [`FileSelection`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.FileManagerEvents-1.html#Syncfusion_Blazor_FileManager_FileManagerEvents_1_FileSelection) | Before a file/folder is selected | Prevent specific selections |
| [`FileSelected`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.FileManagerEvents-1.html#Syncfusion_Blazor_FileManager_FileManagerEvents_1_FileSelected) | After a file/folder is (un)selected | React to selection changes |
| [`OnFileDragStart`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.FileManagerEvents-1.html#Syncfusion_Blazor_FileManager_FileManagerEvents_1_OnFileDragStart) | Drag starts | Validate or cancel drag |
| [`OnFileDragStop`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.FileManagerEvents-1.html#Syncfusion_Blazor_FileManager_FileManagerEvents_1_OnFileDragStop) | Item about to drop | Validate target |
| [`FileDropped`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.FileManagerEvents-1.html#Syncfusion_Blazor_FileManager_FileManagerEvents_1_FileDropped) | Item dropped | Post-drop actions |
| [`ToolbarCreated`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.FileManagerEvents-1.html#Syncfusion_Blazor_FileManager_FileManagerEvents_1_ToolbarCreated) | Before toolbar items are created | Customize toolbar |
| [`ToolbarItemClicked`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.FileManagerEvents-1.html#Syncfusion_Blazor_FileManager_FileManagerEvents_1_ToolbarItemClicked) | Toolbar item clicked | Intercept toolbar actions |
| [`MenuOpened`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.FileManagerEvents-1.html#Syncfusion_Blazor_FileManager_FileManagerEvents_1_MenuOpened) | Context menu opens | Enable/disable, hide, or icon custom items |
| [`OnMenuClick`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.FileManagerEvents-1.html#Syncfusion_Blazor_FileManager_FileManagerEvents_1_OnMenuClick) | Context menu item clicked | Intercept menu actions |
| [`OnSend`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.FileManagerEvents-1.html#Syncfusion_Blazor_FileManager_FileManagerEvents_1_OnSend) (BeforeSend) | Before upload request sent | Add auth headers for `HttpClient` upload mode |

## Advanced features

| Feature | Purpose | Use Case | Key Benefit |
|---------|---------|----------|-------------|
| **[Custom HTTP Handler](./how-to/customize-http-handler)** | Modify request/response handling | Specialized backends | Full transport control |
| **[Custom Filtering](./how-to/perform-custom-filtering)** | Apply custom filter logic | Domain-specific search | Tailored item discovery |
| **[Nested Items](./how-to/nested-items)** | Hierarchical menu structures | Grouped custom actions | Organized custom UI |
| **[File Previewing](./how-to/previewing-files)** | Customize preview behavior | Specialized media workflows | Enhanced UX |
| **[Localization & Globalization](https://blazor.syncfusion.com/documentation/common/localization)** | Multi-language support with culture-specific formatting and RTL | International apps | Inclusive UX |

**Enterprise Patterns**

- **Secure Multi-tenant Apps** — Combine Access Control with Restrict Drag-and-Drop/Upload and a [Custom File Provider](./custom-file-provider.md).
- **Cloud Migration** — Use Azure Blob or [Amazon S3 providers with Docker Service Deployment](./service-deployment/amazon-s3-provider-docker-support.md).
- **Large Directories** — Enable [Virtualization](./virtualization.md) or [Pagination](./pagination.md) with Chunk Upload.

## System requirements

The Blazor File Manager works with:

- **Blazor Version**: .NET 8.0 or higher
- **Hosting Models**: Blazor Web App, Blazor WebAssembly, Blazor Server, Blazor MAUI
- **Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile**: iOS Safari, Android Chrome

## Quick links

**Getting Started:**
- [Blazor Web App Guide](./getting-started-with-web-app.md)
- [Blazor Server App Guide](./getting-started-with-server-app.md)
- [Blazor WebAssembly App Guide](./getting-started-with-wasm-app.md)
- [Blazor MAUI App Guide](./getting-started-with-maui-app.md)

**Popular Features:**
- [File Operations](./file-operations.md) — Read, create, rename, delete, copy, move, search
- [File System Providers](./file-system-provider.md) — Physical, cloud, database, custom
- [Upload](./upload.md) — Directory, sequential, chunk, auto upload, restrictions
- [Views](./views.md) — Large Icons and Details view customization
- [Toolbar](./toolbar.md) — Built-in and custom toolbar items
- [Context Menu](./context-menu.md) — Per-target menu customization
- [Drag and Drop](./drag-and-drop.md) — Move files with full event control
- [Virtualization](./virtualization.md) — Smooth large-directory browsing
- [Pagination](./pagination.md) — Page-controlled file display
- [Accessibility](./accessibility.md) — WCAG, Section 508, keyboard navigation

## Support & Resources

- **Questions?** Visit the [Syncfusion Support Portal](https://www.syncfusion.com/support)
- **Code Examples?** Browse [File Manager Demos](https://www.syncfusion.com/blazor-components/blazor-file-manager) and samples
- **API Details?** See [File Manager API Reference](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.SfFileManager-1.html)
- **Community?** Join the [Syncfusion Community Forum](https://www.syncfusion.com/forums/blazor-components)
- **What's New?** Check [Release Notes](../Release-Notes/)
