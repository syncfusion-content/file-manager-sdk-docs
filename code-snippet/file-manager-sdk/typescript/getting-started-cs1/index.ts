import { FileManager } from '@syncfusion/ej2-filemanager';

let hostUrl: string = 'https://physical-service.syncfusion.com/';
// initialize File Manager Control
let filemanagerInstance: FileManager = new FileManager({
    ajaxSettings: {
        url: hostUrl + 'api/FileManager/FileOperations'
    },
    height: '380px'
});

// render initialized File Manager
filemanagerInstance.appendTo('#filemanager');