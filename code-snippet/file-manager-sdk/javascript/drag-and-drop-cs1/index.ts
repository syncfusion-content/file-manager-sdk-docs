import { FileManager, Toolbar, NavigationPane, DetailsView } from '@syncfusion/ej2-filemanager';

FileManager.Inject(Toolbar, NavigationPane, DetailsView)

let hostUrl: string = 'https://physical-service.syncfusion.com/';
// initialize File Manager control and add custom item to contextmenu
let filemanagerInstance: FileManager = new FileManager({
    ajaxSettings: {
        url: hostUrl + 'api/FileManager/FileOperations',
        getImageUrl: hostUrl + 'api/FileManager/GetImage',
        uploadUrl: hostUrl + 'api/FileManager/Upload',
        downloadUrl: hostUrl + 'api/FileManager/Download'
    },
    allowDragAndDrop: true, // allowDragAndDrop is false by default.
    // File Manager's file drag start event
    fileDragStart: onFileDragStart,
    // File Manager's file dragging event
    fileDragging: onFileDragging,
    // File Manager's file drag stop event
    fileDragStop: onFileDragStop,
    // File Manager's file drag stop event
    fileDropped: onFileDropped,
    height: '380px'

});

// render initialized File Manager
filemanagerInstance.appendTo('#filemanager');

// File Manager's file drag start event function
function onFileDragStart(args: any) {
    console.log("File drag start");
}
// File Manager's file drag stop event function
function onFileDragStop(args: any) {
    console.log("File drag stop");
}
// File Manager's file dragging event function
function onFileDragging(args: any) {
    console.log("File dragging");
}
// File Manager's file dropped event function
function onFileDropped(args: any) {
    console.log("File dropped");
}