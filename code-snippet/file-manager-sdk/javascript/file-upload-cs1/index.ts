import { Uploader } from '@syncfusion/ej2-inputs';
import { Dialog } from '@syncfusion/ej2-popups';
import { FileManager, FileOpenEventArgs, Toolbar, NavigationPane, DetailsView } from '@syncfusion/ej2-filemanager';
import { Button } from '@syncfusion/ej2-buttons';;

FileManager.Inject(Toolbar, NavigationPane, DetailsView)

// Initialize the Uploader Control
let uploadObject: Uploader = new Uploader();
uploadObject.appendTo('#fileupload');

// Initialize the Button Control
let btnObj: Button = new Button();
btnObj.appendTo('#openBtn');

// Initialize the Dialog Control
let dialogObj: Dialog = new Dialog({
    header: 'Open',
    showCloseIcon: true,
    closeOnEscape: false,
    width: '850px',
    visible: false,
    target: document.getElementById('target'),
    animationSettings: { effect: 'None' },
    open: dialogOpen,
    close: dialogClose
});
dialogObj.appendTo('#dialog');

let hostUrl: string = 'https://physical-service.syncfusion.com/';

let openBtnElement: HTMLElement = document.getElementById('openBtn');

if(openBtnElement) {
    openBtnElement.addEventListener('click', function () {
        dialogObj.show();
        // Initialize the FileManager Control
        let filemanagerInstance: FileManager = new FileManager({
            ajaxSettings: {
                url: hostUrl + 'api/FileManager/FileOperations',
                getImageUrl: hostUrl + 'api/FileManager/GetImage',
                uploadUrl: hostUrl + 'api/FileManager/Upload',
                downloadUrl: hostUrl + 'api/FileManager/Download'
            },
            allowMultiSelection: false,
            fileOpen: onFileOpen,
            height: '380px'
        });
        filemanagerInstance.appendTo('#filemanager');
        dialogOpen();
    });
}

// Uploader will be shown, if Dialog is closed
function dialogClose(): void {
    let filemanager: FileManager = (document.getElementById('filemanager') as any).ej2_instances[0];
    filemanager.destroy();
    const container = document.getElementById('fileupload');
    if (container) {
        container.style.display = 'block';
    }
}

// Uploader will be hidden, if Dialog is opened
function dialogOpen(): void {
    const container = document.getElementById('fileupload');
    if (container) {
        container.style.display = 'none';
    }
}

// File Manager's fileOpen event function
function onFileOpen(args: FileOpenEventArgs): void {
    let file: any = (args as any).fileDetails;
    if (file.isFile) {
        args.cancel = true;
        uploadObject.files = [{ name: file.name, size: file.size, type: file.type }];
        dialogObj.hide();
    }
}