import { FileManager, Toolbar, NavigationPane, DetailsView } from '@syncfusion/ej2-filemanager';

FileManager.Inject(Toolbar, NavigationPane, DetailsView)

let hostUrl: string = 'https://physical-service.syncfusion.com/';
// initialize File Manager control
let filemanagerInstance: FileManager = new FileManager({
    ajaxSettings: {
        url: hostUrl + 'api/FileManager/FileOperations',
        getImageUrl: hostUrl + 'api/FileManager/GetImage',
        uploadUrl: hostUrl + 'api/FileManager/Upload',
        downloadUrl: hostUrl + 'api/FileManager/Download'
    },
    height: '380px',
    navigationPaneTemplate: function (item: any) {
        return `
        <div class="e-nav-pane-node" style="display: inline-flex; align-items: center;">
            <span class="folder-name" style="margin-left:8px;">${item.name}</span>
        </div>
    `;
    }
});

// render initialized File Manager
filemanagerInstance.appendTo('#filemanager');