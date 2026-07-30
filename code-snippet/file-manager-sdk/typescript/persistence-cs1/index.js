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
    enablePersistence: true,
    // File Manager's onSuccess event
    success: onAjaxSuccess,
    // File Manager's onError event
    failure: onAjaxFailure,
    height: '380px'
});

// render initialized File Manager
filemanagerInstance.appendTo('#filemanager');

// File Manager's file onSuccess function
function onAjaxSuccess(args) {
    console.log("Ajax request successful");
}

// File Manager's file onError function
function onAjaxFailure(args) {
    console.log("Ajax request has failed");
}