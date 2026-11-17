---
layout: post
title: File System Provider in Vue File Manager | Syncfusion
description: Learn how to connect the Vue File Manager to physical, Azure, Amazon S3, Google Drive, Firebase, and other file system providers.
control: File Manager
platform: file-manager-sdk
documentation: ug
domainurl: https://help.syncfusion.com/file-manager-sdk
appliesto: UI Component Suite, File Manager SDK
---

# File System Provider in Vue File Manager

The file system provider enables the [Vue File Manager](https://www.syncfusion.com/vue-components/vue-file-manager) component to manage files and folders in physical or cloud-based storage. It exposes server-side methods for common file actions such as creating folders, copying and moving items, deleting, uploading, and downloading.

The following file providers are added in [Vue File Manager](https://www.syncfusion.com/vue-components/vue-file-manager) component.

* [Physical file system provider](#physical-file-system-provider)
* [Azure cloud file system Provider](#azure-cloud-file-system-provider)
* [Amazon S3 cloud file provider](#amazon-s3-cloud-file-provider)
* [SharePoint file provider](#SharePoint-file-provider)
* [File Transfer Protocol file system provider](#file-transfer-protocol-file-system-provider)
* [SQL database file system provider](#sql-database-file-system-provider)
* [Node file system provider](#node-file-system-provider)
* [Google Drive file system provider](#google-drive-file-system-provider)
* [Firebase Realtime Database file system provider](#firebase-file-system-provider)
* [IBM Cloud Object Storage provider](#ibm-cloud-object-storage-file-provider)
* [OneDrive file system provider](#onedrive-file-system-provider)

## Physical file system provider

The Physical file system provider allows the users to access and manage the physical file system. To get started, we need to clone the [ej2-aspcore-file-provider](https://github.com/SyncfusionExamples/ej2-aspcore-file-provider) using the following command.

```ts

git clone https://github.com/SyncfusionExamples/ej2-aspcore-file-provider  ej2-aspcore-file-provider

cd ej2-aspcore-file-provider

```

After cloning,  open the project in Visual Studio and restore the NuGet packages. Now, we need to set the root directory of the physical file system in the FileManager controller.

After setting the root directory of the file system,  build and run the project. Now, the project will be hosted in `http://localhost:{port}` and  mapping the **ajaxSettings** property of the [Vue File Manager](https://www.syncfusion.com/vue-components/vue-file-manager) component to the appropriate controller methods allows to manage the files in the physical file system.

```

<template>
    <div id="app">
        <ejs-filemanager id="file-manager" :ajaxSettings="ajaxSettings">
        </ejs-filemanager>
    </div>
</template>
<script setup>
import { provide } from "vue";

import { FileManagerComponent as EjsFilemanager, DetailsView, NavigationPane, Toolbar } from "@syncfusion/ej2-vue-filemanager";

const ajaxSettings = 
{   
    // Replace the hosted port number in the place of "{port}"
    url: "http://localhost:{port}/api/FileManager/FileOperations",
    getImageUrl: "http://localhost:{port}/api/FileManager/GetImage",
    uploadUrl: "http://localhost:{port}/api/FileManager/Upload",
    downloadUrl: "http://localhost:{port}/api/FileManager/Download"
};

provide('filemanager',  [DetailsView, NavigationPane, Toolbar]);

</script>
<style>
    @import "../node_modules/@syncfusion/ej2-material3-theme/styles/file-manager/index.css";
</style>

```

>Note: To learn more about file actions that can be performed with Physical file system provider, refer to this [link](https://github.com/SyncfusionExamples/ej2-aspcore-file-provider#key-features)

## Azure cloud file system Provider

The Azure file system provider allows the users to access and manage the blobs in the Azure blob storage. To get started, we need to clone the [azure-aspcore-file-provider](https://github.com/SyncfusionExamples/azure-aspcore-file-provider) using the following command

```ts

git clone https://github.com/SyncfusionExamples/azure-aspcore-file-provider  azure-aspcore-file-provider

```

After cloning, open the project in Visual Studio and restore the NuGet packages. Now, we need to register the Azure storage by passing details like name, password, and blob name to the Register Azure method in the FileManager controller.

```ts

void RegisterAzure(string accountName, string accountKey, string blobName)

 ```

Then, set the blob container and the root blob directory by passing the corresponding URLs as parameters in the setBlobContainer method as follows.

```ts

void setBlobContainer( Blob-contatiner-url, Root-blob-directory-url)

```

> **Note:** Also, **blobPath** is a container path in Azure Blob Storage, and **filePath** is the file location path. For example, create a **files** container in the mentioned Azure blob storage. Inside that container, create a new folder, **Files** which includes all files and folders that need to be viewed in FileManager. Check out the below path for an example.

```ts

  public AzureProviderController(IHostingEnvironment hostingEnvironment)
  {
      this.operation = new AzureFileProvider();
      blobPath = "https://azure_service_account.blob.core.windows.net/files/";
      filePath = "https://azure_service_account.blob.core.windows.net/files/Files";

```

After setting the blob container references, just build and run the project. Now, the project will be hosted in `http://localhost:{port}` and just mapping the **ajaxSettings** property of the [Vue File Manager](https://www.syncfusion.com/vue-components/vue-file-manager) component to the appropriate controller methods allows to manage the Azure blob storage.

```

<template>
    <div id="app">
        <ejs-filemanager id="file-manager" :ajaxSettings="ajaxSettings">
        </ejs-filemanager>
    </div>
</template>
<script setup>
import { provide } from "vue";

import { FileManagerComponent as EjsFilemanager, DetailsView, NavigationPane, Toolbar } from "@syncfusion/ej2-vue-filemanager";

const ajaxSettings = 
{
    // Replace the hosted port number in the place of "{port}"
    url: "http://localhost:{port}/api/AzureProvider/AzureFileOperations",
    getImageUrl: "http://localhost:{port}/api/AzureProvider/AzureGetImage",
    uploadUrl: "http://localhost:{port}/api/AzureProvider/AzureUpload",
    downloadUrl: "http://localhost:{port}/api/AzureProvider/AzureDownload"
};
provide('filemanager',  [DetailsView, NavigationPane, Toolbar]);

</script>
<style>
    @import "../node_modules/@syncfusion/ej2-material3-theme/styles/file-manager/index.css";
</style>

```

> **Note:** To learn more about file actions that can be performed with Azure cloud file system Provider, refer to this [link](https://github.com/SyncfusionExamples/azure-aspcore-file-provider#key-features)

## Amazon S3 cloud file provider

### Introduction to Amazon S3

Amazon Simple Storage Service (Amazon S3) is AWS's object storage service for storing and retrieving any amount of data. S3 is durable, scalable, and pay-as-you-go. In this guide the [Vue File Manager](https://www.syncfusion.com/vue-components/vue-file-manager) connects to S3 through an ASP.NET Core back end so you can securely browse and perform file operations in the Vue File Manager component.

### Prerequisites

Before you integrate Amazon S3 with the Vue File Manager, ensure you have:
 - An AWS Account
 - A configured S3 Bucket
 - AWS credentials: `awsAccessKeyId`, `awsSecretAccessKeyId`, `bucketRegion`, `awsRegion`, `rootPath`.

### Setting Up Amazon S3

 - Open the [AWS Management Console guide](https://docs.aws.amazon.com/awsconsolehelpdocs/) and log into AWS Console -> Navigate to S3.
 - Proceed by clicking `Create Bucket`. A bucket is a container for objects. An object is a file and any metadata that describes that file. The Amazon S3 provider requires a top-level root folder in your bucket to place all required files and subfolders inside this root. Click this [link](https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-buckets-s3.html) for more details.
 - Provide a DNS-compliant bucket name. Click this [link](https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html) for more details.
 - Choose the AWS region. Click this [link](https://docs.aws.amazon.com/general/latest/gr/s3.html) for more details.

### Back end Setup

Clone the [Amazon S3 File Provider](https://github.com/SyncfusionExamples/amazon-s3-aspcore-file-provider) using the following command,

```bash
git clone https://github.com/SyncfusionExamples/amazon-s3-aspcore-file-provider.git ej2-amazon-s3-aspcore-file-provider
```

N> This Amazon S3 provider for the Vue File Manager is intended for demonstration and evaluation only. Before using it consult your security team and complete a security review.

To initialize a local service with the above-mentioned file operations, create a folder named `Controllers` in the server project. Then, create a `.cs` file in the `Controllers` folder and add the required file operation code from [AmazonS3ProviderController.cs](https://github.com/SyncfusionExamples/amazon-s3-aspcore-file-provider/blob/master/Controllers/AmazonS3ProviderController.cs). You can also find the method-level details for this provider in the same repository.

### Registering S3 Credentials in the Provider

After cloning, open the project in Visual Studio and restore the NuGet packages. Then, register the Amazon S3 client details (for example, **bucketName**, **awsAccessKeyId**, **awsSecretAccessKeyId**, **awsRegion** and **rootPath**) in the `RegisterAmazonS3` method in the `AmazonS3ProviderController.cs` file.

```csharp
this.operation.RegisterAmazonS3("<---bucketName--->", "<---awsAccessKeyId--->", "<---awsSecretAccessKey--->", "<---region--->", "<---rootPath--->");
```

The `rootPath` parameter specifies the folder path within the Amazon S3 bucket that is used as the File Manager root directory. A valid bucket-relative path must be provided during registration. All File Manager operations are restricted to the configured path and its contents.

N> Specify the path relative to the bucket root. The configured folder must already exist in the bucket and contain at least one object or subfolder.

### Configuring File Manager UI

After registering the Amazon client account details, build and run the project. The application will be hosted at `http://localhost:{port}`. Map the **ajaxSettings** property of the File Manager component to the appropriate controller methods to manage objects stored in the Amazon ***S3*** (*Simple Storage Service*) bucket.

```

<template>
    <div id="app">
        <ejs-filemanager id="file-manager" :ajaxSettings="ajaxSettings">
        </ejs-filemanager>
    </div>
</template>
<script setup>
import { provide } from "vue";

import { FileManagerComponent as EjsFilemanager, DetailsView, NavigationPane, Toolbar } from "@syncfusion/ej2-vue-filemanager";

const ajaxSettings = 
{
    // Replace the hosted port number in the place of "{port}"
    url: "http://localhost:{port}/api/AmazonS3Provider/AmazonS3FileOperations",
    getImageUrl: "http://localhost:{port}/api/AmazonS3Provider/AmazonS3GetImage",
    uploadUrl: "http://localhost:{port}/api/AmazonS3Provider/AmazonS3Upload",
    downloadUrl: "http://localhost:{port}/api/AmazonS3Provider/AmazonS3Download"
};
provide('filemanager',  [DetailsView, NavigationPane, Toolbar]);

</script>
<style>
    @import "../node_modules/@syncfusion/ej2-material3-theme/styles/file-manager/index.css";
</style>

```

To perform file operations (Read, Create, Rename, Delete, Get file details, Search, Copy, Move, Upload, Download, GetImage) in the Vue File Manager component using the Amazon S3 cloud file provider, initialize the Amazon S3 cloud file provider in the controller.

### Supported File Operations

We have enabled below list of features that can be performed using Amazon File Service provider,

|Operation | Function |
|---|---|
| Upload | [Directory upload](https://ej2.syncfusion.com/vue/documentation/api/file-manager/uploadsettings#directoryupload)<br/>[Sequential upload](https://ej2.syncfusion.com/vue/documentation/api/file-manager/uploadsettings#sequentialupload)<br/>[Chunk Size](https://ej2.syncfusion.com/vue/documentation/api/file-manager/uploadsettings#chunksize)<br/>[Auto upload](https://ej2.syncfusion.com/vue/documentation/api/file-manager/uploadsettings#autoupload) |
| Access Control | [Setting rules to files/folders](https://github.com/SyncfusionExamples/amazon-s3-aspcore-file-provider/blob/master/Models/AmazonS3FileProvider.cs#L67)<br/>[Supported rules](https://github.com/SyncfusionExamples/amazon-s3-aspcore-file-provider/blob/master/Models/Base/AccessDetails.cs#L65) |

Additionally, you can check out all the necessary file operation method details for this provider in the same GitHub repository. To access the live Amazon S3 File Provider demo refer to this [link](https://ej2.syncfusion.com/vue/demos/#/fluent2/file-manager/amazon-s3-provider)

N> To learn more about the file actions that can be performed with Amazon S3 cloud file provider, refer to this [link](https://github.com/SyncfusionExamples/amazon-s3-aspcore-file-provider#key-features).

## SharePoint file provider

The SharePoint file provider allows users to access and manage files within Microsoft SharePoint. To get started, clone the [SharePoint-aspcore-file-provider](https://github.com/SyncfusionExamples/sharepoint-aspcore-file-provider) using the following command.

```typescript

git clone https://github.com/SyncfusionExamples/sharepoint-aspcore-file-provider  sharepoint-aspcore-file-provider

cd sharepoint-aspcore-file-provider

```

**Prerequisites**

To set up the SharePoint service provider, follow these steps:

1. **Create an App Registration in Azure Active Directory (AAD):** 
   - Navigate to the Azure portal and create a new app registration under Azure Active Directory.
   - Note down the **Tenant ID**, **Client ID**, and **Client Secret** from the app registration.

2. **Use Microsoft Graph Instance:** 
   - With the obtained Tenant ID, Client ID, and Client Secret, you can create a Microsoft Graph instance.
   - This instance will be used to interact with the SharePoint document library.

3. **Use Details from `appsettings.json`:**
   - The `SharePointController` is already configured to use the credentials provided in the `appsettings.json` file.
   - You only need to provide your `Tenant ID`, `Client ID`, `Client Secret`, `User Site Name`, and `User Drive ID` in the `appsettings.json` file, and the application will automatically initialize the SharePoint service.

**Example `appsettings.json` Configuration**

```
{
  "Logging": {
    "LogLevel": {
      "Default": "Warning"
    }
  },
  "SharePointSettings": {
    "TenantId": "<--Tenant Id-->",
    "ClientId": "<--Client Id-->",
    "ClientSecret": "<--Client Secret-->",
    "UserSiteName": "<--User Site Name-->",
    "UserDriveId": "<--User Drive ID-->"
  },
  "AllowedHosts": "*"
}

```

Replace "<--User Site Name-->", "<--User Drive ID-->", "tenantId", "clientId", and "clientSecret" with your actual values.

After configuring the SharePoint file provider, build and run the project. Now, the project will be hosted in `http://localhost:{port}` and just mapping the **ajaxSettings** property of the [Vue File Manager](https://www.syncfusion.com/vue-components/vue-file-manager) component to the appropriate controller methods allows to manage the files in the Microsoft SharePoint.

```
</template>
<script setup>
import { provide } from "vue";

import { FileManagerComponent as EjsFilemanager, DetailsView, NavigationPane, Toolbar } from "@syncfusion/ej2-vue-filemanager";

// Initializing File Manager file transfer protocol file system service.
const ajaxSettings = 
{
    // Replace the hosted port number in the place of "{port}"
    url: "http://localhost:{port}/api/SharePointProvider/SharePointFileOperations",
    getImageUrl: "http://localhost:{port}/api/SharePointProvider/SharePointGetImage",
    uploadUrl: "http://localhost:{port}/api/SharePointProvider/SharePointUpload",
    downloadUrl: "http://localhost:{port}/api/SharePointProvider/SharePointDownload"
};
provide('filemanager',  [DetailsView, NavigationPane, Toolbar]);

</script>
<style>
    @import "../node_modules/@syncfusion/ej2-material3-theme/styles/file-manager/index.css";
</style>

```

> **Note:** To learn more about the file actions that can be performed with SharePoint file provider, refer to this [link](https://github.com/SyncfusionExamples/sharepoint-aspcore-file-provider#key-features)

## File Transfer Protocol file system provider

In ASP.NET Core, File Transfer Protocol file system provider allows the users to access to the hosted file system as collection of objects stored in the file storage using File Transfer Protocol. To get started, clone the [ftp-aspcore-file-provider](https://github.com/SyncfusionExamples/ftp-aspcore-file-provider) using the following command

```ts

git clone https://github.com/SyncfusionExamples/ftp-aspcore-file-provider.git  ftp-aspcore-file-provider.git

```

After cloning, open the project in Visual Studio and restore the NuGet packages. Now, register File Transfer Protocol details like *hostName*, *userName* and *password* in **SetFTPConnection** method in the FileManager controller to perform the file operations.

```ts

 void SetFTPConnection(string hostName, string userName, string password)

```

After registering the File Transfer Protocol details, just build and run the project. Now, the project will be hosted in `http://localhost:{port}` and  mapping the **ajaxSettings** property of the [Vue File Manager](https://www.syncfusion.com/vue-components/vue-file-manager) component to the appropriate controller methods allows you to manage the FTP’s objects storage.

```

<template>
    <div id="app">
        <ejs-filemanager id="file-manager" :ajaxSettings="ajaxSettings">
        </ejs-filemanager>
    </div>
</template>
<script setup>
import { provide } from "vue";

import { FileManagerComponent as EjsFilemanager, DetailsView, NavigationPane, Toolbar } from "@syncfusion/ej2-vue-filemanager";

// Initializing File Manager file transfer protocol file system service.
const ajaxSettings = 
{
    // Replace the hosted port number in the place of "{port}"
    url: "http://localhost:{port}/api/FTPProvider/FTPFileOperations",
    getImageUrl: "http://localhost:{port}/api/FTPProvider/FTPGetImage",
    uploadUrl: "http://localhost:{port}/api/FTPProvider/FTPUpload",
    downloadUrl: "http://localhost:{port}/api/FTPProvider/FTPDownload"
};
provide('filemanager',  [DetailsView, NavigationPane, Toolbar]);

</script>
<style>
    @import "../node_modules/@syncfusion/ej2-material3-theme/styles/file-manager/index.css";
</style>

```

> **Note:** To learn more about the file actions that can be performed with File Transfer Protocol file system provider, refer to this [link](https://github.com/SyncfusionExamples/ftp-aspcore-file-provider#key-features)

## SQL database file system provider

In ASP.NET Core, SQL database file system provider allows the users to manage the file system being maintained in a SQL database table. Unlike the other file system providers, the SQL database file system provider works on ID basis. Here, each file and folder have a unique ID based on which all the file operations will be performed. To get started, we need to clone the [sql-server-database-aspcore-file-provider](https://github.com/SyncfusionExamples/sql-server-database-aspcore-file-provider) using the following command.

```ts

<add name="FileExplorerConnection" connectionString="Data Source=(LocalDB)\v11.0;AttachDbFilename=|DataDirectory|\FileManager.mdf;Integrated Security=True;Trusted_Connection=true" />

```

After cloning, open the project in Visual Studio and restore the NuGet packages. To establish the SQL server connection with the database file (for eg: FileManager.mdf), we need to specify the connection string in the web config file as follows.

```ts

<add name="FileExplorerConnection" connectionString="Data Source=(LocalDB)\v11.0;AttachDbFilename=|DataDirectory|\FileManager.mdf;Integrated Security=True;Trusted_Connection=true" />

```

Then, make an entry for the connection string in `appsettings.json` file as follows.

```ts

"ConnectionStrings": {
    "FileManagerConnection": "Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=|DataDirectory|\\App_Data\\FileManager.mdf;Integrated Security=True;Connect Timeout=30"
  }

```

Now, to configure the database connection, we need to set the connection name, table name and root folder ID value by passing these values to the SetSQLConnection method.

```ts

void SetSQLConnection(string name, string tableName, string tableID)

```

> Refer to this [FileManager.mdf](https://github.com/SyncfusionExamples/sql-server-database-aspcore-file-provider/blob/master/App_Data/FileManager.mdf), to learn  about the pre-defined file system SQL database for the EJ2 File Manager.

After configuring the connection, build and run the project. Now, the project will be hosted in `http://localhost:{port}` and  mapping the ajaxSettings property of the [Vue File Manager](https://www.syncfusion.com/vue-components/vue-file-manager) component to the appropriate controller methods allows to manage the files in the SQL database table.

```

<template>
    <div id="app">
        <ejs-filemanager id="file-manager" :ajaxSettings="ajaxSettings">
        </ejs-filemanager>
    </div>
</template>
<script setup>
import { provide } from "vue";

import { FileManagerComponent as EjsFilemanager, DetailsView, NavigationPane, Toolbar } from "@syncfusion/ej2-vue-filemanager";

// Initializing File Manager SQL database file system service.

const ajaxSettings = 
{
    // Replace the hosted port number in the place of "{port}"
    url: "http://localhost:{port}/api/SQLProvider/SQLFileOperations",
    getImageUrl: "http://localhost:{port}/api/SQLProvider/SQLGetImage",
    uploadUrl: "http://localhost:{port}/api/SQLProvider/SQLUpload",
    downloadUrl: "http://localhost:{port}/api/SQLProvider/SQLDownload"
};

provide('filemanager',  [DetailsView, NavigationPane, Toolbar]);

</script>
<style>
    @import "../node_modules/@syncfusion/ej2-material3-theme/styles/file-manager/index.css";
</style>

```

> **Note:** To learn more about file actions that can be performed with SQL database file system provider, refer to this [link](https://github.com/SyncfusionExamples/sql-server-database-aspcore-file-provider#key-features)

## Google Drive file system provider

In ASP.NET Core, Google Drive file system provider allows the users to manage the files and folders in a Google Drive account. The Google Drive file system provider works on id basis where each file and folder have a unique ID. To get started, we need to clone the [google-drive-aspcore-file-provider](https://github.com/SyncfusionExamples/google-drive-aspcore-file-provider) using the following command.

```ts

git clone https://github.com/SyncfusionExamples/google-drive-aspcore-file-provider  google-drive-aspcore-file-provider

cd google-drive-aspcore-file-provider

```

Google Drive file system provider use the [Google Drive APIs](https://developers.google.com/drive/api/v3/reference/) to read the file in the file system and uses the [OAuth 2.0](https://developers.google.com/identity/protocols/oauth2) protocol for authentication and authorization. To authenticate from the client end, have to obtain OAuth 2.0 client credentials from the `Google API Console`. To learn more about generating the client credentials from the from Google API Console, refer to this [link](https://developers.google.com/identity/protocols/oauth2/javascript-implicit-flow).

After generating the client secret data, copy the JSON data to the following specified JSON files in the cloned location.

* EJ2GoogleDriveFileProvider > credentials > client_secret.json
* GoogleOAuth2.0Base > credentials > client_secret.json

After updating the credentials, build and run the project. Now, the project will be hosted in `http://localhost:{port}`, and it will ask to log on to the Gmail account  created the client secret credentials. Then, provide permission to access the Google Drive files by clicking the allow access button in the page. Now, mapping the ajaxSettings property of the [Vue File Manager](https://www.syncfusion.com/vue-components/vue-file-manager) component to the appropriate controller methods will allows to manage the files from the Google Drive.

```

<template>
    <div id="app">
        <ejs-filemanager id="file-manager" :ajaxSettings="ajaxSettings">
        </ejs-filemanager>
    </div>
</template>
<script setup>
import { provide } from "vue";

import { FileManagerComponent as EjsFilemanager, DetailsView, NavigationPane, Toolbar } from "@syncfusion/ej2-vue-filemanager";

// Initializing File Manager Google Drive file system service.
const ajaxSettings = 
{
    // Replace the hosted port number in the place of "{port}"
    url: "http://localhost:{port}/api/GoogleDriveProvider/GoogleDriveFileOperations",
    getImageUrl: "http://localhost:{port}/api/GoogleDriveProvider/GoogleDriveGetImage",
    uploadUrl: "http://localhost:{port}/api/GoogleDriveProvider/GoogleDriveUpload",
    downloadUrl: "http://localhost:{port}/api/GoogleDriveProvider/GoogleDriveDownload"
};
provide('filemanager',  [DetailsView, NavigationPane, Toolbar]);

</script>
<style>
    @import "../node_modules/@syncfusion/ej2-material3-theme/styles/file-manager/index.css";
</style>

```

> **Note:** To learn more about file actions that can be performed with Google drive file system provider, refer to this [link](https://github.com/SyncfusionExamples/google-drive-aspcore-file-provider#key-features)

## Node file system provider

In ASP.NET Core, Node file system provider allows the users to manage the files and folders in a physical file system. It provides methods for performing all basic file operations like creating a folder, copy, move, delete, and download files and folders in the file system. We can use of the Node file system provider either by installing the [ej2-filemanager-node-filesystem](https://www.npmjs.com/package/@syncfusion/ej2-filemanager-node-filesystem) package or by cloning the [file system provider](https://github.com/SyncfusionExamples/ej2-filemanager-node-filesystem) from the GitHub.

### Using ej2-filemanager-node-filesystem package

* Install the ej2-filemanager-node-filesystem package by running the below command.

   ```ts
     npm install @syncfusion/ej2-filemanager-node-filesystem
   ```

* After installing the package, navigate to the ej2-filemanager-node-filesystem package folder within the node-modules
* Run the command **npm install** command.

### Cloning the ej2-filemanager-node-filesystem from GitHub

* Clone the ej2-filemanager-node-filesystem using the following command.

  ```ts
    git clone  https://github.com/SyncfusionExamples/ej2-filemanager-node-filesystem.git node-filesystem-provider
  ```

* After cloning, open the root folder and run the command **npm install** command.

After installing the packages, set the root folder directory of the physical file system in the package JSON under scripts sections as follows.

   ```ts
    "start": "node filesystem-server.js -d D:/Projects"
   ```

> **Note:** By default, the root directory will be configured to set `C:/Users` as the root directory.

To set the port in which the project to be hosted and the root directory of the file system. Run the following command.

   ```ts
     set PORT=3000 && node filesystem-server.js -d D:/Projects
   ```

> **Note:** By default, the service will run `8090` port.

Now, mapping the ajaxSettings property of the [Vue File Manager](https://www.syncfusion.com/vue-components/vue-file-manager) component to the appropriate file operation methods in the filesystem-server.js file will allow to manage the physical file system with Node file system provider.

```

<template>
    <div id="app">
        <ejs-filemanager id="file-manager" :ajaxSettings="ajaxSettings">
        </ejs-filemanager>
    </div>
</template>
<script setup>
import { provide } from "vue";

import { FileManagerComponent as EjsFilemanager, DetailsView, NavigationPane, Toolbar } from "@syncfusion/ej2-vue-filemanager";

// Initializing File Manager Node file system service.
const ajaxSettings = 
{
    // Replace the hosted port number in the place of "{port}"
    url: "http://localhost:{port}/",
    getImageUrl: "http://localhost:{port}/GetImage",
    uploadUrl: "http://localhost:{port}/Upload",
    downloadUrl: "http://localhost:{port}/Download"
};
provide('filemanager',  [DetailsView, NavigationPane, Toolbar]);

</script>
<style>
    @import "../node_modules/@syncfusion/ej2-material3-theme/styles/file-manager/index.css";
</style>

```

> **Note:** To learn more about file actions that can be performed with Node file system provider, refer to this [link](https://github.com/SyncfusionExamples/ej2-filemanager-node-filesystem#key-features)

## Firebase Realtime Database file system provider

The [Firebase Realtime Database](https://firebase.google.com/) file system provider in **ASP.NET Core** provides the efficient way to store the File Manager file system in a cloud database as JSON representation.

### Generate Secret access key from service account

Follow the given steps to generate the secret access key:

* To access the Firebase console, please click on this [link](https://console.firebase.google.com/). Once you have accessed the console, you can create a new project by filling in the necessary fields and clicking on the relevant buttons.

![create-project](images/create-project.png)

* Within the Firebase console, navigate to the **Build** tab. Under this tab, select the option for **Realtime Database**. From there, you can create a new database by clicking on the **Create Database** button.

![database-creation](images/database-creation.png)

* To get started, create a root node and add any desired children to it. Please refer to the following code snippet for guidance on the structure of the JSON:

```ts

{
  "Files" : [ {
    "caseSensitive" : false,
    "dateCreated" : "8/22/2019 5:17:55 PM",
    "dateModified" : "8/22/2019 5:17:55 PM",
    "filterId" : "0/",
    "filterPath" : "/",
    "hasChild" : false,
    "id" : "5",
    "isFile" : false,
    "isRoot" : true,
    "name" : "Music",
    "parentId" : "0",
    "selected" : false,
    "showHiddenItems" : false,
    "size" : 0,
    "type" : "folder"
  },
   {
    "caseSensitive" : false,
    "dateCreated" : "8/22/2019 5:18:03 PM",
    "dateModified" : "8/22/2019 5:18:03 PM",
    "filterId" : "0/",
    "filterPath" : "/",
    "hasChild" : false,
    "id" : "6",
    "isFile" : false,
    "isRoot" : true,
    "name" : "videos",
    "parentId" : "0",
    "selected" : false,
    "showHiddenItems" : false,
    "size" : 0,
    "type" : ""
  }]
 }

```

Here, the `Files` denotes the `rootNode` and the subsequent object refers to the children of the root node. `rootNode` will be taken as the root folder of the file system loaded which will be loaded in [Vue File Manager](https://www.syncfusion.com/vue-components/vue-file-manager) component.

* To import a JSON file into the Firebase Realtime Database, navigate to the **Data** tab and click on the action icon shown in the accompanying image. From there, select the **Import JSON** option and upload the JSON file that was created using the code provided above.

![import-json](images/import-json.png)

* To interact with the Firebase Realtime Database through your application, it is necessary to grant read and write permissions by defining appropriate rules in the Firebase project's **Rules tab**, as shown in the following code snippet. Once you have specified the rules, you can publish them by clicking the **Publish** button to enable the necessary authentication.

```ts

{
  /* Visit https://firebase.google.com/docs/database/security to learn more about security rules. */
  "rules": {
    ".read": "auth!=null",
    ".write": "auth!=null"
  }
}

```

> **Note:** By default, rules of a Firebase project will be **false**. To read and write the data, configure the  **Rules** as given in the following code snippet in the *Rules* tab in the Firebase Realtime Database project.

* Navigate to the project settings as instructed and then click on the **Service Account** tab.

![service](images/service.png)

* To obtain the access key JSON file, simply click on the `Generate new private key` button and then confirm by clicking the `Generate key` button in the pop-up window that appears.

![generate_key](images/generate_key.png)

* Next, you will need to clone the [`firebase-realtime-database-aspcore-file-provider`](https://github.com/SyncfusionExamples/firebase-realtime-database-aspcore-file-provider) repository. Once cloned, simply open the project in Visual Studio and restore the NuGet package.

* Once you have generated the secret key, you will need to replace the JSON in the `access_key.json` file in the Firebase Realtime Database provider project with the newly generated key. This will enable authentication and allow you to perform read and write operations.

* In the **Data** tab, locate the project API URL and then paste it into the below mentioned section.

![api_url](images/api_url.png)

Register the Firebase Realtime Database by assigning *Firebase Realtime Database REST API link*, *rootNode*, and *serviceAccountKeyPath* parameters in the `RegisterFirebaseRealtimeDB` method of class `FirebaseRealtimeDBFileProvider` in the controller part of the ASP.NET Core application.

```ts

this.operation.RegisterFirebaseRealtimeDB(string apiUrl, string rootNode, string serviceAccountKeyPath)

```

**Example:**

```ts

this.operation.RegisterFirebaseRealtimeDB("{copy your API URL here}", "Files", hostingEnvironment.ContentRootPath + \\FirebaseRealtimeDBHelper\\access_key.json);

```

In the above code,

* `{copy your API URL here}` denotes Firebase Realtime Database REST API link.

* `Files` denotes newly created root node in Firebase Realtime  Database.

* `hostingEnvironment.ContentRootPath + \\FirebaseRealtimeDBHelper\\access_key.json` denotes service account key path which has authentication key for the Firebase Realtime Database data.

After configuring the Firebase Realtime Database service link, build and run the project. Now, the project will be hosted in `http://localhost:{port}` and just mapping the **ajaxSettings** property of the [Vue File Manager](https://www.syncfusion.com/vue-components/vue-file-manager) component to the appropriate controller methods allows to manage the files in the Firebase Realtime Database.

```

<template>
    <div id="app">
        <ejs-filemanager id="file-manager" :ajaxSettings="ajaxSettings">
        </ejs-filemanager>
    </div>
</template>
<script setup>
import { provide } from "vue";

import { FileManagerComponent as EjsFilemanager, DetailsView, NavigationPane, Toolbar } from "@syncfusion/ej2-vue-filemanager";

// Initializing File Manager Node file system service.
const ajaxSettings = 
{
    // Replace the hosted port number in the place of "{port}"
    url: "http://localhost:{port}/api/FirebaseProvider/FirebaseRealtimeFileOperations",
    getImageUrl: "http://localhost:{port}/api/FirebaseProvider/FirebaseRealtimeGetImage",
    uploadUrl: "http://localhost:{port}/api/FirebaseProvider/FirebaseRealtimeUpload",
    downloadUrl: "http://localhost:{port}/api/FirebaseProvider/FirebaseRealtimeDownload"
};
provide('filemanager',  [DetailsView, NavigationPane, Toolbar]);

</script>
<style>
    @import "../node_modules/@syncfusion/ej2-material3-theme/styles/file-manager/index.css";
</style>

```

>> **Note:** To learn more about the file actions that can be performed with Firebase Realtime Database file system provider, refer to this [link](https://github.com/SyncfusionExamples/firebase-realtime-database-aspcore-file-provider#key-features)

## IBM Cloud Object Storage file provider

The IBM Cloud Object Storage file provider module allows you work with the IBM Cloud Object Storage. It also provides the methods for performing various file actions such as creating a new folder, renaming files, and deleting files. The IBM Cloud Object Storage file provider serves the file provider support for the [Vue File Manager](https://www.syncfusion.com/vue-components/vue-file-manager) component with the IBM Cloud Object Storage. We can make use of IBM Cloud Object Storage file provider by installing the [ej2-filemanager-ibm-cos-node-file-provider](https://www.npmjs.com/package/@syncfusion/ej2-filemanager-ibm-cos-node-file-provider) npm package or by cloning the [file provider](https://github.com/SyncfusionExamples/filemanager-ibm-cos-node-file-provider) from the GitHub.

### Using ej2-filemanager-ibm-cos-node-file-provider npm package

* Install the ej2-filemanager-ibm-cos-node-file-provider npm package by running the below command.

  ```ts
   npm install @syncfusion/ej2-filemanager-ibm-cos-node-file-provider
  ```

* After installing the package, navigate to the ej2-filemanager-ibm-cos-node-file-provider package folder within the node-modules.

* Run the  **npm install** command to install the dependent packages for file provider.

### Cloning the filemanager-ibm-cos-node-file-provider from GitHub

* Clone the filemanager-ibm-cos-node-file-provider using the following command.

   ```ts
    git clone  https://github.com/SyncfusionExamples/filemanager-ibm-cos-node-file-provider.git
  ```

* After cloning, open the root folder and run the command **npm install** command.

To set the port in which the project to be hosted. Run the following command.

  ```ts
   set PORT=3000 && node index.js
  ```

> **Note:** By default, the service will run `8090` port.

Now, just mapping the **ajaxSettings** property of the [Vue File Manager](https://www.syncfusion.com/vue-components/vue-file-manager) component to the appropriate file operation methods in the index.js file will allow to manage the IBM Cloud Object Storage.

```

<template>
    <div id="app">
        <ejs-filemanager id="file-manager" :ajaxSettings="ajaxSettings">
        </ejs-filemanager>
    </div>
</template>
<script setup>
import { provide } from "vue";

import { FileManagerComponent as EjsFilemanager, DetailsView, NavigationPane, Toolbar } from "@syncfusion/ej2-vue-filemanager";

// Initializing File Manager Node file system service.
const ajaxSettings = 
{
    // Replace the hosted port number in the place of "{port}"
    url: "http://localhost:{port}/",
    getImageUrl: "http://localhost:{port}/GetImage",
    uploadUrl: "http://localhost:{port}/Upload",
    downloadUrl: "http://localhost:{port}/Download"
};
provide('filemanager',  [DetailsView, NavigationPane, Toolbar]);

</script>
<style>
    @import "../node_modules/@syncfusion/ej2-material3-theme/styles/file-manager/index.css";
</style>

```

> **Note:** To learn more about the file actions that can be performed with IBM Cloud Object Storage file provider, refer to this [link](https://github.com/SyncfusionExamples/filemanager-ibm-cos-node-file-provider#key-features)

## OneDrive file system provider

### Introduction to OneDrive

Microsoft OneDrive is a cloud storage service from Microsoft that lets you store, share, and sync files across devices. In this guide, the File Manager connects to OneDrive through the Microsoft Graph API using an ASP.NET Core back end, so you can securely browse and perform file operations in the Vue File Manager component. The OneDrive file system provider works on an ID basis where each file and folder has a unique ID.

### Prerequisites

Before you integrate OneDrive with the Vue File Manager component, ensure you have:

 - A Microsoft Azure account with access to the [Azure portal](https://portal.azure.com/).
 - A OneDrive storage account in the same directory (tenant) as the Azure AD application.
 - Azure AD app registration details: `TenantId`, `ClientId`, and `ClientSecret`.
 - Microsoft Graph API permissions: `Files.Read.All` and `Files.ReadWrite.All`.
 - OneDrive details: `DriveId` and `RootFolderId`.

> **Note:** The Azure AD application and the OneDrive storage account must belong to the **same directory (tenant)**. The provider authenticates as the application principal and accesses the drive under that tenant.

### Setting Up OneDrive

**Create an app registration in Azure Active Directory**

 - Navigate to the [Azure portal](https://portal.azure.com/#view/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/~/RegisteredApps) and create a new app registration by selecting the **New registration** button under **Azure Active Directory**.
 - Note down the **Tenant ID** and **Client ID** from the app registration overview page.
 - Create a **Client Secret** under the **Certificates & secrets** section of the app registration and note down the secret value.

   ![OneDrive Azure AD app registration](images/onedrive-app-registration.png)

**Grant Microsoft Graph API permissions**

 - In the app registration, under **Manage**, select **API permissions** and click **Add a permission**.
 - In the **Request API permissions** dialog, choose **Microsoft Graph**.
 - Select **Application permissions**, and then add the following permissions:
     * **Files.Read.All**
     * **Files.ReadWrite.All**
 - Click **Add permissions** and then select **Grant admin consent** to approve the added permissions for the tenant.

   ![OneDrive Graph API permissions](images/onedrive-graph-permissions.png)

### Back end Setup

Clone the [OneDrive File Provider](https://github.com/SyncfusionExamples/onedrive-aspcore-file-provider) using the following command,

```bash

git clone https://github.com/SyncfusionExamples/onedrive-aspcore-file-provider onedrive-aspcore-file-provider

cd onedrive-aspcore-file-provider

```

> **Note:** This OneDrive provider for the Vue File Manager component is intended for demonstration and evaluation only. Before using it, consult your security team and complete a security review.

### Registering OneDrive Credentials in the Provider

After cloning, open the project in Visual Studio and restore the NuGet packages. Then, register the OneDrive account details (**TenantId**, **ClientId**, **ClientSecret**, **DriveId** and **RootFolderId**) in the `appsettings.json` file used by the `OneDriveProviderController`. The controller is already configured to read the credentials provided in the `appsettings.json` file, and the application will automatically initialize the OneDrive service.

```json

{
  "OneDriveSettings": {
    "TenantId": "<--Tenant Id-->",
    "ClientId": "<--Client Id-->",
    "ClientSecret": "<--Client Secret-->",
    "DriveId": "<--Drive Id-->",
    "RootFolderId": "<--Root Folder Id-->"
  }
}

```

Replace "<--Tenant Id-->", "<--Client Id-->", "<--Client Secret-->", "<--Drive Id-->", and "<--Root Folder Id-->" with your actual values. When the `RootFolderId` is set, the File Manager treats the specified OneDrive folder as the root level, and only the files and folders within that folder will be displayed. When it is not set, all the files and folders in the OneDrive drive will be displayed.

**How to get the Drive ID and Folder ID using Graph Explorer**

The `DriveId` and `RootFolderId` values can be retrieved using the [Microsoft Graph Explorer](https://developer.microsoft.com/en-us/graph/graph-explorer).

 - **Get the Drive ID:** Run the following query in the Graph Explorer to get the drive details of the signed-in user. The `id` property in the response is the **Drive ID**.

   ```ts

   GET https://graph.microsoft.com/v1.0/me/drive

   ```

 - **Get the Folder ID:** Run the following query in the Graph Explorer to list the folders in the drive root. The `id` property of the required folder in the response is the **Folder ID** to be used as the `RootFolderId` value.

   ```ts

   GET https://graph.microsoft.com/v1.0/me/drive/root/children

   ```

 - **Get the Folder ID of any nested folder:** To get the item ID of a folder located under a specific parent folder, run the following query by replacing `{parent-item-id}` with the parent folder's item ID.

   ```ts

   GET https://graph.microsoft.com/v1.0/me/drive/items/{parent-item-id}/children

   ```

### Configuring File Manager UI

After registering the OneDrive account details, build and run the project. The application will be hosted at `http://localhost:{port}`. Map the **ajaxSettings** property of the [Vue File Manager](https://www.syncfusion.com/vue-components/vue-file-manager) component to the appropriate controller methods to manage the files and folders in the Microsoft OneDrive.

```

<template>
    <div id="app">
        <ejs-filemanager id="file-manager" :ajaxSettings="ajaxSettings">
        </ejs-filemanager>
    </div>
</template>
<script setup>
import { provide } from "vue";

import { FileManagerComponent as EjsFilemanager, DetailsView, NavigationPane, Toolbar } from "@syncfusion/ej2-vue-filemanager";

// Initializing File Manager OneDrive file system service.
const ajaxSettings =
{
    // Replace the hosted port number in the place of "{port}"
    url: "http://localhost:{port}/api/OneDriveProvider/OneDriveFileOperations",
    getImageUrl: "http://localhost:{port}/api/OneDriveProvider/OneDriveGetImage",
    uploadUrl: "http://localhost:{port}/api/OneDriveProvider/OneDriveUpload",
    downloadUrl: "http://localhost:{port}/api/OneDriveProvider/OneDriveDownload"
};
provide('filemanager',  [DetailsView, NavigationPane, Toolbar]);

</script>
<style>
    @import "../node_modules/@syncfusion/ej2-material3-theme/styles/file-manager/index.css";
</style>

```

N> To learn more about file actions that can be performed with OneDrive file system provider, refer to this [link](https://github.com/SyncfusionExamples/onedrive-aspcore-file-provider#key-features).
