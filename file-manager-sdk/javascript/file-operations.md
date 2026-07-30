---
layout: post
title: File operations in JavaScript File Manager component | Syncfusion
description: Learn how the JavaScript File Manager component performs file operations and the request/response formats.
platform: file-manager-sdk
control: File Manager
publishingplatform: file-manager-sdk
documentation: ug
domainurl: https://help.syncfusion.com/file-manager-sdk
---

# File operations in JavaScript File Manager component

The File Manager component provides a web-based interface to browse, manage, and organize files and folders. It supports basic file operations such as creating folders, uploading and downloading files, deleting and renaming items, and previewing images.

The following table summarizes the core file operations and their functions.

|Operation Name|Function|
|----|----|
|read|Read details of files or folders in the specified path to display content to the user.|
|create|Create a new folder in the current path.|
|delete|Remove a file or folder from the server.|
|rename|Rename the selected file or folder.|
|search|Search for items matching a search string within the current directory and its children.|
|details|Retrieve details for the selected item(s).|
|copy|Copy the selected files or folders.|
|move|Cut (move) the selected files or folders.|
|upload|Upload files to the current path or directory.|
|download|Download files from the server; multiple files may be returned as a ZIP archive.|

>The CreateFolder, Remove, and Rename actions are applied in the File Manager only after the server returns a successful response.

## Folder upload support

Enable directory (folder) upload by setting [`directoryUpload`](../api/file-manager/uploadSettings#directoryupload) to true inside the [`uploadSettings`](../api/file-manager#uploadsettings) property. Directory upload is supported for the following server providers:
* Physical file service provider.
* Azure file service provider.
* NodeJS file service provider.
* Amazon file service provider.

The example below shows enabling/disabling directory upload via a DropDownButton selection.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/file-manager-sdk/javascript/directory-upload-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager-sdk/javascript/directory-upload-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager-sdk/javascript/directory-upload-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/file-manager-sdk/javascript/directory-upload-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/file-manager-sdk/javascript/directory-upload-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager-sdk/javascript/directory-upload-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager-sdk/javascript/directory-upload-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/file-manager-sdk/javascript/directory-upload-cs1" %}
{% endif %}
### Physical file service provider

To achieve the directory upload in the physical file service provider, use the below code snippet in `IActionResult Upload` method in the `Controllers/FileManagerController.cs` file.

```ts
[Route("Upload")]
public IActionResult Upload(string path, IList<IFormFile> uploadFiles, string action)
{
    try
    {
        FileManagerResponse uploadResponse;
        foreach (var file in uploadFiles)
        {
            var folders = (file.FileName).Split('/');
            // checking the folder upload
            if (folders.Length > 1)
            {
                for (var i = 0; i < folders.Length - 1; i++)
                {
                    string newDirectoryPath = Path.Combine(this.basePath + path, folders[i]);
                    // checking the directory traversal
                    if (Path.GetFullPath(newDirectoryPath) != (Path.GetDirectoryName(newDirectoryPath) + Path.DirectorySeparatorChar + folders[i]))
                    {
                        throw new UnauthorizedAccessException("Access denied for Directory-traversal");
                    }
                    if (!Directory.Exists(newDirectoryPath))
                    {
                        this.operation.ToCamelCase(this.operation.Create(path, folders[i]));
                    }
                    path += folders[i] + "/";
                }
            }
        }
        uploadResponse = operation.Upload(path, uploadFiles, action, size, null);
        if (uploadResponse.Error != null)
        {
            Response.Clear();
            Response.ContentType = "application/json; charset=utf-8";
            Response.StatusCode = Convert.ToInt32(uploadResponse.Error.Code);
            Response.HttpContext.Features.Get<IHttpResponseFeature>().ReasonPhrase = uploadResponse.Error.Message;
        }
    }
    catch (Exception e)
    {
        ErrorDetails er = new ErrorDetails();
        er.Message = e.Message.ToString();
        er.Code = "417";
        er.Message = "Access denied for Directory-traversal";
        Response.Clear();
        Response.ContentType = "application/json; charset=utf-8";
        Response.StatusCode = Convert.ToInt32(er.Code);
        Response.HttpContext.Features.Get<IHttpResponseFeature>().ReasonPhrase = er.Message;
        return Content("");
    }
    return Content("");
}
```

Refer to the [GitHub](https://github.com/SyncfusionExamples/ej2-aspcore-file-provider/blob/master/Controllers/FileManagerController.cs#L76) for more details

And also add the below code snippet in `FileManagerResponse Upload` method in `Models/PhysicalFileProvider.cs` file.

```ts
string[] folders = name.Split('/');
string fileName = folders[folders.Length - 1];
var fullName = Path.Combine((this.contentRootPath + path), fileName);
```

Refer to the [GitHub](https://github.com/SyncfusionExamples/ej2-aspcore-file-provider/blob/master/Models/PhysicalFileProvider.cs#L1185) for more details.

### Azure file service provider

For Azure file service provider, no customizations are needed for directory upload with server side and this will work with the below default upload method code.

Refer to the [GitHub](https://github.com/SyncfusionExamples/azure-aspcore-file-provider/blob/master/Controllers/AzureProviderController.cs#L94) for more details.

### NodeJS file service provider

To perform the directory upload in the NodeJS file service provider, use the below code snippet in `app.post` method in the `filesystem-server.js` file.

```ts
var folders = (path.normalize(req.body.filename).replace(/^(\.\.[\/\\])+/, '').replace(/\\/g, "/")).split('/');
var filepath = path.normalize(req.body.path).replace(/^(\.\.[\/\\])+/, '').replace(/\\/g, "/");
var uploadedFileName = folders[folders.length - 1];
// checking the folder upload
if (folders.length > 1)
{
    for (var i = 0; i < folders.length - 1; i++)
    {
        var newDirectoryPath = path.join(contentRootPath + filepath, folders[i]);
        const fullPath = (contentRootPath + filepath + folders[i]).replace(/[\\/]/g, "\\");
        const isValidatePath = fullPath == newDirectoryPath ? true : false;
        // checking the directory traversal
        if(!isValidatePath){
            var errorMsg = new Error();
            errorMsg.message = "Access denied for Directory-traversal";
            errorMsg.code = "401";
            response = { error: errorMsg };
            response = JSON.stringify(response);
            res.setHeader('Content-Type', 'application/json');
            res.json(response);
        }
        if (!fs.existsSync(newDirectoryPath)) {
            fs.mkdirSync(newDirectoryPath);
            (async () => {
               await FileManagerDirectoryContent(req, res, newDirectoryPath).then(data => {
                    response = { files: data };
                    response = JSON.stringify(response);
               });
            })();
        }
        filepath += folders[i] + "/";
    }
    fs.rename('./' + uploadedFileName, path.join(contentRootPath, filepath + uploadedFileName), function (err) {
        if (err) {
            if (err.code != 'EBUSY') {
                errorValue.message = err.message;
                errorValue.code = err.code;
            }
        }
    });
}
```

Refer to the [GitHub](https://github.com/SyncfusionExamples/ej2-filemanager-node-filesystem/blob/master/filesystem-server.js#L788) for more details.

### Amazon file service provider

To perform the directory upload in the Amazon file service provider, use the below code snippet in `IActionResult AmazonS3Upload` method in the `Controllers/AmazonS3ProviderController.cs` file.

```ts
foreach (var file in uploadFiles)
{
    var folders = (file.FileName).Split('/');
    // checking the folder upload
    if (folders.Length > 1)
    {
        for (var i = 0; i < folders.Length - 1; i++)
        {
            if (!this.operation.checkFileExist(path, folders[i]))
            {
                this.operation.ToCamelCase(this.operation.Create(path, folders[i], dataObject));
            }
            path += folders[i] + "/";
        }
    }
}
```

Refer to the [GitHub](https://github.com/SyncfusionExamples/amazon-s3-aspcore-file-provider/blob/master/Controllers/AmazonS3ProviderController.cs#L83) for more details.

And also add the below code snippet in `AsyncUpload` method in `Models/AmazonS3FileProvider.cs` file.

```ts
string[] folders = file.FileName.Split('/');
string name = folders[folders.Length - 1];
```

Refer to the [GitHub](https://github.com/SyncfusionExamples/amazon-s3-aspcore-file-provider/blob/master/Models/AmazonS3FileProvider.cs#L585) for more details.

## File operation request and response parameters

The File Manager sends operation requests to the server and expects structured responses. The following sections describe request/response parameters for each operation.

### Read

The following table represents the request parameters of *read* operations.

|Parameter|Type|Default|Explanation|
|----|----|----|----|
|action|String|read|Name of the file operation.|
|path|String|-|Relative path from which the data has to be read.|
|showHiddenItems|Boolean|-|Defines show or hide the hidden items.|
|data|FileManagerDirectoryContent|-|Details about the current path (directory).|

*Refer [File request and response contents](#file-request-and-response-contents) for the contents of data*.

*Example:*

```ts
{
    action: "read",
    path: "/",
    showHiddenItems: false,
    data: []
}
```

The following table represents the response parameters of *read* operations.

|Parameter|Type|Default|Explanation|
|----|----|----|----|
|cwd|FileManagerDirectoryContent|-|Path (Current Working Directory) details.|
|files|FileManagerDirectoryContent[]|-|Details of files and folders present in given path or directory.|
|error|ErrorDetails|-|Error Details|

*Refer [File request and response contents](#file-request-and-response-contents) for the contents of cwd, files, and error*.

*Example:*

```ts
{
    cwd:
    {
        name:"Download",
        size:0,
        dateModified:"2019-02-28T03:48:19.8319708+00:00",
        dateCreated:"2019-02-27T17:36:15.812193+00:00",
        hasChild:false,
        isFile:false,
        type:"",
        filterPath:"//Download//"
    },
    files:[
        {
            name:"Sample Work Sheet.xlsx",
            size:6172,
            dateModified:"2019-02-27T17:23:50.9651206+00:00",
            dateCreated:"2019-02-27T17:36:15.8151955+00:00",
            hasChild:false,
            isFile:true,
            type:".xlsx",
            filterPath:"//Download//"
        }
    ],
    error:null,
    details:null
}
```

### Create

The following table represents the request parameters of *create* operations.

|Parameter|Type|Default|Explanation|
|----|----|----|----|
|action|String|create|Name of the file operation.|
|path|String|-|Relative path in which the folder has to be created.|
|name|String|-|Name of the folder to be created.|
|data|FileManagerDirectoryContent|-|Details about the current path (directory).|

*Refer [File request and response contents](#file-request-and-response-contents) for the contents of data*

*Example:*

```ts
{
    action: "create",
    data: [
        {
            dateCreated: "2019-02-27T17:36:15.6571949+00:00",
            dateModified: "2019-03-12T10:17:31.8505975+00:00",
            filterPath: "/",
            hasChild: true,
            isFile: false,
            name: files,
            nodeId: "fe_tree",
            size: 0,
            type: ""
        }
    ],
    name: "Hello",
    path: "/"
}
```

The following table represents the response parameters of *create* operations.

|Parameter|Type|Default|Explanation|
|----|----|----|----|
|files|FileManagerDirectoryContent[]|-|Details of the created folder|
|error|ErrorDetails|-|Error Details|

*Refer [File request and response contents](#file-request-and-response-contents) for the contents of files and error*.

*Example:*

```ts
{
    cwd: null,
    files: [
        {
            dateCreated: "2019-03-15T10:25:05.3596171+00:00",
            dateModified: "2019-03-15T10:25:05.3596171+00:00",
            filterPath: null,
            hasChild: false,
            isFile: false,
            name: "New",
            size: 0,
            type: ""
        }
    ],
    details: null,
    error: null
}
```

### Rename

The following table represents the request parameters of *rename* operations.

|Parameter|Type|Default|Explanation|
|----|----|----|----|
|action|String|rename|Name of the file operation.|
|path|String|-|Relative path in which the item is located.|
|name|String|-|Current name of the item to be renamed.|
|newname|String|-|New name for the item.|
|data|FileManagerDirectoryContent|-|Details of the item to be renamed.|

*Refer [File request and response contents](#file-request-and-response-contents) for the contents of data*.

*Example:*

```ts
{
    action: "rename",
    data: [
        {
            dateCreated: "2019-03-20T05:22:34.621Z",
            dateModified: "2019-03-20T08:45:56.000Z",
            filterPath: "/Pictures/Nature/",
            hasChild: false,
            iconClass: "e-fe-image",
            isFile: true,
            name: "seaviews.jpg",
            size: 95866,
            type: ".jpg"
        }
    ],
    newname: "seaview.jpg",
    name: "seaviews.jpg",
    path: "/Pictures/Nature/"
}
```

The following table represents the response parameters of *rename* operations.

|Parameter|Type|Default|Explanation|
|----|----|----|----|
|files|FileManagerDirectoryContent[]|-|Details of the renamed item.|
|error|ErrorDetails|-|Error Details|

*Refer [File request and response contents](#file-request-and-response-contents) for the contents of files and error*.

*Example:*

```ts
{
    cwd:null,
    files:[
        {
            name:"seaview.jpg",
            size:95866,
            dateModified:"2019-03-20T08:45:56+00:00",
            dateCreated:"2019-03-20T05:22:34.6214847+00:00",
            hasChild:false,
            isFile:true,
            type:".jpg",
            filterPath:"//Pictures//Nature//seaview.jpg"
        }
    ],
    error:null,
    details:null
}
```

### Delete

The following table represents the request parameters of *delete* operations.

|Parameter|Type|Default|Explanation|
|----|----|----|----|
|action|String|delete|Name of the file operation.|
|path|String|-|Relative path where the items to be deleted are located.|
|names|String[]|-|List of the items to be deleted.|
|data|FileManagerDirectoryContent|-|Details of the item to be deleted.|

*Refer [File request and response contents](#file-request-and-response-contents) for the contents of data*.

*Example:*

```ts
{
    action: "delete",
    path: "/Hello/",
    names: ["New"],
    data: []
}
```

The following table represents the response parameters of *delete* operations.

|Parameter|Type|Default|Explanation|
|----|----|----|----|
|files|FileManagerDirectoryContent[]|-|Details about the deleted item(s).|
|error|ErrorDetails|-|Error Details|

*Refer [File request and response contents](#file-request-and-response-contents) for the contents of files and error*.

*Example:*

```ts
{
    cwd: null,
    details: null,
    error: null,
    files: [
        {
            dateCreated: "2019-03-15T10:13:30.346309+00:00",
            dateModified: "2019-03-15T10:13:30.346309+00:00",
            filterPath: "/Hello/folder",
            hasChild: true,
            isFile: false,
            name: "folder",
            size: 0,
            type: ""
        }
    ]
}
```

### Details

The following table represents the request parameters of *details* operations.

|Parameter|Type|Default|Explanation|
|----|----|----|----|
|action|String|details|Name of the file operation.|
|path|String|-|Relative path where the items are located.|
|names|String[]|-|List of the items to get details.|
|data|FileManagerDirectoryContent|-|Details of the selected item.|

*Refer [File request and response contents](#file-request-and-response-contents) for the contents of data*.

*Example:*

```ts
{
    action: "details",
    path: "/FileContents/",
    names: ["All Files"],
    data: []
}
```

The following table represents the response parameters of *details* operations.

|Parameter|Type|Default|Explanation|
|----|----|----|----|
|details|FileManagerDirectoryContent|-|Details of the requested item(s).|
|error|ErrorDetails|-|Error Details|

*Refer [File request and response contents](#file-request-and-response-contents) for the contents of details and error*.

*Example:*

```ts
{
    cwd:null,
    files:null,
    error:null,
    details:
    {
        name:"All Files",
        location:"//Files//FileContents//All Files",
        isFile:false,
        size:"679.8 KB",
        created:"3/8/2019 10:18:37 AM",
        modified:"3/8/2019 10:18:39 AM",
        multipleFiles:false
    }
}
```

### Search

The following table represents the request parameters of *search* operations.

|Parameter|Type|Default|Explanation|
|----|----|----|----|
|action|String|search|Name of the file operation.|
|path|String|-|Relative path to the directory where the files should be searched.|
|showHiddenItems|Boolean|-|Defines show or hide the hidden items.|
|caseSensitive|Boolean|-|Defines search is case sensitive or not.|
|searchString|String|-|String to be searched in the directory.|
|data|FileManagerDirectoryContent|-|Details of the searched item.|

*Example:*

```ts
{
    action: "search",
    path: "/",
    searchString: "*nature*",
    showHiddenItems: false,
    caseSensitive: false,
    data: []
}
```

The following table represents the response parameters of *search* operations.

|Parameter|Type|Default|Explanation|
|----|----|----|----|
|cwd|FileManagerDirectoryContent|-|Path (Current Working Directory) details.|
|files|FileManagerDirectoryContent[]|-|Files and folders in the searched directory that matches the search input.|
|error|ErrorDetails|-|Error Details|

*Refer [File request and response contents](#file-request-and-response-contents) for the contents of cwd, files and error.*

*Example:*

```ts
{
    cwd:
    {
        name:files,
        size:0,
        dateModified:"2019-03-15T10:07:00.8658158+00:00",
        dateCreated:"2019-02-27T17:36:15.6571949+00:00",
        hasChild:true,
        isFile:false,
        type:"",
        filterPath:"//"
    },
    files:[
        {
            name:"Nature",
            size:0,
            dateModified:"2019-03-08T10:18:42.9937708+00:00",
            dateCreated:"2019-03-08T10:18:42.5907729+00:00",
            hasChild:true,
            isFile:false,
            type:"",
            filterPath:"//FileContents//Nature"
        }
    ],
    error:null,
    details:null
}
```

### Copy

The following table represents the request parameters of *copy* operations.

|Parameter|Type|Default|Explanation|
|----|----|----|----|
|action|String|copy|Name of the file operation.|
|path|String|-|Relative path to the directory where the files should be copied.|
|names|String[] |-|List of files to be copied.|
|targetPath|String|-|Relative path where the items to be pasted are located.|
|data|FileManagerDirectoryContent|-|Details of the copied item.|
|renameFiles|String[]|-|Details of the renamed item.|

*Example:*

```ts
{
    action: "copy",
    path: "/",
    names: ["6.png"],
    renameFiles: ["6.png"],
    targetPath: "/Videos/"
}
```

The following table represents the response parameters of *copy* operations.

|Parameter|Type|Default|Explanation|
|----|----|----|----|
|cwd|FileManagerDirectoryContent|-|Path (Current Working Directory) details.|
|files|FileManagerDirectoryContent[]|-|Details of copied files or folders|
|error|ErrorDetails|-|Error Details|

*Refer [File request and response contents](#file-request-and-response-contents) for the contents of cwd, files and error.*

*Example:*

```ts
{
    cwd:null,
    files:[
        {
            path:null,
            action:null,
            newName:null,
            names:null,
            name:"justin.mp4",
            size:0,
            previousName:"album.mp4",
            dateModified:"2019-06-21T06:58:32+00:00",
            dateCreated:"2019-06-24T04:22:14.6245618+00:00",
            hasChild:false,
            isFile:true,
            type:".mp4",
            id:null,
            filterPath:"//"
        }
    ],
    error:null,
    details:null
}
```

### Move

The following table represents the request parameters of *move* operations.

|Parameter|Type|Default|Explanation|
|----|----|----|----|
|action|String|move|Name of the file operation.|
|path|String|-|Relative path to the directory where the files should be copied.|
|names|String[] |-|List of files to be moved.|
|targetPath|String|-|Relative path where the items to be pasted are located.|
|data|FileManagerDirectoryContent|-|Details of the moved item.|
|renameFiles|String[]|-|Details of the renamed item.|

*Example:*

```ts
{
    action: "move",
    path: "/",
    names: ["6.png"],
    renameFiles: ["6.png"],
    targetPath: "/Videos/"
}
```

The following table represents the response parameters of *copy* operations.

|Parameter|Type|Default|Explanation|
|----|----|----|----|
|cwd|FileManagerDirectoryContent|-|Path (Current Working Directory) details.|
|files|FileManagerDirectoryContent[]|-|Details of cut files or folders|
|error|ErrorDetails|-|Error Details|

*Refer [File request and response contents](#file-request-and-response-contents) for the contents of cwd, files and error.*

*Example:*

```ts
{
    cwd:null,
    files:[
        {
            path:null,
            action:null,
            newName:null,
            names:null,
            name:"justin biber.mp4",
            size:0,
            previousName:"justin biber.mp4",
            dateModified:"2019-06-21T06:58:32+00:00",
            dateCreated:"2019-06-24T04:26:49.2690476+00:00",
            hasChild:false,
            isFile:true,
            type:".mp4",
            id:null,
            filterPath:"//Videos//"
        }
    ],
    error:null,
    details:null
}
```

### Upload

The following table represents the request parameters of *Upload* operations.

|Parameter|Type|Default|Explanation|
|----|----|----|----|
|action|String|Save|Name of the file operation.|
|path|String|-|Relative path to the location where the file has to be uploaded.|
|uploadFiles|`IList<IFormFile>`|-|File that are uploaded.|

*Example:*

```ts
uploadFiles: (binary),
path: /,
action: Save,
data: {
    path:null,
    action:null,
    newName:null,
    names:null,
    name:"Downloads",
    size:0,
    previousName:null,
    dateModified:"2019-07-22T11:23:46.7153977 00:00",
    dateCreated:"2019-07-22T11:26:13.9047229 00:00",
    hasChild:false,
    isFile:false,
    type:"",
    id:null,
    filterPath:"//",
    targetPath:null,
    renameFiles:null,
    uploadFiles:null,
    caseSensitive:false,
    searchString:null,
    showHiddenItems:false,
    _fm_iconClass:null,
    _fm_id:"fe_tree_1",
    _fm_pId:null,
    _fm_selected:false,
    _fm_icon:null,
    data:null,
    targetData:null,
    permission:null
}
```

The upload response is an empty string.

### Download

The following table represents the request parameters of *download* operations.

|Parameter|Type|Default|Explanation|
|----|----|----|----|
|action|String|download|Name of the file operation|
|path|String|-|Relative path to location where the files to download are present.|
|names|String[]|-|Name list of the items to be downloaded.|
|data|FileManagerDirectoryContent|-|Details of the download item.|

*Example:*

```ts
{
    action:"download",
    path:"/",
    names:["1.png"],
    data:[
        {
            path:null,
            action:null,
            newName:null,
            names:null,
            name:"1.png",
            size:49792,
            previousName:null,
            dateModified:"2019-07-22T12:15:45.0972405+00:00",
            dateCreated:"2019-07-22T12:15:45.0816042+00:00",
            hasChild:false,
            isFile:true,
            type:".png",
            id:null,
            filterPath:"//",
            targetPath:null,
            renameFiles:null,
            uploadFiles:null,
            caseSensitive:false,
            searchString:null,
            showHiddenItems:false,
            _fm_iconClass:"e-fe-image",
            _fm_id:null,
            _fm_pId:null,
            _fm_selected:false,
            _fm_icon:null,
            data:null,
            targetData:null,
            permission:null,
            _fm_created:"2019-07-22T12:15:45.081Z",
            _fm_modified:"2019-07-22T12:15:45.097Z",
            _fm_imageUrl:"https://physical-service.syncfusion.com/api/FileManager/GetImage?path=/1.png",
            _fm_imageAttr:
            {
                alt:"1.png"
            },
            _fm_htmlAttr:
            {
                class:"e-large-icon"
            }
        }
    ]
}
```

Downloads the requested items from the file server in response.

### GetImage

The following table represents the request parameters of *GetImage* operations.

|Parameter|Type|Default|Explanation|
|----|----|----|----|
|path|String|-|Relative path to the image file|

Return the image as a file stream in response.

The request from the File Manager can be customized using the [`beforeSend`](../api/file-manager#beforesend) event. Additional information can be passed to the File Manager in file operation response and can be used in customization.

## File request and response contents

The following table represents the contents of *data, cwd, and files* in the File Manager request and response.

|Parameter|Type|Default|Explanation|
|----|----|----|----|
|name|String|-|File name|
|dateCreated|String|-|Date in which file was created (UTC Date string).|
|dateModified|String|-|Date in which file was last modified (UTC Date string).|
|filterPath|String|-|Relative path to the file or folder.|
|hasChild|Boolean|-|Defines this folder has any child folder or not.|
|isFile|Boolean|-|Say whether the item is file or folder.|
|size|Number|-|File size|
|type|String|-|File extension|

The following table represents the contents of *error* in the File Manager request and response.

|Parameter|Type|Default|Explanation|
|----|----|----|----|
|code|String|-|Error code|
|message|String|-|Error message|
|fileExists|String[]|-|List of duplicate file names|

The following table represents the contents of *details* in the File Manager request and response.

|Parameter|Type|Default|Explanation|
|----|----|----|----|
|name|String|-|File name|
|dateCreated|String|-|Date in which file was created (UTC Date string).|
|dateModified|String|-|Date in which file was last modified (UTC Date string).|
|filterPath|String|-|Relative path to the file or folder.|
|hasChild|Boolean|-|Defines this folder has any child folder or not.|
|isFile|Boolean|-|Say whether the item is file or folder.|
|size|Number|-|File size|
|type|String|-|File extension|
|multipleFiles|Boolean|-|Say whether the details are about single file or multiple files.|

## Action Buttons

The File Manager has several menu buttons to access the file operations. The list of menu buttons available in the File Manager is given in the following table.

|Menu Button|Behaviour|
|----|----|
|SortBy| Opens the sub menu to choose the sorting order and sorting parameter.|
|View| Opens the sub menu to choose the View.|
|Open| Navigates to the selected folder. Opens the preview for image files.|
|Refresh| Initiates the read operation for the current directory and displays the updated directory content.|
|NewFolder| Opens the new folder dialog box to receive the name for the new folder.|
|Rename| Opens the rename dialog box to receive the new name for the selected item.|
|Delete| Opens the delete dialog box to confirm the removal of the selected items from the file system.|
|Upload| Opens the upload box to select the items to upload to the file system.|
|Download| Downloads the selected item(s).|
|Details| Get details about the selected items and display them in details dialog box.|
|SelectAll| Selects all the files and folders displayed in the view section.|

The action menu buttons are present in the toolbar and context menu. The toolbar contains the buttons based on the selected items count, while the context menu will appear with a list based on the target.

### Toolbar

The toolbar can be divided into two sections as right and left. Whenever the toolbar buttons exceed the size, the buttons present in the left section of the toolbar will be moved to the toolbar popup.

The following table provides the toolbar buttons that appear based on the selection.

| Selected Items Count | Left Section | Right Section |
|----------------------|--------------|---------------|
| `0` (none of the item) | • SortBy<br>• Refresh<br>• NewFolder<br>• Upload | • View<br>• Details |
| `1` (single item selected) | • Delete<br>• Download<br>• Rename | • Selected items count<br>• View<br>• Details |
| `>1` (multiple selection) | • Delete<br>• Download | • Selected items count<br>• View<br>• Details |

### Context menu

The following table provides the default context menu item and the corresponding target areas.

| Menu Name | Menu Items | Target |
|-----------|------------|--------|
| Layout | • SortBy<br>• View<br>• Refresh<br>• NewFolder<br>• Upload<br>• Details<br>• Select all | • Empty space in the view section (details view and large icon view area).<br>• Empty folder content. |
| Folders | • Open<br>• Delete<br>• Rename<br>• Downloads<br>• Details | • Folders in treeview, details view, and large icon view. |
| Files | • Open<br>• Delete<br>• Rename<br>• Downloads<br>• Details | • Files in details view and large icon view. |

## Ajax Settings Configuration

The File Manager's [`ajaxSettings`](../api/file-manager#ajaxsettings) property allows you to configure the URLs for various file operations including file operations, upload, download, and image preview.

### File download support

To perform the download operation, initialize the [`downloadUrl`](../api/file-manager/ajaxSettingsModel#downloadurl) property in [`ajaxSettings`](../api/file-manager#ajaxsettings) of the File Manager component.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { FileManager } from '@syncfusion/ej2-filemanager';

let hostUrl: string = 'https://physical-service.syncfusion.com/';
// initialize File Manager Control
let filemanagerInstance: FileManager = new FileManager({
    ajaxSettings: {
        url: hostUrl + 'api/FileManager/FileOperations',
        downloadUrl: hostUrl + 'api/FileManager/Download'
    }
});

// render initialized File Manager
filemanagerInstance.appendTo('#filemanager');

{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "javascript" %}

```html
<script>
        var hostUrl = 'https://physical-service.syncfusion.com/';
        // initialize File Manager Control
        var filemanagerInstance = new ej.filemanager.FileManager({
            ajaxSettings: {
                url: hostUrl + 'api/FileManager/FileOperations',
                downloadUrl: hostUrl + 'api/FileManager/Download'
            }
        });
        // render initialized File Manager
        filemanagerInstance.appendTo('#filemanager');
</script>
```

{% endif %}

### File upload support

To perform the upload operation, initialize the [`uploadUrl`](../api/file-manager/ajaxSettingsModel#uploadurl) property in [`ajaxSettings`](../api/file-manager#ajaxsettings) of the File Manager component.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { FileManager } from '@syncfusion/ej2-filemanager';

let hostUrl: string = 'https://physical-service.syncfusion.com/';
// initialize File Manager Control
let filemanagerInstance: FileManager = new FileManager({
    ajaxSettings: {
        url: hostUrl + 'api/FileManager/FileOperations',
        uploadUrl: hostUrl + 'api/FileManager/Upload'
    }
});

// render initialized File Manager
filemanagerInstance.appendTo('#filemanager');

{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "javascript" %}

```html
<script>
        var hostUrl = 'https://physical-service.syncfusion.com/';
        // initialize File Manager Control
        var filemanagerInstance = new ej.filemanager.FileManager({
            ajaxSettings: {
                url: hostUrl + 'api/FileManager/FileOperations',
                uploadUrl: hostUrl + 'api/FileManager/Upload'
            }
        });
        // render initialized File Manager
        filemanagerInstance.appendTo('#filemanager');
</script>
```

{% endif %}

### Image preview support

To enable image preview in the File Manager component, initialize the [`getImageUrl`](../api/file-manager/ajaxSettingsModel#getimageurl) property in [`ajaxSettings`](../api/file-manager#ajaxsettings).

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/file-manager-sdk/javascript/getting-started-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager-sdk/javascript/getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/file-manager-sdk/javascript/getting-started-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager-sdk/javascript/es5-getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/file-manager-sdk/javascript/es5-getting-started-cs2" %}

{% endif %}
