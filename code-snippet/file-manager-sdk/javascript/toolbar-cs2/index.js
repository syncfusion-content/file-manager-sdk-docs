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
    //Custom item added along with default item
    toolbarItems: [{ text: 'Create folder', name: 'NewFolder', prefixIcon: 'e-plus', tooltipText: 'Create folder' },
    { name: 'Upload' },
    { name: 'SortBy' },
    { name: 'Refresh' },
    { name: 'Cut' },
    { name: 'Copy' },
    { name: 'Paste' },
    { name: 'Delete' },
    { name: 'Download' },
    { name: 'Rename' },
    { template: '<input id="checkbox" type="checkbox"/>', name: 'Select' },
    { name: 'Selection' },
    { name: 'View' },
    { name: 'Details' }],
    height: '380px'
});

// render initialized File Manager
filemanagerInstance.appendTo('#filemanager');

// Render Checkbox in template
var checkbox = new ej.buttons.CheckBox({ label: 'Select All', checked: false, change: onChange }, '#checkbox');

// on checkbox change select all or clear selection
function onChange(args) {
    if (args.checked) {
        filemanagerInstance.selectAll();
        checkbox.label = 'Unselect All';
    }
    else {
        filemanagerInstance.clearSelection();
        checkbox.label = 'Select All';
    }
}