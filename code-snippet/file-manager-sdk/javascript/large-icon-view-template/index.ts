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
    height: '380px',
    cssClass: 'e-fm-template-sample',
    largeIconsTemplate: function (item: any) {
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

function getFileIconCssClass(item: any): string {
  if (!item.isFile) return 'e-list-icon e-fe-folder';

  var extensionMap: Record<string, string> = {
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
