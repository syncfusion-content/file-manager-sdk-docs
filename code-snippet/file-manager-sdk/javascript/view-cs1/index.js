var hostUrl = 'https://physical-service.syncfusion.com/';
// inject feature modules of the File Manager
ej.filemanager.FileManager.Inject(ej.filemanager.DetailsView,ej.filemanager.Toolbar,ej.filemanager.NavigationPane);
// initialize File Manager control
var filemanagerInstance = new ej.filemanager.FileManager({
    ajaxSettings: {
        url: hostUrl + 'api/FileManager/FileOperations',
        getImageUrl: hostUrl + 'api/FileManager/GetImage',
        uploadUrl: hostUrl + 'api/FileManager/Upload',
        downloadUrl: hostUrl + 'api/FileManager/Download'
    },
    // Initial view of File Manager is set to details view
    view: "Details",
    // File Manager's created event
    created: onCreate
});

// render initialized File Manager
filemanagerInstance.appendTo('#filemanager');

// File Manager's created event function
function onCreate(args){
    console.log("File Manager has been created successfully");
}

