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

The [Blazor File Manager](https://www.syncfusion.com/blazor-components/blazor-file-manager) component has been designed with the [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/) specifications in mind. It applies the WAI-ARIA roles, states, and properties and provides complete keyboard interaction support, making navigation easy for people who use assistive technologies (AT) or for users who completely rely on keyboard navigation.

The Blazor File Manager component follows the accessibility guidelines and standards, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/) standards, and [WCAG roles](https://www.w3.org/TR/wai-aria/#roles) that are commonly used to evaluate accessibility. The same accessibility behavior is supported in both the Blazor Server and Blazor WebAssembly hosting models.

## Prerequisites

* Blazor Server or Blazor WebAssembly project (.NET 6.0 or later)
* [Syncfusion Blazor](https://www.nuget.org/packages/Syncfusion.Blazor) NuGet package installed
* Register the Blazor File Manager as shown in the [Getting Started](getting-started.md) topic

## Accessibility compliance

The accessibility compliance for the Blazor File Manager component is outlined below.

| Accessibility Criteria | Compatibility |
| -- | -- |
| [WCAG 2.2](https://www.w3.org/TR/WCAG22/) Support | AA |
| [Section 508](https://www.section508.gov/) Support | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Supported"> |
| Screen Reader Support | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Supported"> |
| Tested Screen Readers (NVDA, JAWS, VoiceOver, TalkBack, Narrator) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Supported"> |
| Right-To-Left Support | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Supported"> |
| Color Contrast | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Supported"> |
| Mobile Device Support | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Supported"> |
| Keyboard Navigation Support | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Supported"> |
| [Axe-core](https://www.nuget.org/packages/Deque.AxeCore.Playwright) Accessibility Validation | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Supported"> |

**Legend:** A check mark (<img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Supported">) means all features of the component meet the requirement, a partial mark (<img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Partially supported">) means some features do not meet the requirement, and an empty mark (<img src="https://cdn.syncfusion.com/content/images/landing-page/no.png" alt="Not supported">) means the component does not meet the requirement.

### Mobile and touch accessibility

The Blazor File Manager supports the following touch interactions on mobile devices, in addition to the keyboard shortcuts documented below:

* Tap to select a file or folder.
* Double-tap to open a file or folder.
* Long-press to open the context menu.
* Pinch to zoom the preview image.

## WAI-ARIA attributes

The Blazor File Manager component follows the [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/) patterns to meet accessibility requirements. The following ARIA attributes are used in the Blazor File Manager component. The attribute values are automatically localized for non-English UIs through the [localization](localization.md) feature.

### Toolbar

| **Attributes** | **Purpose** |
| --- | --- |
| aria-disabled | Indicates whether the Blazor File Manager component is in the disabled state. |
| aria-haspopup | Indicates whether the Toolbar element has a suggestion list. |
| aria-orientation | Indicates whether the toolbar is oriented horizontally or vertically. |
| aria-label | Defines a string that labels the current element. |

### Treeview

| **Attributes** | **Purpose** |
| --- | --- |
| aria-expanded | Indicates whether the Treeview node has been expanded. |
| aria-level | Specifies the level of the element in the Treeview structure. |
| aria-selected | Indicates whether a particular node is in the selected state. |
| aria-checked | Indicates whether the checkbox is in the checked state. |

### Grid

| **Attributes** | **Purpose** |
| --- | --- |
| aria-owns | Identifies the suggestion list as a child element of the owning element. |
| aria-activedescendant | Holds the ID of the active list item to focus its descendant child element. |
| aria-colcount | Specifies the total number of columns in the full table. |
| aria-colindex | Defines the column index of a cell within a row. |
| aria-rowspan | Defines the number of rows a cell spans within a grid. |
| aria-colspan | Defines the number of columns a cell spans within a grid. |
| aria-sort | Indicates whether items in the grid or table are sorted in ascending or descending order. |
| aria-busy | Set to `true` while grid content is loading and `false` when the load is complete. |
| aria-multiselectable | Indicates that more than one item can be selected. |
| aria-grabbed | **Deprecated.** This attribute is set to `true` when the element has been selected for dragging, and `false` when the element can be grabbed but is not currently selected. In WAI-ARIA 1.1 and later, use the `aria-pressed` and `aria-selected` drag pattern instead. |

### Dialogs and inputs

| **Attributes** | **Purpose** |
| --- | --- |
| aria-placeholder | Represents a hint (word or phrase) to the user about what to enter in the text field. Note: standard text input hints should use the HTML `placeholder` attribute; `aria-placeholder` is used only in limited ARIA widget contexts. |
| aria-labelledby | Labels the dialog. The value of the `aria-labelledby` attribute is the ID of the element used to title the dialog. |
| aria-describedby | Describes the contents of the dialog. |
| aria-modal | Indicates whether an element is a modal when displayed. |

## Keyboard interaction

When the File Manager first loads, focus is placed on the first toolbar element. The following key shortcuts can be used to access the Blazor File Manager without interruptions. Note that the <kbd>F5</kbd> shortcut is scoped to the File Manager element only and does not trigger a browser refresh.

### Navigation

| Windows | Mac | Actions |
| --- | --- | --- |
| <kbd>Tab</kbd> | <kbd>Tab</kbd> | Focuses on the first element of the toolbar and navigates to the next tab-indexed element. |
| <kbd>Shift</kbd> + <kbd>Tab</kbd> | <kbd>⇧</kbd> + <kbd>Tab</kbd> | Focuses on the previous tab-indexed element. |
| <kbd>Page Down</kbd> | <kbd>Page Down</kbd> | Scrolls down to the next folder or file and selects the first item when files are loaded. |
| <kbd>Page Up</kbd> | <kbd>Page Up</kbd> | Scrolls up to the previous folder and selects the first item when files are loaded. |
| <kbd>Enter</kbd> | <kbd>Enter</kbd> | Selects the focused item and navigates through the child elements. |
| <kbd>Esc (Escape)</kbd> | <kbd>Esc</kbd> | Closes the image preview when it is open. |

### View switching

| Windows | Mac | Actions |
| --- | --- | --- |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>1</kbd> | <kbd>⌘</kbd> + <kbd>⇧</kbd> + <kbd>1</kbd> | Changes the Blazor File Manager layout to Grid view. |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>2</kbd> | <kbd>⌘</kbd> + <kbd>⇧</kbd> + <kbd>2</kbd> | Changes the Blazor File Manager layout to Details view. |
| <kbd>F5</kbd> | <kbd>F5</kbd> | Refreshes the Blazor File Manager element (component-scoped; does not refresh the browser). |

### Actions

| Windows | Mac | Actions |
| --- | --- | --- |
| <kbd>Alt</kbd> + <kbd>N</kbd> | <kbd>⌥</kbd> + <kbd>N</kbd> | Opens the new folder dialog. |
| <kbd>Delete</kbd> | <kbd>Delete</kbd> | Deletes the selected file or folder. |
| <kbd>F2</kbd> | <kbd>F2</kbd> | Renames the selected file or folder. |
| <kbd>Ctrl</kbd> + <kbd>C</kbd> | <kbd>⌘</kbd> + <kbd>C</kbd> | Copies the selected file or folder. |
| <kbd>Ctrl</kbd> + <kbd>X</kbd> | <kbd>⌘</kbd> + <kbd>X</kbd> | Cuts the selected file or folder. |
| <kbd>Ctrl</kbd> + <kbd>V</kbd> | <kbd>⌘</kbd> + <kbd>V</kbd> | Pastes the copied or cut file or folder. |
| <kbd>Ctrl</kbd> + <kbd>A</kbd> | <kbd>⌘</kbd> + <kbd>A</kbd> | Selects all files and folders in the current folder. |
| <kbd>Shift</kbd> + Click | <kbd>⇧</kbd> + Click | Selects a contiguous range of files and folders. |
| <kbd>Ctrl</kbd> + Click | <kbd>⌘</kbd> + Click | Adds or removes an individual file or folder from the selection. |
| <kbd>Space</kbd> | <kbd>Space</kbd> | Opens the focused file. |

## Ensuring accessibility

The Blazor File Manager component's accessibility levels are ensured through the [axe-core](https://www.nuget.org/packages/Deque.AxeCore.Playwright) software tool during automated testing. To run axe-core against the File Manager in your own project:

1. Add the `Deque.AxeCore.Playwright` NuGet package to a test project.
2. Launch the Blazor application under test using Playwright.
3. Run `AxeBuilder().AnalyzeAsync()` against the File Manager element selector.
4. Assert that there are no violations with impact `serious` or `critical`.

The accessibility compliance of the Blazor File Manager component is shown in the following sample. Open the [sample](https://blazor.syncfusion.com/accessibility/filemanager) in a new window to evaluate the accessibility of the Blazor File Manager component with accessibility tools.

## Customizing accessibility

You can override the default `aria-label` values, set custom roles, and provide translated strings through the [localization](localization.md) feature. For example, set a custom label on the File Manager's `ToolbarSettings` and provide a `Title` for each dialog to control `aria-labelledby` content.

## See also

* [Accessibility in Blazor components](https://blazor.syncfusion.com/documentation/common/accessibility)
* [Getting Started with the Blazor File Manager](getting-started.md)
* [Customization in the Blazor File Manager](customization.md)
* [Localization in the Blazor File Manager](localization.md)