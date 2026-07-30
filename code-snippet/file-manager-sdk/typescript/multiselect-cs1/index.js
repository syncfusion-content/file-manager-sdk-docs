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
    allowMultiSelection: true, // allowMultiSelection is true by default.
    // File Manager's file select event
    fileSelect: onFileSelect,
    height: '380px'
});

// render initialized File Manager
filemanagerInstance.appendTo('#filemanager');

// File Manager's file select event function
function onFileSelect(args) {
    console.log(args.fileDetails.name + " has been " + args.action + "ed");
}