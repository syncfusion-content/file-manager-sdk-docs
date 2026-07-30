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
    // Hides the file extension in File Manager
    showFileExtension: false,
    // File Manager's fileLoad event
    fileLoad: onBeforeFileLoad,
    // File Manager's fileOpen event
    fileOpen: onBeforeFileOpen,
    height: '380px'
});

// render initialized File Manager
filemanagerInstance.appendTo('#filemanager');

// File Manager's file fileLoad function
function onBeforeFileLoad(args: any) {
    console.log(args.fileDetails.name + " is loading");
}

// File Manager's file fileOpen function
function onBeforeFileOpen(args: any) {
    console.log(args.fileDetails.name + " is opened");
}