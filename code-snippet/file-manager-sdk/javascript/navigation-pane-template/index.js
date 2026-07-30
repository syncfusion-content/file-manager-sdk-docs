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
    height: '380px',
    navigationPaneTemplate: function (item) {
        return `
        <div class="e-nav-pane-node" style="display: inline-flex; align-items: center;">
            <span class="folder-name" style="margin-left:8px;">${item.name}</span>
        </div>
    `;
    }
});

// render initialized File Manager
filemanagerInstance.appendTo('#filemanager');