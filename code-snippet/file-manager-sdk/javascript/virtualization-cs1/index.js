var hostUrl = 'https://physical-service.syncfusion.com/';
// inject feature modules of the File Manager
ej.filemanager.FileManager.Inject(ej.filemanager.DetailsView, ej.filemanager.Toolbar, ej.filemanager.NavigationPane, ej.filemanager.enableVirtualization);
// initialize File Manager control
var filemanagerInstance = new ej.filemanager.FileManager({
    ajaxSettings: {
        url: hostUrl + 'api/Virtualization/FileOperations',
        getImageUrl: hostUrl + 'api/Virtualization/GetImage',
        uploadUrl: hostUrl + 'api/Virtualization/Upload',
        downloadUrl: hostUrl + 'api/Virtualization/Download'
    },
    view: 'Details',
    enableVirtualization: true,
    beforeSend: function (args) {
        args.ajaxSettings.beforeSend = function (args) {
            args.httpRequest.setRequestHeader('Authorization', 'FileBrowser');
        };
    },
    beforeImageLoad: function (args) {
        args.imageUrl = args.imageUrl + '&rootName=' + 'FileBrowser';
    },
    beforeDownload: function (args) {
        args.data.rootFolderName = 'FileBrowser';
    },
    height: '380px'
});

// render initialized File Manager
filemanagerInstance.appendTo('#filemanager');

