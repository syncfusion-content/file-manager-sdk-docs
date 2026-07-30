var hostUrl = 'https://physical-service.syncfusion.com/';
// inject feature modules of the File Manager
ej.filemanager.FileManager.Inject(ej.filemanager.DetailsView, ej.filemanager.Toolbar, ej.filemanager.NavigationPane);
// initialize File Manager control
var filemanagerInstance = new ej.filemanager.FileManager({
    ajaxSettings: {
        url: hostUrl + 'api/FileManager/FileOperations',
        getImageUrl: hostUrl + 'api/FileManager/GetImage',
        uploadUrl: hostUrl + 'api/FileManager/Upload',
        downloadUrl: hostUrl + 'api/FileManager/Download'
    },
    allowDragAndDrop: true, // allowDragAndDrop is true by default.
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
function onFileDragStart(args) {
    console.log("File drag start");
}
// File Manager's file drag stop event function
function onFileDragStop(args) {
    console.log("File drag stop");
}
// File Manager's file dragging event function
function onFileDragging(args) {
    console.log("File dragging");
}
// File Manager's file dropped event function
function onFileDropped(args) {
    console.log("File dropped");
}

