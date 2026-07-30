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
    height: '380px',
    cssClass: 'e-fm-template-sample',
    largeIconsTemplate: function (item) {
        const formattedDate = item.dateCreated
            ? new Date(item.dateCreated).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            })
            : '';
        const iconClass = getFileIconCssClass(item);
        return `<div class="custom-icon-card">
                <div class="file-header">
                        <div class="file-name" title="${item.name}">${item.name}</div>
                </div>
                <div class="${iconClass}"></div>
                <div class="file-formattedDate">Created on ${formattedDate}</div>
            </div>
        `;
    }
});

// render initialized File Manager
filemanagerInstance.appendTo('#filemanager');

function getFileIconCssClass(item) {
    if (!item.isFile) return 'e-list-icon e-fe-folder';

    var extensionMap = {
        jpg: 'image',
        jpeg: 'image',
        png: 'image',
        gif: 'image',
        mp3: 'music',
        wav: 'music',
        mp4: 'video',
        avi: 'video',
        doc: 'doc',
        docx: 'docx',
        ppt: 'pptx',
        pptx: 'pptx',
        xls: 'xlsx',
        xlsx: 'xlsx',
        txt: 'txt',
        js: 'js',
        css: 'css',
        html: 'html',
        exe: 'exe',
        msi: 'msi',
        php: 'php',
        xml: 'xml',
        zip: 'zip',
        rar: 'rar',
        pdf: 'pdf',
    };

    var extension = (item.name.split('.').pop() || '').toLowerCase();
    var iconType = extensionMap[extension] || 'unknown';
    return 'e-list-icon e-fe-' + iconType;
}
