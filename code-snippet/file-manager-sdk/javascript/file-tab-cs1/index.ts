import { enableRipple } from '@syncfusion/ej2-base';
import { Tab } from '@syncfusion/ej2-navigations';
import { FileManager, Toolbar, NavigationPane, DetailsView, ContextMenu } from '@syncfusion/ej2-filemanager';
FileManager.Inject(Toolbar, NavigationPane, DetailsView, ContextMenu);
enableRipple(true);

//Initialize Tab Control
let tabObj: Tab = new Tab({
    heightAdjustMode: 'None',
    height: 320,
    showCloseButton: true,
    selected: onSelect,
});
//Render initialized Tab Control
tabObj.appendTo('#tab_orientation');


let hostUrl: string = 'https://physical-service.syncfusion.com/';
let fileObject: FileManager = new FileManager({
    ajaxSettings: {
        url: hostUrl + 'api/FileManager/FileOperations',
        getImageUrl: hostUrl + 'api/FileManager/GetImage',
        uploadUrl: hostUrl + 'api/FileManager/Upload',
        downloadUrl: hostUrl + 'api/FileManager/Download'
    },
    view: 'Details',
    height: '380px'
});
fileObject.appendTo('#filemanager');
function onSelect(): void {
    fileObject.refreshLayout();
}