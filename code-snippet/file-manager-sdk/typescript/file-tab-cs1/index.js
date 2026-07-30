var hostUrl = 'https://physical-service.syncfusion.com/';
// inject feature modules of the File Manager
ej.filemanager.FileManager.Inject(ej.filemanager.DetailsView, ej.filemanager.Toolbar, ej.filemanager.NavigationPane);

//Initialize Tab component
var tabObj = new ej.navigations.Tab({
    heightAdjustMode: 'None',
    height: 320,
    showCloseButton: true,
    selected: onSelect
});
//Render initialized Tab component
tabObj.appendTo('#tab_orientation');

// initialize File Manager control
var fileObject = new ej.filemanager.FileManager({
    ajaxSettings: {
        url: hostUrl + 'api/FileManager/FileOperations',
        getImageUrl: hostUrl + 'api/FileManager/GetImage',
        uploadUrl: hostUrl + 'api/FileManager/Upload',
        downloadUrl: hostUrl + 'api/FileManager/Download'
    },
    height: '380px'
});

// render initialized File Manager
fileObject.appendTo('#filemanager');

function onSelect() {
    fileObject.refreshLayout();
}