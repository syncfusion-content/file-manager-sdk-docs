import { FileManager, Toolbar, NavigationPane, DetailsView } from '@syncfusion/ej2-filemanager';

FileManager.Inject(Toolbar, NavigationPane, DetailsView)

let hostUrl: string = 'https://physical-service.syncfusion.com/';
// initialize File Manager control and add custom item to contextmenu
let filemanagerInstance: FileManager = new FileManager({
    ajaxSettings: {
        url: hostUrl + 'api/FileManagerAccess/FileOperations',
        getImageUrl: hostUrl + 'api/FileManagerAccess/GetImage',
        uploadUrl: hostUrl + 'api/FileManagerAccess/Upload',
        downloadUrl: hostUrl + 'api/FileManagerAccess/Download'
    },
    view: 'Details',
    height: '380px'
});

// render initialized File Manager
filemanagerInstance.appendTo('#filemanager');