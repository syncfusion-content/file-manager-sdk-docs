//Defining texts and messages corresponding to German culture
ej.base.L10n.load({
    'en': {
        'filemanager': {
            // Change the File Upload text.
            "File-Upload": "Files to Upload",
            // Change the Empty folder text.
            "Folder-Empty": "Empty Folder",
        }
    }
})

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
    //defining the locale for File Manager
    locale: 'en',
    height: '380px'
});

// render initialized File Manager
filemanagerInstance.appendTo('#filemanager');

