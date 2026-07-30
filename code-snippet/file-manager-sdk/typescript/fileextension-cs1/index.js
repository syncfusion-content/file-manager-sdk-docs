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
    // Hides the file extension in File Manager
    showFileExtension: false,
    // File Manager's beforeFileLoad event
    fileLoad: onBeforeFileLoad,
    // File Manager's beforeFileOpen event
    fileOpen: onBeforeFileOpen,
    height: '380px'
});

// render initialized File Manager
filemanagerInstance.appendTo('#filemanager');

// File Manager's file beforeFileLoad function
function onBeforeFileLoad(args) {
    console.log(args.fileDetails.name + " is loading");
}

// File Manager's file beforeFileOpen function
function onBeforeFileOpen(args) {
    console.log(args.fileDetails.name + " is opened");
}

