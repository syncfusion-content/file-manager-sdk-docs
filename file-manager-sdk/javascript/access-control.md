---
layout: post
title: Access control in JavaScript File Manager component | Syncfusion
description: Learn how to configure access control (permissions and rules) in the JavaScript File Manager component using Syncfusion Essential JS 2.
platform: file-manager-sdk
control: File Manager
publishingplatform: file-manager-sdk
documentation: ug
domainurl: https://help.syncfusion.com/file-manager-sdk
---

# Access control in JavaScript File Manager component

The File Manager component allows defining access permissions for folders and files using access rules assigned to users or roles.

* [Access rules](#access-rules)
* [Permissions](#permissions)

## Access rules

Use `FileAccessController` to define security permissions for folders and files with a set of folder or file access rules.

To set up access rules for folders (including their files and subfolders) and individual files, use the `SetRules()` method in the controller. The following table lists the `AccessRule` properties available for files and folders:

| **Property** | **Applicable to file** | **Applicable to folder** | **Description** |
| --- | --- | --- | --- |
| Copy | Yes | Yes | Allows copying a file or folder. |
| Read | Yes | Yes | Allows reading a file or folder. |
| Write | Yes | Yes | Allows writing to a file or folder. |
| WriteContents | No | Yes | Allows writing the contents of a folder. |
| Download | Yes | Yes | Allows downloading a file or folder. |
| Upload | No | Yes | Allows uploading to the folder. |
| Path | Yes | Yes | Specifies the path to which the rules apply. |
| Role | Yes | Yes | Specifies the role to which the rule applies. |
| IsFile | Yes | Yes | Specifies whether the rule targets a folder or a file. |

The following example shows access rules for the Administrator role for files and folders.

```ts
//Administrator
//Access Rules for File
    new AccessRule { Path = "/*.*", Role = "Administrator", Read = Permission.Allow, Write = Permission.Allow, Copy = Permission.Allow, Download = Permission.Allow, IsFile = true },

// Access Rules for folder
   new AccessRule { Path = "*", Role = "Administrator", Read = Permission.Allow, Write = Permission.Allow, Copy = Permission.Allow, WriteContents = Permission.Allow, Upload = Permission.Allow, Download = Permission.Deny, IsFile = false },

```

The following example shows access rules for the Default User role for files and folders.

```ts
//Default User
//Access Rules for File
    new AccessRule { Path = "/*.*", Role = "Default User", Read = Permission.Deny, Write = Permission.Deny, Copy = Permission.Deny, Download = Permission.Deny, IsFile = true },

// Access Rules for folder
     new AccessRule { Path = "*", Role = "Default User", Read = Permission.Deny, Write = Permission.Deny, Copy = Permission.Deny, WriteContents = Permission.Deny, Upload = Permission.Deny, Download = Permission.Deny, IsFile = false },

```

## Permissions

This section explains how to apply security permissions to File Manager files and folders using access rules. The following table lists the values that determine the permission behavior.

| **Value** | **Description** |
| --- | ---|
| Allow | Permits read, write, copy, and download operations. |
| Deny | Prevents read, write, copy, and download operations. |

Use the `Role` property to apply roles to the File Manager. The File Manager then enforces permissions for files and folders based on assigned roles.

The following examples show how to apply permissions based on assigned roles.

Deny write permission for the Administrator role on files and folders.

```ts
// For file
 new AccessRule { Path = "/*.*", Role = "Administrator", Read = Permission.Allow, Write = Permission.Deny, IsFile = true},

// For folder
  new AccessRule { Path = "*", Role = "Administrator", Read = Permission.Allow, Write = Permission.Deny, IsFile = false},

```

The following examples show how to allow or deny permissions based on file or folder access rules.

Deny write permission except for a particular file or folder.

```ts
// Deny writing for particular folder
 new AccessRule { Path = "/Documents", Role = "Document Manager", Read = Permission.Allow, Write = Permission.Deny, Copy = Permission.Allow, WriteContents = Permission.Deny, Upload = Permission.Deny, Download = Permission.Deny, IsFile = false },

 // Deny writing for particular file
  new AccessRule { Path = "/Pictures/Employees/Adam.png", Role = "Document Manager", Read = Permission.Allow, Write = Permission.Deny, Copy = Permission.Deny, Download = Permission.Deny, IsFile = true },

```

Deny write and upload permissions in the root folder.

```ts
// Folder Rule
 new AccessRule { Path = "/", Role = "Document Manager", Read = Permission.Allow, Write = Permission.Deny, Copy = Permission.Deny, WriteContents = Permission.Deny, Upload = Permission.Deny, Download = Permission.Deny, IsFile = false },
```

The following example demonstrates the File Manager rendered with access control support.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/file-manager-sdk/javascript/access-control-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager-sdk/javascript/access-control-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager-sdk/javascript/access-control-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/file-manager-sdk/javascript/access-control-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/file-manager-sdk/javascript/access-control-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager-sdk/javascript/access-control-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager-sdk/javascript/access-control-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/file-manager-sdk/javascript/access-control-cs1" %}
{% endif %}
