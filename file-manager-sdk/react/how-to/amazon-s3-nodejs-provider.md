---
layout: post
title: Implement a custom file provider in React File Manager | Syncfusion
description: Learn how to implement a custom file provider in the React File Manager using Node.js with Amazon S3 as the data source.
control: File Manager
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to implement a custom file provider in React File Manager

Here we manipulate the Amazon S3 Storage to supply the necessary data for the File Manager. We achieve this by utilizing Node.js to fetch the required data from the Amazon S3 storage.

Node.js acts as the bridge between the File Manager component and Amazon S3 Storage, allowing seamless communication and data retrieval. Through this integration, the File Manager can access and interact with the data stored in Amazon S3 Storage, enabling smooth file management operations.


## Prerequisites

* Valid Amazon S3 account. ( accessKeyId, secretAccessKey, region, bucketName)
* Node version 14 above.

## Introduction to Amazon S3 Storage

Amazon Simple Storage Service (Amazon S3) is an object storage service that offers industry-leading scalability, data availability, security, and performance. It is designed to store and protect any amount of data for a range of use cases, such as websites, mobile applications, backup and restore, archive, enterprise applications,  and big data analytics.

### Key concepts of Amazon S3 Storage

**Buckets:** In Amazon S3, data is organized into buckets. Buckets are the fundamental containers for data storage. Each bucket must have a globally unique name and is created in a specific AWS region. Think of them as top-level directories that help organize the data.

**Objects:** Objects are the fundamental entities stored in Amazon S3. Each object consists of data, a key (name), and metadata. Objects can be any file type, such as images, videos, documents, backups, logs, and more.

**Keys:** Keys are unique identifiers for objects within a bucket. The combination of bucket, key, and version ID uniquely identifies each object.

**Regions:** AWS Regions are geographic locations around the world where AWS hosts its data centers. When you create a bucket, you specify the region where it will be stored.

By understanding the fundamental concepts and use cases of Amazon S3 Storage, you will be well-prepared to proceed with setting up and interacting with it using Node.js in the custom File Provider.


## Create Node.js project

Following the steps to create the Node.js project.

Create a new directory for your project and run the following command to initialize a new Node.js project. This will create a package.json file.

```ts

 npm init

 ```

Install the following packages.
  - express
  - @aws-sdk/client-s3
  - archiver
  - body-parser
  - cors
  - multer

Open your text editor or integrated development environment (IDE) and create the index.js file start writing your Node.js code. This file will serve as the entry point of your application.

```ts

const express = require('express'); 
const app = express(); 
const port = 3000;

app.get('/', (req, res) => { 
  res.send('Hello, NodeJS!'); 
});

app.listen(port, () => { 
  console.log(`Server running on http://localhost:${port}`);
  });

```

To start your Node.js application, simply run the following command in your terminal, pointing to the entry point file:

```ts

node index.js

```

## Initialize S3 client

We need to first initialize the S3Client. Using the AWS credentials and region, we can create the S3Client instance. Format the configuration as shown below.

```ts

const s3Config = {
  region: region,
  bucket: bucketName,
  accessKeyId: accessKeyId,
  secretAccessKey: secretAccessKey
};

```

We can obtain the S3Client using this configuration. The **bucketName** is the bucket from your Amazon S3 account that you need to access.

```ts

const { S3Client } = require('@aws-sdk/client-s3');

const s3Client = new S3Client({
  region: s3Config.region,
  credentials: {
    accessKeyId: s3Config.accessKeyId,
    secretAccessKey: s3Config.secretAccessKey
  }
});

```

## File actions

Need to provide the following action to creating a new folder, copying and moving of files or folders, deleting, uploading, and downloading the files or folders in the file system

### Read

Specify the directory name that needs to be accessed.

```ts

const directoryName = 'Files';

```

Create the **app.post** method with URL **'/'**.

To identify the action by use this condition **req.body.action === 'read'**

The following table represents the request parameters of **read** operations.

|Parameter|Type|Default|Explanation|
|----|----|----|----|
|action|String|read|Name of the file operation.|
|path|String|-|Relative path from which the data has to be read.|
|showHiddenItems|Boolean|-|Defines show or hide the hidden items.|
|data|[FileManagerDirectoryContent](#file-manager-directory-content)|-|Details about the current path (directory).|


*Example for request:*

```ts
{
    action: "read",
    path: "/Videos/",
    showHiddenItems: false,
    data: [
      0:{
        name:"Videos",
        size:0,
        dateModified:"2023-09-14T14:28:27.000Z",
        dateCreated: "2023-09-14T11:16:57.000Z",
        hasChild:true,
        isFile:false,
        type:"Directory",
        filterPath:"/",
        _fm_icon: "e-fe-folder",
        _fm_iconClass: "e-fe-folder",
        _fm_id: "fe_tree_0",
        _fm_modified: "September 14, 2023 19:58"
      }
    ]
}
```

The following table represents the response parameters of **read** operations.

|Parameter|Type|Default|Explanation|
|----|----|----|----|
|cwd|[FileManagerDirectoryContent](#file-manager-directory-content)|-|Path (Current Working Directory) details.|
|files|FileManagerDirectoryContent[]|-|Details of files and folders present in given path or directory.|
|error|[ErrorDetails](../file-operations.md#delete)|-|Error Details|

<a id="file-manager-directory-content"></a>
The following table represents the contents of **FileManagerDirectoryContent** in the File Manager request and response.

|Parameter|Type|Default|Explanation|Is required|
|----|----|----|----|----|
|name|String|-|File name|Yes|
|dateCreated|String|-|Date in which file was created (UTC Date string).|Yes|
|dateModified|String|-|Date in which file was last modified (UTC Date string).|Yes|
|filterPath|String|-|Relative path to the file or folder.|Yes|
|hasChild|Boolean|-|Defines this folder has any child folder or not.|Yes|
|isFile|Boolean|-|Say whether the item is file or folder.|Yes|
|size|Number|-|File size|Yes|
|type|String|-|File extension|Yes|
|permission |[AccessRules](#access-rules)|-|File extension|Optional|
|caseSensitive|Boolean|-|Defines search is case sensitive or not.|Optional|
|action|String|read|Name of the file operation.|Optional|
|names|String[]|-|Name list of the items to be downloaded.|Optional|
|data|FileManagerDirectoryContent|-|Details of the download item.|Optional|
|uploadFiles|`IList<IFormFile>`|-|File that are uploaded.|Optional|
|newName|String|-|New name for the item.|Optional|
|searchString|String|-|String to be searched in the directory.|Optional|
|targetPath|String|-|Relative path where the items to be pasted are located.|Optional|
|targetData|FileManagerDirectoryContent|-|Details of the copied item.|Optional|
|renameFiles|String[]|-|Details of the renamed item.|Optional|


<a id="access-rules"></a>
The following table represents the **AccessRules** properties available for file and folder:

| **Properties** | **Applicable for file** | **Applicable for folder** | **Description** |
| --- | --- | --- | --- |
| Copy | Yes | Yes | Allows access to copy a file or folder. |
| Read | Yes | Yes | Allows access to read a file or folder. |
| Write | Yes | Yes | Allows permission to write a file or folder. |
| WriteContents | No | Yes | Allows permission to write the content of folder. |
| Download | Yes | Yes | Allows permission to download a file or folder. |
| Upload | No | Yes | Allows permission to upload to the folder. |
| Path | Yes | Yes | Specifies the path to apply the rules, which are defined. |
| Role | Yes | Yes | Specifies the role to which the rule is applied. |
| IsFile | Yes | Yes | Specifies whether the rule is specified for folder or file. |

*Example for response:*

```ts
{
    cwd:
    {
        filterPath: "/",
        hasChild: true,
        name: "Videos",
        size: 0,
        type: "File Folder"
    },
    files:[
        0:{
            dateCreated: "2023-09-14T11:16:57.000Z"
            dateModified: "2023-09-14T11:16:57.000Z"
            filterPath: "/Videos/"
            hasChild: false
            isFile: true
            name: "about.txt"
            size: 29
            type: ".txt"
        }
    ],
    error:null
}
```

Use the **ListObjectsV2Command** to list all objects with the specified prefix. Set the **Delimiter** parameter to '/' to simulate folder structure. Iterate through the response's **CommonPrefixes** for folders and **Contents** for files. Use the **HeadObjectCommand** to check if a folder has children and the **LastModified** property to get the date modified.

### Get image

Create the **app.get** method with URL **'/GetImage'**.

The following table represents the request parameters of **GetImage** operations.

|Parameter|Type|Default|Explanation|
|----|----|----|----|
|path|String|-|Relative path to the image file|

The req.query.path contains the exact path of the images. For example: "/Jack.png".

Download the object (image) from Amazon S3 Storage using the **GetObjectCommand** and stores the result in the response variable.

Handle the exception if the image is not available in the given path.

### Download

Create the **app.post** method with URL **'/Download'**.

The following table represents the request parameters of *download* operations.

|Parameter|Type|Default|Explanation|
|----|----|----|----|
|action|String|download|Name of the file operation|
|path|String|-|Relative path to location where the files to download are present.|
|names|String[]|-|Name list of the items to be downloaded.|
|data|[FileManagerDirectoryContent](#file-manager-directory-content)|-|Details of the download item.|

*Example for request:*

```ts

{
  action: 'download',
  path: '/Downloads/Testing/',
  names: [ 'About.txt' ],
  data: [
    0:{
      name: 'About.txt',
      type: '.txt',
      isFile: true,
      size: 29,
      dateModified: '2023-09-14T06:03:52.000Z',
      hasChild: false,
      filterPath: '/Downloads/Testing/',      
      _fm_created: null,
      _fm_modified: 'September 14, 2023 11:33',
      _fm_iconClass: 'e-fe-txt',
      _fm_icon: 'e-fe-txt'
    }
  ]
}

```

The **req.body** must be parsed to get the **downloadObj**. Download the object from Amazon S3 Storage using the **GetObjectCommand**.

Download the object from Amazon S3 Storage using the **GetObjectCommand** and pipe the **response.Body** stream to the response object.

Create the archive file to download the multiple Files, Folders and single folders, then pipe the archive to the response.

### Upload

Create the **app.post** method with URL ‘**/Upload**.

The following table represents the request parameters of *Upload* operations.

|Parameter|Type|Default|Explanation|
|----|----|----|----|
|action|String|Save|Name of the file operation.|
|path|String|-|Relative path to the location where the file has to be uploaded.|
|uploadFiles|`IList<IFormFile>`|-|File that are uploaded.|

*Example for request:*
```ts

{
  path: '/Pictures/',
  action: 'save',
  data: [
    0:{
      name: 'Pictures',
      type: 'File Folder',
      isFile: true,
      size: 0,
      dateModified: '2023-09-14T06:03:52.000Z',
      hasChild: true,
      filterPath: '',      
      _fm_id: 'fe_tree_1',
    }
  ],
  filename: 'bird (2).jpg'
}

```

Multer is a popular middleware used to handle file uploads in Express-based web applications. Create the Multer config to store the upload files in buffer.

```ts

const multerConfig = {
  storage: multer.memoryStorage()
};

```

Need to handle the 3 cases here.
  - Save
  - Keep Both (action name will be **keepboth**)
  - Replace (action name will be **replace**)


Create the **PutObjectCommand** with the **req.body.filename**. If the object does not exist, then upload the data to that object. If the object already exists, then create an error message containing "File Already Exists" and send the response.

### Create a new folder

The following table represents the request parameters of *create* operations.

|Parameter|Type|Default|Explanation|
|----|----|----|----|
|action|String|create|Name of the file operation.|
|path|String|-|Relative path in which the folder has to be created.|
|name|String|-|Name of the folder to be created.|
|data|[FileManagerDirectoryContent](#file-manager-directory-content)|-|Details about the current path (directory).|

*Example for request:*

```ts

   action: "create",
    data: [
        0:{
            filterPath: "/",
            hasChild: true,
            isFile: false,
            name: "files",
            nodeId: "fe_tree",
            size: 0,
            type: ""
        }
    ],
    name: "Hello",
    path: "/test/"

```

Check the existence of the folder using **HeadObjectCommand**, If the folder exists then send the error message containing "Folder already exists". If it does not exist, then create the folder. Create the folder by creating an empty object (zero-byte object) with the folder's path as the key.

The following table represents the response parameters of *create* operations.

|Parameter|Type|Default|Explanation|
|----|----|----|----|
|files|FileManagerDirectoryContent[]|-|Details of the created folder|
|error|[ErrorDetails](../file-operations.md#delete)|-|Error Details|

*Example for response:*

```ts
{
    cwd: null,
    files: [
        0:{
            dateCreated: "2023-09-14T10:52:25.000Z",
            dateModified: "2023-09-14T10:52:25.000Z",
            filterPath: null,
            hasChild: false,
            isFile: false,
            name: "New",
            size: 0,
            type: "Directory"
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
|newName|String|-|New name for the item.|
|data|[FileManagerDirectoryContent](#file-manager-directory-content)|-|Details of the item to be renamed.|

*Example for request:*

```ts
{
    action: "rename",
    data: [
        0:{
            dateCreated: "2023-09-14T10:41:17.000Z",
            filterPath: "/Pictures/Nature/",
            hasChild: false,
            iconClass: "e-fe-image",
            isFile: true,
            name: "seaviews.jpg",
            size: 95866,
            type: ".jpg"
        }
    ],
    newName: "seaview.jpg",
    name: "seaviews.jpg",
    path: "/Pictures/Nature/"
}
```

Renaming can be done by copying the folder or file from the source object to target object using **CopyObjectCommand**. If the file exists at the target location, then send the error message as response.

The following table represents the response parameters of *rename* operations.

|Parameter|Type|Default|Explanation|
|----|----|----|----|
|files|FileManagerDirectoryContent[]|-|Details of the renamed item.|
|error|[ErrorDetails](../file-operations.md#delete)|-|Error Details|

*Example for response:*

```ts
{
    cwd:null,
    files:[
        0:{
            name:"seaview.jpg",
            size:95866,
            dateModified:"2023-09-14T11:16:57.000Z",
            dateCreated:"2023-09-14T10:41:17.000Z",
            hasChild:false,
            isFile:true,
            type:".jpg",
            filterPath:"/Pictures/Nature/"
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
|data|[FileManagerDirectoryContent](#file-manager-directory-content)|-|Details of the item to be deleted.|


*Example for request:*

```ts
{
    action: "delete",
    path: "/",
    names: ["bird.jpg"],
    data: [
       0:{
          dateModified: "2023-09-14T09:12:53.000Z",
          filterPath: "/",
          hasChild: false,
          iconClass: "e-fe-image",
          isFile: true,
          name: "bird.jpg",
          size: 102182,
          type: ".jpg"
        }
    ]
}
```

To delete the file, use the **DeleteObjectCommand** to delete the file. To delete the folder, we need to list all objects inside that folder using **ListObjectsV2Command** and delete all those objects.
Handle the null exception if file or folder is not available.

The following table represents the response parameters of *delete* operations.

|Parameter|Type|Default|Explanation|
|----|----|----|----|
|files|FileManagerDirectoryContent[]|-|Details about the deleted item(s).|
|error|[ErrorDetails](../file-operations.md#delete)|-|Error Details|

*Example for response:*

```ts
{
    cwd: null,
    details: null,
    error: null,
    files: [
        0:{
          dateModified: "2023-09-14T09:12:53.000Z",
          filterPath: "/",
          hasChild: false,
          iconClass: "e-fe-image",
          isFile: true,
          name: "bird.jpg",
          size: 102182,
          type: ".jpg"
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
|data|[FileManagerDirectoryContent](#file-manager-directory-content)|-|Details of the selected item.|

*Example:*

```ts
{
    action: "details",
    path: "/FileContents/",
    names: ["bird.jpg"],
    data: [
      0:{
        dateModified: "2023-09-14T09:12:53.000Z",
        filterPath: "/",
        hasChild: false,
        iconClass: "e-fe-image",
        isFile: true,
        name: "bird.jpg",
        size: 102182,
        type: ".jpg"
      }
    ]
}
```

To get the file and folder details, iterate the **req.body.names** to get the details of files and folders. If the data is file, then get the object properties using the **HeadObjectCommand**. If the data is Folder, then get the object details under that folder using **ListObjectsV2Command**. Get the required properties and send final response. Handled the null exception if the file or folder is not available.

The following table represents the response parameters of *details* operations.

|Parameter|Type|Default|Explanation|
|----|----|----|----|
|details|[FileManagerDirectoryContent](#file-manager-directory-content)|-|Details of the requested item(s).|
|error|[ErrorDetails](../file-operations.md#delete)|-|Error Details|


*Example:*

```ts
{
    cwd:null,
    files:null,
    error:null,
    details:
    {
      created: "2023-09-15T06:04:12.000Z"
      isFile: true
      location: "Files/bird.jpg"
      modified: "2023-09-15T06:04:12.000Z"
      multipleFiles: false
      name: "bird.jpg"
      size: "100.0 KB"
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
|data|[FileManagerDirectoryContent](#file-manager-directory-content)|-|Details of the searched item.|

*Example for request:*

```ts
{
    action: "search",
    path: "/asia/",
    searchString: "*nature*",
    showHiddenItems: false,
    caseSensitive: false,
    data: [
      0:{
        filterPath: "/",
        hasChild: true,
        name: "asia",
        size: 0,
        type: "File Folder",
        _fm_id: "fe_tree_1"
      }
    ]
}
```

Replace the '*' in the **req.body.searchString** and assign the result to new variable. Get all objects under this directory using **ListObjectsV2Command** and check that path contains the search string.

The following table represents the response parameters of *search* operations.

|Parameter|Type|Default|Explanation|
|----|----|----|----|
|cwd|[FileManagerDirectoryContent](#file-manager-directory-content)|-|Path (Current Working Directory) details.|
|files|FileManagerDirectoryContent[]|-|Files and folders in the searched directory that matches the search input.|
|error|[ErrorDetails](../file-operations.md#delete)|-|Error Details|

*Example for response:*

```ts
{
    cwd:
    {
        name:"asia",
        size:0,
        dateModified:"2023-09-14T14:28:27.000Z",
        dateCreated:"2023-09-14T11:16:57.000Z",
        hasChild:true,
        isFile:false,
        type:"File Folder",
        filterPath:"/"
    },
    files:[
       0: {
            dateModified: "2023-09-15T06:22:00.000Z",
            filterPath: "/asia/",
            hasChild: false,
            isFile: true,
            name: "about.txt",
            size: 42,
            type: ".txt"
          }
    ],
    error:null,
    details:null
}
```


### Copy and move

The following table represents the request parameters of *copy* operations.

|Parameter|Type|Default|Explanation|
|----|----|----|----|
|action|String|copy|Name of the file operation.|
|path|String|-|Relative path to the directory where the files should be copied.|
|names|String[] |-|List of files to be copied.|
|targetPath|String|-|Relative path where the items to be pasted are located.|
|data|[FileManagerDirectoryContent](#file-manager-directory-content)|-|Details of the copied item.|
|targetData|[FileManagerDirectoryContent](#file-manager-directory-content)|-|Details of the copied item.|
|renameFiles|String[]|-|Details of the renamed item.|

*Example for request:*

```ts
{
    action: "copy",
    path: "/",
    names: ["bird.jpg"],
    renameFiles: [],
    targetPath: "/asia/",
    targetData: {
      filterPath: "/",
      hasChild: true,
      name: "asia",
      size: 0,
      type: "File Folder",
      _fm_id: "fe_tree_1",
    },
    data: [
      0:{
        dateCreated: "2023-09-15T06:04:12.000Z",
        dateModified: "2023-09-15T06:04:12.000Z",
        filterPath: "/",
        hasChild: false,
        isFile: true,
        name: "bird.jpg",
        size: 102182,
        type: ".jpg",
        _fm_created: "September 15, 2023 11:34",
        _fm_htmlAttr: {class: "e-large-icon", title: "bird.jpg"},
        _fm_iconClass: "e-fe-image",
        _fm_imageAttr: {alt: "bird.jpg"},
        _fm_imageUrl: "http://localhost:3000/GetImage?path=%2Fbird.jpg&time=1694760243307",
        _fm_modified: "September 15, 2023 11:34",
      }
    ]
}
```

Action name will be **move** for move action. 

The following table represents the response parameters of *copy* operations.

|Parameter|Type|Default|Explanation|
|----|----|----|----|
|cwd|[FileManagerDirectoryContent](#file-manager-directory-content)|-|Path (Current Working Directory) details.|
|files|FileManagerDirectoryContent[]|-|Details of copied files or folders|
|error|[ErrorDetails](../file-operations.md#delete)|-|Error Details|

*Example for response:*

```ts
{
    cwd:null,
    files:[
      0:{
          dateCreated: "2023-09-15T06:55:03.000Z"
          dateModified: "2023-09-15T06:55:03.000Z"
          filterPath: "/asia/"
          hasChild: false
          isFile: true
          name: "bird.jpg"
          previousName: null
          size: 102182
          type: ".jpg"
        }
    ],
    error:null,
    details:null
}
```

Need to handle two cases.
  - Directory copy and move.
  - File copy and move.

Create the **isRename** variable to store the is request is rename or not. If the **isRename** is false then check the existence of the folders, and if folder is existing, then send the error message. If **isRename** is true, then don't check the existence of the folder.

To move or copy the folders you need to get all the objects from that folder using **ListObjectsV2Command** and create the new path for each object and copy the data from the old path to the new path using **CopyObjectCommand**. To move or copy the files copy the data from the source object to target object using **CopyObjectCommand**. If the action is move then delete the old object using **DeleteObjectCommand**.

> **Note:** To get the complete project, refer to this [link](https://github.com/SyncfusionExamples/filemanager-amazon-nodejs-file-provider)
