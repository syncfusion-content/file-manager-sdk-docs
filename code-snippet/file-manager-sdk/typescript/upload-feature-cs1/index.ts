import { FileManager, Toolbar, NavigationPane, DetailsView } from '@syncfusion/ej2-filemanager';

FileManager.Inject(Toolbar, NavigationPane, DetailsView)

let hostUrl: string = 'https://physical-service.syncfusion.com/';
// initialize File Manager control
let filemanagerInstance: FileManager = new FileManager({
    ajaxSettings: {
        url: hostUrl + 'api/FileManager/FileOperations',
        getImageUrl: hostUrl + 'api/FileManager/GetImage',
        uploadUrl: hostUrl + 'api/FileManager/Upload',
        downloadUrl: hostUrl + 'api/FileManager/Download'
    },
    created: function () {
        filemanagerInstance.uploadObj.dropArea = null;  // Restrict file uploads by dragging them from the local file system to the File Manager.
    },
    height: '380px'
});

// render initialized File Manager
filemanagerInstance.appendTo('#filemanager');