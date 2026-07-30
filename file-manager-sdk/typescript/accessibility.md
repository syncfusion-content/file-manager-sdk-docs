---
layout: post
title: Accessibility in TypeScript File Manager component | Syncfusion
description: Learn how the TypeScript File Manager component meets accessibility standards with keyboard, screen reader, and RTL support.
platform: file-manager-sdk
control: File Manager 
publishingplatform: file-manager-sdk
documentation: ug
domainurl: https://help.syncfusion.com/file-manager-sdk
---

# Accessibility in TypeScript File Manager component

The File Manager component follows accessibility guidelines and standards, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/), and [WAI-ARIA roles](https://www.w3.org/TR/wai-aria/#roles), which are commonly used to evaluate accessibility.

The accessibility compliance for the File Manager component is outlined below.

| Accessibility Criteria | Compatibility |
| -- | -- |
| [WCAG 2.2](https://www.w3.org/TR/WCAG22/) Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Section 508](https://www.section508.gov/) Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Screen reader support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Right-to-left (RTL) support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Color Contrast | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Mobile device support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Keyboard navigation support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Accessibility Checker](https://www.npmjs.com/package/accessibility-checker) validation | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [axe-core](https://www.npmjs.com/package/axe-core) accessibility validation | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |

<style>
    .post .post-content img {
        display: inline-block;
        margin: 0.5em 0;
    }
</style>
<div><img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> - All features of the control meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> - Some features of the control do not meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/not-supported.png" alt="No"> - The control does not meet the requirement.</div>

## WAI-ARIA attributes

The File Manager component follows [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns) patterns to meet accessibility requirements. The following ARIA attributes are used in the File Manager component:

| Attributes | Purpose |
| --- | --- |
| `role` | Used to convey a significant and contextual message to the user. |
| `aria-disabled` | Indicates whether the File Manager control is in disabled state.|
| `aria-haspopup` | Indicates whether the toolbar item has a popup list or not. |
| `aria-orientation` | Indicates whether the File Manager element is oriented horizontally or vertically. |
| `aria-expanded` | Indicates whether the Treeview node has been expanded. |
| `aria-owns` | Contains the ID of the suggestion list to indicate popup as a child element. |
| `aria-activedescendent` | Holds the ID of the active list item to focus its descendant child element. |
| `aria-level` | Specifies the level of the element in Treeview Structure. |
| `aria-selected` | Indicates whether a particular node is in selected state. |
| `aria-placeholder` | Represents a hint (word or phrase) to the user about what to enter in the text field. |
| `aria-label` |  Provides an accessible name for the element. |
| `aria-checked` | Indicates whether the checkbox is in checked state. |
| `aria-labelledby` | Provides a label for the dialog. Typically, the "aria-labelledby" attribute will contain the id of the element used as the dialog's title. |
| `aria-describedby` | This attribute points to the Dialog element describing the one it's set on. |
| `aria-modal` | Indicates whether an element is a modal when display. |
| `aria-colcount` | Specifies the number of columns in full table. |
| `aria-colindexnt` | Defines the number of columns within a table in details view. |
| `aria-rowspan` | Defines the number of rows a cell spanned within a table in details view. |
| `aria-colspan` | Defines the number of columns a cell spanned within a table in details view. |
| `aria-sort` | Indicates whether items in the table are sorted in ascending or descending order. |
| `aria-grabbed` | When the folder/file item is chosen for dragging, the aria-grabbed attribute is set to "true." If it's set to "false," the element can be grabbed for drag-and-drop, but it won't be actively held. |
| `aria-busy` | This attribute is set to false when table content is loaded. |
| `aria-multiselectable` | Defines more than one item has been selected. |

## Keyboard interaction

The File Manager component follows keyboard interaction guidelines, making it easy for people who use assistive technologies (AT) or rely on keyboard navigation. The following keyboard shortcuts are supported by the File Manager component.

| **Press** | **To do this** |
| --- | --- |
| <kbd>Page Down</kbd> | Scrolls down to the next folder or file and selects the first item when files are loaded. |
| <kbd>Page Up</kbd> | Scrolls up to previous folder and select the first item when files are loaded. |
| <kbd>Enter</kbd> | Selects the focused item and navigate through the child elements. |
| <kbd>Tab</kbd> | Focuses on the first element of toolbar and navigates through the next tab indexed element. |
| <kbd>Esc(Escape)</kbd> | Closes the image when it is in open state. |
| <kbd>Alt+N</kbd> | Creates a new folder dialog.|
| <kbd>F5</kbd> | Refresh the File Manager element. |
| <kbd>Home</kbd> | Navigate through the first element of details view or large icons view. |
| <kbd>End</kbd> | Navigate through the last element of details view or large icons view. |
| <kbd>Move Left</kbd> | Scrolls left to the previous folder and select the first item when files are loaded |
| <kbd>Move Right</kbd> | Scrolls right to the previous folder and select the first item when files are loaded |
| <kbd>Alt+Enter</kbd> | Shows the get details info for selected folder. |
| <kbd>Shift+Right</kbd> | Allows multiselection. Select the file or folder at the right of the previously selected folder. |
| <kbd>Shift+Left</kbd> | Allows multiselection. Select the file or folder at the left of the previously selected folder. |
| <kbd>Shift+Down</kbd> | Allows multiselection. Select the file or folder till the focused index. |
| <kbd>Shift+Delete</kbd> | Permanently deletes the selected file or folder in the File Manager element. |
| <kbd>Delete</kbd> | Deletes the selected file or folder in the File Manager element. |
| <kbd>Shift+Up</kbd> | Allows multiselection. Select the file or folder till the focused index. |
| <kbd>Ctrl+C</kbd> | Copies the selected file or folder in the File Manager element. |
| <kbd>Ctrl+V</kbd> | Pastes the copied/cut file or folder in the File Manager element. |
| <kbd>Ctrl+X</kbd> | Cuts the selected file or folder in the File Manager element. |
| <kbd>Ctrl+A</kbd> | Select all the files or folders in the details view or large icons view. |
| <kbd>F2</kbd> | Creates a rename dialog for a selected file or folder in the File Manager element. |
| <kbd>Shift+F10</kbd> | Opens the context menu for the selected file or folder in the File Manager element. |
| <kbd>Ctrl+D</kbd> | Downloads the list of selected files or folders in the File Manager element. |
| <kbd>Ctrl+Shift+1</kbd> | Changes the File Manager layout to details view. |
| <kbd>Ctrl+Shift+2</kbd> | Changes the File Manager layout to large icons view. |

## Ensuring accessibility

The File Manager component's accessibility levels are validated using [Accessibility Checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) during automated testing.

The accessibility compliance of the File Manager component is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/file-manager.html) in a new window to evaluate the File Manager component with accessibility tools.

{% previewsample "https://ej2.syncfusion.com/accessibility/file-manager.html" %}

## See also

* [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript controls](../common/accessibility)
