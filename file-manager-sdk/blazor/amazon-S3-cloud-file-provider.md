---
layout: post
title: Amazon S3 Cloud Provider in Blazor File Manager | Syncfusion
description: Learn how to connect the Blazor File Manager to Amazon S3 to browse and manage files stored in an S3 bucket.
control: File Manager
platform: file-manager-sdk
documentation: ug
---

# Amazon S3 Cloud Provider in Blazor File Manager

## Introduction to Amazon S3

Amazon Simple Storage Service (Amazon S3) is AWS's object storage service for storing and retrieving any amount of data. S3 is durable, scalable, and pay-as-you-go. In this guide, the [Blazor File Manager](https://www.syncfusion.com/blazor-components/blazor-file-manager) connects to S3 through an ASP.NET Core backend so you can securely browse and perform file operations in the Blazor File Manager component.

## Prerequisites

Before you integrate Amazon S3 with the Blazor File Manager, ensure you have:
 - An AWS account
 - A configured S3 bucket
 - AWS credentials: `awsAccessKeyId`, `awsSecretAccessKey`, `bucketName`, and `awsRegion` (the region in which the bucket was created)
 - An IAM user or role with permissions to read, write, and delete objects in the target bucket (for example, `s3:ListBucket`, `s3:GetObject`, `s3:PutObject`, `s3:DeleteObject`, and `s3:CopyObject`).

## Setting Up Amazon S3

 - Open the [AWS Management Console](https://console.aws.amazon.com/) and sign in. Navigate to **S3**.
 - Click **Create bucket**. A bucket is a container for objects. An object is a file and any metadata that describes that file. The Amazon S3 provider requires a top-level root folder in your bucket to place all required files and subfolders inside this root. See [Creating a bucket](https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-buckets-s3.html) for more details.
 - Provide a DNS-compliant bucket name. See [Bucket naming rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html) for more details.
 - Choose the AWS region for the bucket. See [AWS service endpoints](https://docs.aws.amazon.com/general/latest/gr/s3.html) for more details.

## Setting Up the S3 File Provider Backend

Clone the [Amazon S3 File Provider](https://github.com/SyncfusionExamples/amazon-s3-aspcore-file-provider) repository. The cloned project is the ASP.NET Core service that hosts the file-provider API consumed by the Blazor app.

```bash
git clone https://github.com/SyncfusionExamples/ej2-amazon-s3-aspcore-file-provider ej2-amazon-s3-aspcore-file-provider
```

> This Amazon S3 provider for the Blazor File Manager is intended for demonstration and evaluation only. Before using it, consult your security team and complete a security review. Do not commit AWS access keys to source control; use `appsettings.json`, environment variables, or AWS Secrets Manager.

To initialize the service, open the cloned project in Visual Studio, restore the NuGet packages, and add a `Controllers` folder to the server project. Then, add a `.cs` file in the `Controllers` folder containing the required file operation code from [AmazonS3ProviderController.cs](https://github.com/SyncfusionExamples/amazon-s3-aspcore-file-provider/blob/master/Controllers/AmazonS3ProviderController.cs). For method-level details on each operation, see the [project README](https://github.com/SyncfusionExamples/amazon-s3-aspcore-file-provider) in the same repository.

## Registering S3 Credentials in the Provider

After cloning, open the project in Visual Studio and restore the NuGet packages. Then, register the Amazon S3 client details in the `RegisterAmazonS3` method inside `AmazonS3ProviderController.cs`. The parameters supplied to `RegisterAmazonS3` are, in order: the **bucket name**, the **access key ID**, the **secret access key**, and the **bucket region**.

```csharp
this.operation.RegisterAmazonS3("<---bucketName--->", "<---awsAccessKeyId--->", "<---awsSecretAccessKey--->", "<---region--->");
```

## Configuring the Blazor File Manager

This provider is intended for Blazor Server applications hosted in a browser.

### Install NuGet Packages

Open the NuGet Package Manager in Visual Studio (Tools → NuGet Package Manager → Manage NuGet Packages for Solution) and install the following packages into the Blazor project:

 - `Syncfusion.Blazor.FileManager`
 - `Syncfusion.Blazor.Themes`

For full setup details (theme registration in `Program.cs`, `~/wwwroot/index.html`, and `_Host.cshtml`/`App.razor`), see [Getting started with the Blazor File Manager](https://blazor.syncfusion.com/documentation/file-manager/getting-started-with-web-app).

### Configure the Component

Add the required namespaces and paste the following code into your `.razor` file. Build and run the S3 File Provider project first; it will be hosted at `http://localhost:{port}`. Then map the [FileManagerAjaxSettings](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.FileManagerAjaxSettings.html) of the Blazor File Manager to the AmazonS3Provider controller endpoints:

 - `Url` → `AmazonS3FileOperations`
 - `UploadUrl` → `AmazonS3Upload`
 - `DownloadUrl` → `AmazonS3Download`
 - `GetImageUrl` → `AmazonS3GetImage`

> Replace `{port}` with the actual port on which the S3 File Provider project is hosted. In production, serve both the Blazor app and the file-provider API over HTTPS; browsers will block mixed-content requests to an `http://` API from an `https://` page.

```cshtml
@*Initializing Blazor File Manager with Amazon service*@

@* Replace the hosted port number in the place of "{port}" *@

<SfFileManager TValue="FileManagerDirectoryContent">
    <FileManagerAjaxSettings Url="http://localhost:{port}/api/AmazonS3Provider/AmazonS3FileOperations"
                             UploadUrl="http://localhost:{port}/api/AmazonS3Provider/AmazonS3Upload"
                             DownloadUrl="http://localhost:{port}/api/AmazonS3Provider/AmazonS3Download"
                             GetImageUrl="http://localhost:{port}/api/AmazonS3Provider/AmazonS3GetImage">
    </FileManagerAjaxSettings>
</SfFileManager>
```

To perform file operations (Read, Create, Rename, Delete, Get file details, Search, Copy, Move, Upload, Download, and GetImage) in the Blazor File Manager component, the Amazon S3 cloud file provider must be initialized in the controller as shown in [Registering S3 Credentials in the Provider](#registering-s3-credentials-in-the-provider).

## Supported File Operations

The following operations are supported by the Amazon S3 Cloud File Provider. Other standard file operations (Read, Create, Rename, Delete, Copy, Move, Download, GetImage) are also supported via the provider's controller endpoints configured in [Configuring the Blazor File Manager](#configuring-the-blazor-file-manager).

|Operation | Function |
|---|---|
| Upload | [Directory upload](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.FileManagerUploadSettings.html#Syncfusion_Blazor_FileManager_FileManagerUploadSettings_DirectoryUpload)<br/>[Sequential upload](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.FileManagerUploadSettings.html#Syncfusion_Blazor_FileManager_FileManagerUploadSettings_SequentialUpload)<br/>[Chunk upload](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.FileManagerUploadSettings.html#Syncfusion_Blazor_FileManager_FileManagerUploadSettings_ChunkSize)<br/>[Auto upload](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.FileManagerUploadSettings.html#Syncfusion_Blazor_FileManager_FileManagerUploadSettings_AutoUpload)<br/>[Drag and drop upload](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.FileManager.FileManagerUploadSettings.html#Syncfusion_Blazor_FileManager_FileManagerUploadSettings_DropArea) |
| Access Control | [Setting rules to files/folders](https://github.com/SyncfusionExamples/amazon-s3-aspcore-file-provider/blob/master/Models/AmazonS3FileProvider.cs#L62)<br/>[Supported rules](https://github.com/SyncfusionExamples/amazon-s3-aspcore-file-provider/blob/master/Models/Base/AccessDetails.cs#L65) |

For method-level details of each file operation, see the [Amazon S3 File Provider repository](https://github.com/SyncfusionExamples/amazon-s3-aspcore-file-provider#key-features). A live demo is available in the [Amazon S3 File Provider demo](https://blazor.syncfusion.com/demos/file-manager/amazon-s3-provider?theme=fluent2).

> To learn more about the file actions that can be performed with the Amazon S3 Cloud File Provider, see the [key features](https://github.com/SyncfusionExamples/amazon-s3-aspcore-file-provider#key-features) section in the provider's GitHub repository.
