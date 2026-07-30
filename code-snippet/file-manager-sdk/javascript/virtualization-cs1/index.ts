import { FileManager, Toolbar, NavigationPane, DetailsView, Virtualization } from '@syncfusion/ej2-filemanager';

FileManager.Inject(Toolbar, NavigationPane, DetailsView, Virtualization)

let hostUrl: string = 'https://physical-service.syncfusion.com/';
// initialize File Manager control and add custom item to contextmenu
let filemanagerInstance: FileManager = new FileManager({
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
filemanagerInstance.appendTo('#filemanager');