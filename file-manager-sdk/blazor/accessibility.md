---
layout: post
title: Accessibility in Blazor File Manager | Syncfusion
description: Learn how the Blazor File Manager supports WAI-ARIA, keyboard navigation, and WCAG, Section 508, and ADA accessibility standards.
control: File Manager
platform: file-manager-sdk
documentation: ug
appliesto: UI Component Suite, File Manager SDK
---

# Accessibility in Blazor File Manager

The [Blazor File Manager](https://www.syncfusion.com/blazor-components/blazor-file-manager) component has been designed with keeping the [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/) specifications in mind, and applied the `WAI-ARIA` roles, states, and properties along with `keyboard support`. This component is characterized by complete keyboard interaction support and ARIA accessibility support, which makes navigation easy for people who use assistive technologies (AT) or for users who completely rely on keyboard navigation.

The Blazor File Manager component followed the accessibility guidelines and standards, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/) standards, and [WCAG roles](https://www.w3.org/TR/wai-aria/#roles) that are commonly used to evaluate accessibility.

The accessibility compliance for the Blazor File Manager component is outlined below.

| Accessibility Criteria | Compatibility |
| -- | -- |
| [WCAG 2.2](https://www.w3.org/TR/WCAG22/) Support | AA |
| [Section 508](https://www.section508.gov/) Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Screen Reader Support | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| Right-To-Left Support | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| Color Contrast | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| Mobile Device Support | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| Keyboard Navigation Support | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Axe-core](https://www.nuget.org/packages/Deque.AxeCore.Playwright) Accessibility Validation | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |

<style>
    .post .post-content img {
        display: inline-block;
        margin: 0.5em 0;
    }
</style>

<div><img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> - All features of the component meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Partial"> - Some features of the component do not meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/landing-page/no.png" alt="No"> - The component does not meet the requirement.</div>

## Accessibility of dependent components

The Blazor File Manager is a composite component that renders a file system-like interface. It is built by integrating several Syncfusion Blazor components, and each of these components implements its own dedicated accessibility support for WAI-ARIA, keyboard interaction, and screen reader compatibility. The accessibility experience of the File Manager as a whole is therefore the combined accessibility behavior of these dependent components.

The following dependent components are used within the Blazor File Manager:

| **Dependent component** | **Location in the File Manager** | **Accessibility documentation** |
| --- | --- | --- |
| Toolbar | Rendered at the top of the File Manager for file operations such as new folder, upload, cut, copy, paste, delete, download, and view switching. | [Toolbar Accessibility](https://blazor.syncfusion.com/documentation/toolbar/accessibility) |
| Splitter | Separates the navigation pane (TreeView), the content pane, and the preview pane, and allows users to resize each pane. | [Splitter Accessibility](https://blazor.syncfusion.com/documentation/splitter/accessibility) |
| TreeView | Rendered in the navigation (left) pane to display the folder hierarchy. | [TreeView Accessibility](https://blazor.syncfusion.com/documentation/treeview/accessibility) |
| Breadcrumb | Rendered at the top of the content pane to display and navigate the current folder path. | [Breadcrumb Accessibility](https://blazor.syncfusion.com/documentation/breadcrumb/accessibility) |
| Grid | Rendered in the content pane when the File Manager is in **Details view** layout. | [Grid Accessibility](https://blazor.syncfusion.com/documentation/grid/accessibility) |
| ListView | Rendered in the content pane when the File Manager is in **Large icons view** layout. | [ListView Accessibility](https://blazor.syncfusion.com/documentation/listview/accessibility) |
| Context Menu | Rendered when right-clicking a file, folder, or empty area of the File Manager to expose file operations. | [Context Menu Accessibility](https://blazor.syncfusion.com/documentation/context-menu/accessibility) |
| Dialog | Rendered for dialogs such as the new folder, rename, upload confirmation, delete confirmation, and file preview dialogs. | [Dialog Accessibility](https://blazor.syncfusion.com/documentation/dialog/accessibility) |
| Uploader | Rendered inside the upload dialog to upload files to the current folder. | [Uploader Accessibility](https://blazor.syncfusion.com/documentation/uploader/accessibility) |

### How dependent components contribute to File Manager accessibility

* **Toolbar**: The toolbar items follow the WAI-ARIA toolbar pattern and support full keyboard navigation. Disabled items communicate their state through `aria-disabled`, popup items (such as the upload and view switcher sub-menus) are exposed through `aria-haspopup` and `aria-expanded`, and the active item is tracked for assistive technologies.
* **Splitter**: The splitter panes expose their expand/collapse state and orientation through ARIA attributes, and each splitter bar is keyboard focusable, so keyboard-only and screen reader users can resize or collapse the navigation and preview panes.
* **TreeView**: The navigation pane tree nodes use `role="tree"`, `aria-level`, `aria-expanded`, and `aria-selected` to expose the folder hierarchy, and support dedicated tree keyboard navigation for expanding, collapsing, and moving between folders.
* **Breadcrumb**: The path bar exposes the current folder path to assistive technologies and supports keyboard navigation to move between path levels, including the overflow items.
* **Grid**: In the Details view, the file list is rendered as a grid with `aria-colcount`, `aria-colindex`, `aria-sort`, and related ARIA attributes so that screen readers can announce column headers, sorted state, and row content. The grid also provides its own keyboard navigation for moving between rows and cells.
* **ListView**: In the Large icons view, the file list is rendered as a selectable list with `aria-selected` support, so screen readers can announce the selected state of each file and folder item.
* **Context Menu**: The context menu follows the WAI-ARIA menu pattern, opens on both right-click and keyboard shortcut (<kbd>Shift</kbd>+<kbd>F10</kbd>/<kbd>Context Menu</kbd> key), and its items are fully navigable with arrow keys, ensuring keyboard-only users can access every file operation.
* **Dialog**: All File Manager dialogs (such as new folder, rename, and delete confirmation) trap the focus within the dialog while open, are exposed as modals through `aria-modal`, `aria-labelledby`, and `aria-describedby`, and restore focus to the initiating element when closed.
* **Uploader**: The upload dialog's file list and buttons are exposed through appropriate roles and labels, and upload progress and status information is communicated programmatically so that assistive technology users can follow the upload process.

## WAI-ARIA attributes

The Blazor File Manager component followed the [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/) patterns to meet the accessibility. The following ARIA attributes are used in the Blazor File Manager component:

| **Attributes** | **Purpose** |
| --- | --- |
| aria-disabled | Indicates whether the Blazor File Manager component is in disabled state.|
| aria-haspopup | Indicates whether the Toolbar element has a suggestion list. |
| aria-orientation | Indicates whether the Blazor File Manager element is oriented horizontally or vertically. |
| aria-expanded | Indicates whether the Treeview node has been expanded. |
| aria-owns | Contains the ID of the suggestion list to indicate popup as a child element. |
| aria-activedescendent | Holds the ID of the active list item to focus its descendant child element. |
| aria-level | Specifies the level of the element in Treeview Structure. |
| aria-selected | Indicates whether a particular node is in selected state. |
| aria-placeholder | Represents a hint (word or phrase) to the user about what to enter in the text field |
| aria-label |  Defines a string that labels the current element. |
| aria-checked | Indicates whether the checkbox is in checked state. |
| aria-labelledby | Labels the dialog. Often, the value of the aria-labelledby attribute will be the id of the element, which is used to title the dialog |
| aria-describedby | Describes the contents of the dialog. |
| aria-modal | Indicates whether an element is a modal when displayed. |
| aria-colcount | Specifies the number of columns in full table. |
| aria-colindexnt | Defines the number of columns within a grid. |
| aria-rowspan | Defines the number of rows a cell spanned within a grid. |
| aria-colspan | Defines the number of columns a cell spanned within a grid. |
| aria-sort | Indicates whether items in the grid or table are sorted in ascending or descending order. |
| aria-grabbed | This attribute is set to true, and it has been selected for dragging. If this element is set to false, the element can be grabbed for a drag-and-drop operation, but will not currently be selected. |
| aria-busy | This attribute is set to false when grid content is loaded. |
| aria-multiselectable | Defines more than one item has been selected. |

## Keyboard interaction

You can use the following key shortcuts to access the Blazor File Manager without interruptions.

| Windows | Mac | Actions |
| --- | --- | --- |
| <kbd>Page Down</kbd> | <kbd>Page Down</kbd> | Scrolls down to the next folder or file and selects the first item when files are loaded. |
| <kbd>Page Up</kbd> | <kbd>Page Up</kbd> | Scrolls up to previous folder and select the first item when files are loaded. |
| <kbd>Enter</kbd> | <kbd>Enter</kbd> | Selects the focused item and navigate through the child elements. |
| <kbd>Tab</kbd> | <kbd>Tab</kbd> | Focuses on the first element of toolbar and navigates through the next tab indexed element. |
| <kbd>Esc(Escape)</kbd> | <kbd>Esc</kbd> | Closes the image when it is in open state. |
| <kbd>Alt</kbd> + <kbd>N</kbd> | <kbd>⌥</kbd> + <kbd>N</kbd> | Creates a new folder dialog.|
| <kbd>F5</kbd> | <kbd>F5</kbd> | Refresh the Blazor File Manager element. |
| <kbd>Ctrl+Shift+1</kbd> | <kbd>⌘</kbd> + <kbd>⇧</kbd> + <kbd>1</kbd> | Changes the Blazor File Manager layout to Grid view. |
| <kbd>Ctrl+Shift+2</kbd> | <kbd>⌘</kbd> + <kbd>⇧</kbd> + <kbd>2</kbd> | Changes the Blazor File Manager layout to Details view. |

## Ensuring accessibility

The Blazor File Manager component's accessibility levels are ensured through an [axe-core](https://www.nuget.org/packages/Deque.AxeCore.Playwright) software tool during automated testing.

The accessibility compliance of the Blazor File Manager component is shown in the following sample. Open the [sample](https://blazor.syncfusion.com/accessibility/filemanager) in a new window to evaluate the accessibility of the Blazor File Manager component with accessibility tools.

## See also

* [Accessibility in Blazor components](https://blazor.syncfusion.com/documentation/common/accessibility)