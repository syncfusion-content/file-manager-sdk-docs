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
    // Context Menu settings customization
    contextMenuSettings: { file: ['Open', '|', 'Details'], folder: ['Open', '|', 'Details'], layout: ['SortBy', 'View', 'Refresh', '|', 'Details', '|'], visible: true},
    height: '380px'
});

// render initialized File Manager
filemanagerInstance.appendTo('#filemanager');

