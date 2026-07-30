---
layout: post
title: Flat data in TypeScript File Manager component | Syncfusion
description: Learn how to render flat data using the TypeScript File Manager component and how to integrate cloud services (Google Drive) via action events.
platform: file-manager-sdk
control: File Manager
publishingplatform: file-manager-sdk
documentation: ug
domainurl: https://help.syncfusion.com/file-manager-sdk
---

# Rendering flat JSON data in the TypeScript File Manager component

The File Manager uses a flat data object as an array of JavaScript objects for rendering, eliminating the need to define [`ajaxSettings`](../api/file-manager#ajaxsettings) url. To load a folder data as an array of JavaScript objects, use the File Manager control's [`fileSystemData`](../api/file-manager#filesystemdata) property with a type of [`fileData`](../api/file-manager/fileData) interface. This means you no longer need to use a separate service provider, as you can integrate services like Google, Amazon, Azure, and others directly into your JavaScript code using the FileManager's action events. For example, you can integrate Google Drive by following the [Google Drive API Quickstart guide for JavaScript](https://developers.google.com/drive/api/quickstart/js).

**Event Information**

Event Name | Description
 ---  | ---
[`beforeDelete`](../api/file-manager#beforedelete) | This event is triggered before the deletion of a file or folder occurs. It can be utilized to prevent the deletion of specific files or folders. Any actions, such as displaying a spinner for deletion, can be implemented here.
[`delete`](../api/file-manager#delete) | This event is triggered after the file or folder is deleted successfully. The deleted file or folder details can be retrieved here. Additionally, custom elements' visibility can be managed here based on the application's use case.
[`beforeFolderCreate`](../api/file-manager#beforefoldercreate) | This event is triggered before a folder is created. It allows for the restriction of folder creation based on the application's use case.
[`folderCreate`](../api/file-manager#foldercreate) | This event is triggered when a folder is successfully created. It provides an opportunity to retrieve details about the newly created folder.
[`search`](../api/file-manager#search) | This event is triggered when a search action occurs in the search bar of the File Manager control. It triggers each character entered in the input during the search process.
[`beforeRename`](../api/file-manager#beforerename) | This event is triggered when a file or folder is about to be renamed. It allows for the restriction of the rename action for specific folders or files by utilizing the cancel option.
[`rename`](../api/file-manager#rename) | This event is triggered when a file or folder is successfully renamed. It provides an opportunity to fetch details about the renamed file.
[`beforeMove`](../api/file-manager#beforemove) | This event is triggered when a file or folder begins to move from its current path through a copy/cut and paste action.
[`move`](../api/file-manager#move) | This event is triggered when a file or folder is pasted into the destination path.

## Local data

The FileManager can be populated with local data that contains the array of `fileData` interface objects with [`parentId`](../api/file-manager/fileData#parentid)  mapping.

To render the root-level folder, specify the `parentId` as null, or there is no need to specify the `parentId` in the array of `fileData` interface objects.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/file-manager-sdk/typescript/flat-data-cs/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager-sdk/typescript/flat-data-cs/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager-sdk/typescript/flat-data-cs/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/file-manager-sdk/typescript/flat-data-cs" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/file-manager-sdk/typescript/flat-data-cs/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager-sdk/typescript/flat-data-cs/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager-sdk/typescript/flat-data-cs/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/file-manager-sdk/typescript/flat-data-cs" %}
{% endif %}

## Rendering flat JSON data from Google Drive

In the following topic, we can learn about reading files from Google API using the File Manager's action events. This eliminates the need to define [`ajaxSettings`](../api/file-manager#ajaxsettings) url.

These events enable you to access Essential<sup style="font-size:70%">&reg;</sup> item details from the event argument. To perform file operation corresponding to your service, use the `cancel` property in File Manager's action event and customize the [`fileSystemData`](../api/file-manager#filesystemdata) based on your current service data.

The example retrieves the google drive file details as Flat data object and handle the read response from source by updating [`fileSystemData`](../api/file-manager#filesystemdata) property with retrieved data.

To set up File Manager control with google service, create a client ID and API key for your google account. To learn more about generating the client credentials from the from Google API Console, refer to this [link](https://developers.google.com/identity/protocols/oauth2/javascript-implicit-flow).

```javascript
async function fetchData() {
    // Load the Drive API client library
    await gapi.client.load('drive', 'v3');
    let nextPageToken = null;
    let allFiles = [];
    do {
        const response = await gapi.client.drive.files.list({
        pageSize: 1000,
        fields: 'nextPageToken, files(id, name, mimeType, size, parents, thumbnailLink, trashed)',
        pageToken: nextPageToken,
        q: 'trashed=false'
        });
        allFiles = allFiles.concat(response.result.files);
        nextPageToken = response.result.nextPageToken;
    } while (nextPageToken);
    const files = allFiles;
    // Create a flat array representing parent-child relationships for File Manager fileSystemData property
    window.fileSystemData = await createFlatData(files);
}

async function createFlatData(files) {
...
  await Promise.all(files.map(async file => {
      isFileOrFolder = file.mimeType == 'application/vnd.google-apps.folder' ? false : true;
      if (!isFileOrFolder) {
      hasSubitems = file.name == 'Files'? true : doesFolderHaveSubfolders(fileList, file.id);
      }
      var fileType = getFileTypeFromName(file.name);
      var imageUrl = file.thumbnailLink;
      //Frame File Manager response data by retrieveing the folder details from google service.
      if (file.name == 'Files') {
      rootId = file.id;
      fileDetails = {
          id: '0',
          name: file.name,
          parentId: null,
          isFile: file.mimeType == 'application/vnd.google-apps.folder'? false : true,
          hasChild: hasSubitems,
          size: file.size == undefined? '0' : file.size,
          filterPath: '',
          originalID: file.id
      };
      } else {
      fileDetails = {
          id: file.id,
          name: file.name,
          isFile: file.mimeType == 'application/vnd.google-apps.folder' ? false : true,
          hasChild: hasSubitems,
          size: file.size == undefined? '0' : file.size,
          filterPath: file.filterPath,
          imageUrl: imageUrl,
          originalID: file.id
      };
      }
      if (file.parents) {
      file.parents.forEach(async parentId => {
          parentDetails = {
          id: fileDetails.id,
          name: fileDetails.name,
          parentId: fileDetails.name == "Files" ? null : parentId,
          isFile: fileDetails.isFile,
          type: fileDetails.isFile ? fileType : "",
          hasChild: fileDetails.hasChild,
          size: fileDetails.size,
          filterPath: fileDetails.name == "Files" ? "" : fileDetails.filterPath,
          imageUrl: fileDetails.imageUrl,
          originalID: fileDetails.originalID
          };
          await flatData.push(parentDetails);
          flatData.sort((a, b) => a.name.localeCompare(b.name));
      });
      } else {
      // If a file has no parents, it is a root-level item
      await flatData.push(fileDetails);
      }
  }));

    ...
  // Return flat array representing parent-child relationships from Google Drive
  return await(newData);
  }
```

### Delete action

To enable the delete operation in the File Manager control with Google services, you can use the [`beforeDelete`](../api/file-manager#beforedelete) event. By setting the [`cancel`](../api/file-manager/deleteEventArgs#cancel)  property to `true` in the `beforeDelete` event, you can prevent the default delete action of the File Manager control. Then, you can make a Google API request with the help of event argument to delete the file from Google Drive. Additionally, to update the [`fileSystemData`](../api/file-manager#filesystemdata) property with the current Google Drive data, you can call the `fetchData` method in the `gapi` success callback. This ensures that the File Manager control remains synchronized with the Google Drive data during the delete operation.

Here is an example of how you can handle the delete operation using the `beforeDelete` event:

```javascript
  beforeDelete: function deleting(args) {
      // Cancel the default delete action
      args.cancel = true;
      // Create a new Drive API request to delete the file or folder
      args.itemData.forEach(function(item) {
        gapi.client.drive.files.delete({
          fileId: item.originalID,
        }).then(function(response) {
          // Success: load the updated Google Drive data within File Manager control.
          fetchData();
        }, function(error) {
          console.error('Error deleting folder:', error);
        });
      });
  },
```

### Copy action

To enable the copy operation in the File Manager control with Google services, you can use the [`beforeMove`](../api/file-manager#beforemove) event. The `isCopy` property in the event argument in `true` for copy operation. By setting the [`cancel`](../api/file-manager/moveEventArgs#cancel) property to `true` in the `beforeMove` event, you can prevent the default copy action of the File Manager control. Then, you can make a Google API request with the help of event argument to copy the file from Google Drive. Additionally, to update the [`fileSystemData`](../api/file-manager#filesystemdata) property with the current Google Drive data, you can call the `fetchData` method in the `gapi` success callback. This ensures that the File Manager control remains synchronized with the Google Drive data during the copy operation.

Here is an example of how you can handle the copy operation using the `beforeMove` event:

```javascript
  beforeMove: function moving(args) {
    // Cancel the default move action
    args.cancel = true;
    // Check if the operation is a copy or a cut
    if(args.isCopy) {
      // Update the parents property to move the file to the new folder
      var newParentFolderId = args.targetData.originalID;
      // Perform copy operation.
      args.itemData.forEach(async function(item) {
        var originalFolderId = item.originalID;
        // Check if the item is a folder or a file
        if(item.type == "") {
          // Get information about the original folder
          gapi.client.drive.files.get({
              fileId: originalFolderId,
              fields: 'id,name,parents,kind,mimeType'
          }).then(function(response) {
              var folderMetadata = response.result;
              // Create a new folder in the destination
              gapi.client.drive.files.create({
                  resource: {
                      name: folderMetadata.name,
                      mimeType: folderMetadata.mimeType,
                      parents: [newParentFolderId]
                  }
              }).then(function(newFolder) {
                  // Get the contents of the original folder
                  gapi.client.drive.files.list({
                      q: "'" + originalFolderId + "' in parents",
                      fields: 'files(id,name,kind,mimeType)',
                      pageSize: 1000
                  }).then(function(contentsResponse) {
                      var contents = contentsResponse.result.files;
                      // Iterate through the contents and copy each file or subfolder
                      contents.forEach(function(item) {
                          if (item.kind === 'drive#folder') {
                              // Recursively copy subfolders
                              copyFolder(item.id, newFolder.result.id);
                          } else {
                              // Copy files
                              gapi.client.drive.files.copy({
                                  fileId: item.id,
                                  resource: {
                                      name: item.name,
                                      parents: [newFolder.result.id]
                                  }
                              }).then(function(copiedFile) {
                                  // Update the copied file's properties if needed
                                  var updatedProperties = {
                                      // Add any additional properties you want to update
                                  };

                                  gapi.client.drive.files.update({
                                      fileId: copiedFile.result.id,
                                      resource: updatedProperties
                                  }).then(function(updatedFile) {
                                    // Success: load the copied Google Drive folder data within File Manager control.
                                    fetchData();
                                  ...
      return;
    }
  ...
  // Function to copy a folder and its contents
  async function copyFolder(originalFolderId, newParentFolderId) {
    // Get information about the original folder
    await gapi.client.drive.files.get({
        fileId: originalFolderId,
        fields: 'id,name,parents,kind,mimeType'
    }).then(async function(response) {
        var folderMetadata = response.result;
        // Create a new folder in the destination
        await gapi.client.drive.files.create({
            resource: {
                name: folderMetadata.name,
                mimeType: folderMetadata.mimeType,
                parents: [newParentFolderId]
            }
        }).then(async function(newFolder) {
            // Get the contents of the original folder
            await gapi.client.drive.files.list({
                q: "'" + originalFolderId + "' in parents",
                fields: 'files(id,name,kind,mimeType)',
                pageSize: 1000
            }).then(async function(contentsResponse) {
                var contents = contentsResponse.result.files;

                // Iterate through the contents and copy each file or subfolder
                contents.forEach(async function(item) {
                    if (item.kind === 'drive#folder') {
                        // Recursively copy subfolders
                        copyFolder(item.id, newFolder.result.id);
                    } else {
                        // Copy files
                        await gapi.client.drive.files.copy({
                            fileId: item.id,
                            resource: {
                                name: item.name,
                                parents: [newFolder.result.id]
                            }
                        }).then(async function(copiedFile) {
                            // Update the copied file's properties if needed
                            var updatedProperties = {
                                // Add any additional properties you want to update
                            };

                            await gapi.client.drive.files.update({
                                fileId: copiedFile.result.id,
                                resource: updatedProperties
                            }).then(function(updatedFile) {
                            }).catch(function(error) {
                                console.error('Error updating copied file:', error);
                            });
                        }).catch(function(error) {
                            console.error('Error copying file:', error);
                        });
                    }
                });
              ...
```

### Move action

To enable the move operation in the File Manager control with Google services, you can use the [`beforeMove`](../api/file-manager#beforemove) event. The `isCopy` property in the event argument in `false` for move operation. By setting the [`cancel`](../api/file-manager/moveEventArgs#cancel) property to `true` in the `beforeMove` event, you can prevent the default move action of the File Manager control. Then, you can make a Google API request with the help of event argument to move the file from Google Drive. Additionally, to update the [`fileSystemData`](../api/file-manager#filesystemdata) property with the current Google Drive data, you can call the `fetchData` method in the `gapi` success callback. This ensures that the File Manager control remains synchronized with the Google Drive data during the move operation.

Here is an example of how you can handle the move operation using the `beforeMove` event:

```javascript
  beforeMove: function moving(args) {
    // Cancel the default move action
    args.cancel = true;
    ...
    //Perform cut operation.
    args.itemData.forEach(function(item) {
      // Get information about the original file
      gapi.client.drive.files.get({
          fileId: item.originalID,
          fields: 'id,parents', // Add any other fields you might need
      }).then(function(response) {
        var fileMetadata = response.result;
        // Update the parents property to move the file to the new folder
        var newParentFolderId = [args.targetData.originalID];
        // Send the update request
        gapi.client.drive.files.update({
            fileId: item.originalID,
            addParents: newParentFolderId,
            removeParents: fileMetadata.parents[0],
        }).then(function(updatedFile) {
            // Success: load the Google Drive moved file data within File Manager control.
            fetchData();
        }, function(error) {
            console.error('Error moving file:', error);
        });
      }, function(error) {
          console.error('Error retrieving file metadata:', error);
      });
    });
  },
```

### Folder create action

To enable the folder create operation in the File Manager control with Google services, you can use the [`beforeFolderCreate`](../api/file-manager#beforefoldercreate) event. By setting the [`cancel`](../api/file-manager/foldercreateeventargs#cancel) property to `true` in the `beforeFolderCreate` event, you can prevent the default folder create action of the File Manager control. Then, you can make a Google API request with the help of event argument to create folder to Google Drive. Additionally, to update the [`fileSystemData`](../api/file-manager#filesystemdata) property with the current Google Drive data, you can call the `fetchData` method in the `gapi` success callback. This ensures that the File Manager control remains synchronized with the Google Drive data during the folder creation operation.

Here is an example of how you can handle the folder creation operation using the `beforeFolderCreate` event:

```javascript
  beforeFolderCreate: function onCreate(args) {
    // Cancel the default folder creation action
    args.cancel = true;
    // Create a new Drive API request to create a folder
    var body = {
      'name': args.folderName,
      'mimeType': "application/vnd.google-apps.folder",
      'parents': [args.parentFolder[0].originalID]
    };
    var request = gapi.client.drive.files.create({
      'resource': body
    });
    request.execute(function(resp) {
      if (resp.error) {
        console.error('Error:', resp.error.message);
      } else {
        // success: load the newly created Google Drive data within File Manager control.
        fetchData();
      }
    });
},
```

### Rename action

To enable the rename operation in the File Manager control with Google services, you can use the [`beforeRename`](../api/file-manager#beforerename) event. By setting the [`cancel`](../api/file-manager/renameEventArgs#cancel) property to `true` in the `beforeRename` event, you can prevent the default rename action of the File Manager control. Then, you can make a Google API request with the help of event argument to rename the file from Google Drive. Additionally, to update the [`fileSystemData`](../api/file-manager#filesystemdata) property with the current Google Drive data, you can call the `fetchData` method in the `gapi` success callback. This ensures that the File Manager control remains synchronized with the Google Drive data during the rename operation.

Here is an example of how you can handle the rename operation using the `beforeRename` event:

```javascript
  beforeRename: function rename(args) {
    // Cancel the default rename action
    args.cancel = true;
    // Create a new Drive API request to find the file or folder name
    gapi.client.drive.files.list({
      q: "name = '" + args.itemData[0].name + "'",
      fields: 'files(id,name,parents)', // Add any other fields you might need
    }).then(function(response) {
      var files = response.result.files;

      if (files && files.length > 0) {
        // The first file in the list is the one you're looking for
        var foundFile = files[0];
        var metadata = {
          name: args.newName,
        };
        // Create a new Drive API request to rename the file or folder name
        gapi.client.drive.files.update({
          fileId: foundFile.id,
          resource: metadata,
        }).then(function(updatedFile) {
          // Success: load the renamed Google Drive data within File Manager control.
          fetchData();
        }, function(error) {
          console.error('Error updating file:', error);
        });
      }
    }, function(error) {
      console.error('Error retrieving file metadata:', error);
    });
},
```

### Upload action

To enable the upload operation in the File Manager control with Google services, you can use the [`uploadListCreate`](../api/file-manager#uploadlistcreate) event. This event provides access to details of the file selected in the browser, including metadata such as the file `name`, `size`, and `content type`. Using the event argument, you can make a Google API request to upload the file to Google Drive. Additionally, to update the [`fileSystemData`](../api/file-manager#filesystemdata) property with the current Google Drive data, you can call the `fetchData` method in the `gapi` success callback. This ensures that the File Manager control remains synchronized with the Google Drive data during the upload operation.

Here is an example of how you can handle the upload operation using the `uploadListCreate` event:

```javascript
  uploadListCreate: async function uploadFile(args) {
    var fileObj = document.getElementById("file").ej2_instances[0];
    var pathArray = fileObj.pathNames;
    var folderName = pathArray[pathArray.length -1 ];
    var parentFolderId = fileObj.fileSystemData.filter(function(obj) { return obj.name == folderName; })[0].originalID;
    var folders = args.fileInfo.name.split('/');
    var fileName = folders.length > 1 ? folders[folders.length - 1] : args.fileInfo.name;
    const file = args.fileInfo.rawFile;
    // Create a new Drive API request to upload a file
    var body = {
      'name': fileName,
      'mimeType': args.fileInfo.type,
      'parents': [parentFolderId]
    };
    var request = gapi.client.drive.files.create({
      'resource': body
    });
    request.execute(function(resp) {
      if (resp.error) {
        console.error('Error:', resp.error.message);
        args.element.getElementsByClassName("e-file-status")[0].innerText = "Upload Failed";
        args.element.getElementsByClassName("e-file-status")[0].classList.add("e-upload-fails");
      } else {
        // Success: load the uploaded data within File Manager control.
        args.element.getElementsByClassName("e-file-status")[0].innerText = "Upload successful";
        args.element.getElementsByClassName("e-file-status")[0].classList.add("e-upload-success");
        // Success: load the updated Google Drive data within File Manager control.
        fetchData();
      }
    });
  },
```

### Download action

To enable the Download operatipon in the File Manager control with Google services, you can use the [`beforeDownload`](../api/file-manager#beforedownload) event. This event provides access to details of the file selected in the File Manager. By setting the [`cancel`](../api/file-manager/beforeDownloadEventArgs#cancel) property to `true` in the `beforeDownload` event, you can prevent the default delete action of the File Manager control. Then, you can make a Google API request with the help of event argument to Download the raw file from Google Drive.

```javascript
  beforeDownload: function beforeDownload(args) {
    // Cancel the default download action
    args.cancel = true;
    var fileData = args.data.data;
    const zip = new JSZip();
    //To download multiple files as zip folder.
    if(fileData.length > 1 || !fileData[0].isFile) {
      downloadFiles(fileData);
    }
    //To download single file.
    else {
      // Fetch the file content using the Google Drive API
      fetch(`https://www.googleapis.com/drive/v3/files/${fileData[0].id}?alt=media`, {
          method: 'GET',
          headers: {
              'Authorization': 'Bearer ' + gapi.auth.getToken().access_token,
          },
      })
      .then(function(response) {
          if (!response.ok) {
              throw new Error('Network response was not ok: ' + response.statusText);
          }
          return response.blob();
      })
      .then(function(blob) {
          // Display image preview
          var img = document.createElement('img');
          img.src = URL.createObjectURL(blob);
          img.alt = fileData[0].name; // Set alternative text
          document.body.appendChild(img);

          // Create a download link
          var downloadLink = document.createElement('a');
          downloadLink.href = URL.createObjectURL(blob);
          downloadLink.download = fileData[0].name; // Set the desired file name
          document.body.appendChild(downloadLink);
          downloadLink.click();

          // Remove the link and image from the document
          document.body.removeChild(downloadLink);
          document.body.removeChild(img);
      })
      .catch(function(error) {
          console.error('Error downloading file:', error);
      });
    }
  },
  ...

  function downloadFiles(files) {
    const zip = new JSZip();
    const totalCount = files.some(file => file.type === "") ? getTotalFileCount(files) : files.length;
    const name = files.some(file => file.type == "") ? 'folders' : 'files';
    // Iterate through files and add them to the zip
    files.forEach(file => {
      if (file.type === '') {
        // If it's a folder, recursively fetch its contents
        fetchFolderContents(file.id).then(response => {
          downloadFiles(response.result.files);
        });
      } else {
        // If it's a file, download and add it to the zip
        fetch(`https://www.googleapis.com/drive/v3/files/${file.id}?alt=media`, {
          method: 'GET',
          headers: {
            'Authorization': 'Bearer ' + gapi.auth.getToken().access_token,
          },
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
          }
          return response.blob();
        })
        .then(blob => {
          // Add file content to the zip
          zip.file(file.name, blob);

          // Check if all files are added, then create the zip
          if (Object.keys(zip.files).length === totalCount) {
            zip.generateAsync({ type: 'blob' }).then(zipBlob => {
              // Trigger download
              const a = document.createElement('a');
              a.href = URL.createObjectURL(zipBlob);
              a.download = name + '.zip';
              document.body.appendChild(a);
              a.click();
              document.body.removeChild(a);
            });
          }
        })
        .catch(error => {
          console.error('Error downloading file:', error);
        });
      }
    });
  }
```

### Get image action

To enable the image preview in the File Manager control with Google services, you can use the File Manager [`fileSystemData`](../api/file-manager#filesystemdata) property response with `imageUrl` field.

In the example, the File Manager retrieves the Google Drive file details as flat data and update the **imageUrl** field with Google Drive's file `thumbnailLink` at initial render.

```javascript
  async function createFlatData(files) {
  ...
    await Promise.all(files.map(async file => {
      ...
      var imageUrl = file.thumbnailLink;
      //Frame File Manager response data by retrieveing the folder details from google service.
      if (file.name == 'Files') {
        rootId = file.id;
        fileDetails = {
          id: '0',
          name: file.name,
          parentId: null,
          isFile: file.mimeType == 'application/vnd.google-apps.folder'? false : true,
          hasChild: hasSubitems,
          size: file.size == undefined? '0' : file.size,
          filterPath: '',
          originalID: file.id
        };
      } else {
        fileDetails = {
          id: file.id,
          name: file.name,
          isFile: file.mimeType == 'application/vnd.google-apps.folder' ? false : true,
          hasChild: hasSubitems,
          size: file.size == undefined? '0' : file.size,
          filterPath: file.filterPath,
          imageUrl: imageUrl,
          originalID: file.id
        };
      }
      ...
```

>Note: For a complete example on handling Google Drive file details as flat data in the File Manager control, view the example on [GitHub](https://github.com/SyncfusionExamples/javascript-filemanager-flat-data-with-cloud-service).