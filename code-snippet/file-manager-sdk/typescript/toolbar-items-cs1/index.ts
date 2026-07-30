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
    height: "330px"
});

// render initialized File Manager
filemanagerInstance.appendTo('#filemanager');

let enableEle: HTMLElement = document.getElementById('enable');
if(enableEle) {
    // Click event for enable button
    enableEle.addEventListener('click', function () {
        // Enable new folder toolbar item
        filemanagerInstance.enableToolbarItems(["newfolder"]);
    });
}

let disableEle: HTMLElement = document.getElementById('disable');
if(disableEle) {
    // Click event for disable button
    disableEle.addEventListener('click', function () {
        // Enable new folder toolbar item
        filemanagerInstance.disableToolbarItems(["newfolder"]);
    });
}