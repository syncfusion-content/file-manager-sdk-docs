import { FileManager, Toolbar, NavigationPane, DetailsView, ContextMenu } from '@syncfusion/ej2-filemanager';
import { DropDownButton, ItemModel } from '@syncfusion/ej2-splitbuttons';
FileManager.Inject(Toolbar, NavigationPane, DetailsView, ContextMenu);

/**
 * File Manager folder upload sample
 */
let hostUrl: string = 'https://physical-service.syncfusion.com/';
let fileObject: FileManager = new FileManager({
    ajaxSettings: {
        url: hostUrl + 'api/FileManager/FileOperations',
        getImageUrl: hostUrl + 'api/FileManager/GetImage',
        uploadUrl: hostUrl + 'api/FileManager/Upload',
        downloadUrl: hostUrl + 'api/FileManager/Download'
    },
    height: '380px'
});
fileObject.appendTo('#file');

let items: ItemModel[] = [{ text: 'Folder' }, { text: 'Files' }];
let drpDownBtn: DropDownButton = new DropDownButton({
    items: items,
    select: (args) => {
        if (args.item.text === 'Folder') {
            fileObject.uploadSettings.directoryUpload = true;
        } else {
            fileObject.uploadSettings.directoryUpload = false;
        }
        setTimeout(function () {
            let uploadBtn: HTMLElement = document.querySelector('.e-file-select-wrap button') as HTMLElement;
            uploadBtn.click();
        }, 100);
    }
}, '#file_tb_upload');

let uploadEle: HTMLElement = document.getElementById('file_tb_upload');

if (uploadEle) {
    uploadEle.addEventListener('click', function (args) {
        args.stopPropagation();
    });
}