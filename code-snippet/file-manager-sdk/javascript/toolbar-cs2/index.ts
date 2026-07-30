import { FileManager, Toolbar, NavigationPane, DetailsView } from '@syncfusion/ej2-filemanager';
import { CheckBox, ChangeEventArgs } from '@syncfusion/ej2-buttons';

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
var checkbox: CheckBox = new CheckBox({ label: 'Select All', checked: false, change: onChange }, '#checkbox');

// on checkbox change select all or clear selection
function onChange(args: ChangeEventArgs): void {
    if (args.checked) {
        filemanagerInstance.selectAll();
        checkbox.label = 'Unselect All';
    }
    else {
        filemanagerInstance.clearSelection();
        checkbox.label = 'Select All';
    }
}
