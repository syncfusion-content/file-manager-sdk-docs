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
    height: "330px"
});

// render initialized File Manager
filemanagerInstance.appendTo('#filemanager');

// Click event for enable button
document.getElementById("enable").onclick = function (args) {
    // Enable new folder toolbar item
    filemanagerInstance.enableToolbarItems(["newfolder"]);
}

// Click event for disable button
document.getElementById("disable").onclick = function (args) {
    // Disable new folder toolbar item
    filemanagerInstance.disableToolbarItems(["newfolder"]);
}