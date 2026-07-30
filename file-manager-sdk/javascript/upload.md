---
layout: post
title: Upload in JavaScript File Manager component | Syncfusion
description: Learn here all about Upload in JavaScript File Manager component of Syncfusion Essential JS 2 and more
platform: file-manager-sdk
control: File Manager
publishingplatform: file-manager-sdk
documentation: ug
domainurl: https://help.syncfusion.com/file-manager-sdk
---

# Upload in JavaScript File Manager component

The JavaScript File Manager component provides an [`uploadSettings`](../api/file-manager/uploadsettings) property with options to control file uploads, including file size limits, allowed extensions, directory uploads, sequential and chunked uploads, auto-close behavior, and more.

## Directory upload

Enable folder uploads by setting [`directoryUpload`](../api/file-manager/uploadSettingsModel#directoryupload) to `true` inside [`uploadSettings`](../api/file-manager/uploadsettings). When `directoryUpload: true` users can upload entire folders; when `false`, only individual files are allowed. Simultaneous uploading of files and folders is not supported.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/file-manager-sdk/javascript/directory-upload/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager-sdk/javascript/directory-upload/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager-sdk/javascript/directory-upload/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/file-manager-sdk/javascript/directory-upload" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/file-manager-sdk/javascript/directory-upload/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager-sdk/javascript/directory-upload/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager-sdk/javascript/directory-upload/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/file-manager-sdk/javascript/directory-upload" %}
{% endif %}

>**Note:** When [`directoryUpload`](../api/file-manager/uploadSettingsModel#directoryupload) is set to `true`, only folders can be uploaded. When it is set to `false`, only individual files can be uploaded. Simultaneous uploading of files and folders is not supported.

To learn more about folder upload actions, refer to this [link](https://ej2.syncfusion.com/documentation/file-manager/file-operations#folder-upload-support)

## Sequential upload

The [`sequentialUpload`](../api/file-manager/uploadSettingsModel#sequentialupload) property controls whether users can upload files one by one in a sequential manner in the JavaScript File Manager control.

To enable sequential upload, set the [`sequentialUpload`](../api/file-manager/uploadSettingsModel#sequentialupload) property to `true` in the [`uploadSettings`](../api/file-manager/uploadsettings) configuration.

When set to `true`, the selected files will process sequentially (one after the other) to the server. If the file uploaded successfully or failed, the next file will upload automatically in this sequential upload. This feature helps to reduce the upload traffic and reduce the failure of file upload.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/file-manager-sdk/javascript/sequential-upload/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager-sdk/javascript/sequential-upload/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager-sdk/javascript/sequential-upload/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/file-manager-sdk/javascript/sequential-upload" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/file-manager-sdk/javascript/sequential-upload/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager-sdk/javascript/sequential-upload/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager-sdk/javascript/sequential-upload/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/file-manager-sdk/javascript/sequential-upload" %}
{% endif %}

The screenshot below shows that each file begins uploading only after the previous one completes. This demonstrates how the `sequentialUpload` property works in the File Manager control.

![File Manager with sequentialUpload](./images/filemanager-sequentialupload.png)

To learn more about folder upload actions, refer to this [link](https://ej2.syncfusion.com/documentation/file-manager/file-operations#folder-upload-support)

## Chunk upload

Use [`chunkSize`](../api/file-manager/uploadSettingsModel#chunksize) to split large files into smaller parts uploaded sequentially. This enables pause/resume and improves resilience for large transfers.

In the following example, the chunkSize is set to 5 MB (5,242,880 bytes), and the maxFileSize is set to 70 MB (73,728,000 bytes). This means files that are up to 70 MB will be uploaded in 5 MB chunks.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/file-manager-sdk/javascript/chunk-upload/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager-sdk/javascript/chunk-upload/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager-sdk/javascript/chunk-upload/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/file-manager-sdk/javascript/chunk-upload" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/file-manager-sdk/javascript/chunk-upload/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager-sdk/javascript/chunk-upload/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager-sdk/javascript/chunk-upload/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/file-manager-sdk/javascript/chunk-upload" %}
{% endif %}

Chunk upload provides pause and resume options, offering users enhanced control over the file upload process.

![File Manager with chunkUpload](./images/filemanager-chunkupload.png)

>**Note:**
>1. Chunk upload will function when the selected file size is greater than the specified chunk size. Otherwise, it uploads files normally.
>2. The pause and resume features are available only when the chunk upload is enabled.

## Auto upload

Control automatic uploading with [`autoUpload`](../api/file-manager/uploadSettingsModel#autoupload). Default is `true`. Set to `false`, the files will not be uploaded automatically, giving you a chance to manipulate the files before uploading them to the server.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/file-manager-sdk/javascript/auto-upload/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager-sdk/javascript/auto-upload/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager-sdk/javascript/auto-upload/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/file-manager-sdk/javascript/auto-upload" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/file-manager-sdk/javascript/auto-upload/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager-sdk/javascript/auto-upload/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager-sdk/javascript/auto-upload/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/file-manager-sdk/javascript/auto-upload" %}
{% endif %}

## Auto close

Use [`autoClose`](../api/file-manager/uploadSettingsModel#autoclose) to automatically close the upload dialog after uploads finish. Default is `false`; set to `true` to auto-close.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/file-manager-sdk/javascript/auto-close/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager-sdk/javascript/auto-close/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager-sdk/javascript/auto-close/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/file-manager-sdk/javascript/auto-close" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/file-manager-sdk/javascript/auto-close/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager-sdk/javascript/auto-close/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager-sdk/javascript/auto-close/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/file-manager-sdk/javascript/auto-close" %}
{% endif %}

## Prevent upload based on file extensions

The [`allowedExtensions`](../api/file-manager/uploadSettingsModel#allowedextensions) property specifies which file types are allowed for upload in the File Manager control by defining their extensions.

This property lets you define which file types can be uploaded by specifying allowed extensions, separated by commas. For example, to allow only image files, you would set the [`allowedExtensions`](../api/file-manager/uploadSettingsModel#allowedextensions) property to .jpg,.png.

By setting the [`allowedExtensions`](../api/file-manager/uploadSettingsModel#allowedextensions) property, you restrict the file types that can be uploaded. Only files with the specified extensions will be accepted.

If you want to allow only image files like .jpg and .png, you should set the property as follows:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/file-manager-sdk/javascript/file-extension/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager-sdk/javascript/file-extension/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager-sdk/javascript/file-extension/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/file-manager-sdk/javascript/file-extension" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/file-manager-sdk/javascript/file-extension/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager-sdk/javascript/file-extension/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager-sdk/javascript/file-extension/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/file-manager-sdk/javascript/file-extension" %}
{% endif %}

## Restrict external drag-and-drop upload

The File Manager control provides support for external drag-and-drop functionality for uploading files by dragging them from the local file system to File Manager.

To completely prevent the external drag-and-drop upload functionality (i.e., disallowing users from dragging and dropping files from outside into the File Manager), you can set the [`dropArea`](../api/uploader#droparea) property to null. This can be done by accessing the File Manager instance via its class methods.

>**Note:** Setting the [`allowDragAndDrop`](../api/file-manager#allowdraganddrop) property to false will not prevent the file upload operation through external drag and drop. It will only prevent drag-and-drop actions within the File Manager control.

The following example demonstrates how to prevent the external drag-and-drop upload actions for all types of files in the File Manager control.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/file-manager-sdk/javascript/upload-feature-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager-sdk/javascript/upload-feature-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager-sdk/javascript/upload-feature-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/file-manager-sdk/javascript/upload-feature-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/file-manager-sdk/javascript/upload-feature-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager-sdk/javascript/upload-feature-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager-sdk/javascript/upload-feature-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/file-manager-sdk/javascript/upload-feature-cs1" %}
{% endif %}

## See also

* [Set min and max file size in upload](https://ej2.syncfusion.com/documentation/file-manager/customization#upload-customization)
