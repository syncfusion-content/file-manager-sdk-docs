// Sample flat data demonstrating hasChild configuration
var fileData = [
    {
        id: '0',
        name: 'Files',
        parentId: null,
        isFile: false,
        type: 'folder',
        filterPath: '',
        hasChild: true, // Root folder contains subfolders ('Documents', 'Pictures')
        dateCreated: new Date("2023-11-15T19:02:02.3419426+05:30"),
        dateModified: new Date("2024-01-08T18:16:38.4384894+05:30"),
        size: 1779448
    },
    {
        id: '1',
        name: 'Documents',
        parentId: '0',
        isFile: false,
        type: 'folder',
        filterPath: '\\',
        hasChild: false, // Contains only files, no subfolders
        dateCreated: new Date("2023-11-15T19:02:02.3419426+05:30"),
        dateModified: new Date("2024-01-08T16:55:20.9464164+05:30"),
        size: 680786
    },
    {
        id: '2',
        name: 'Pictures',
        parentId: '0',
        isFile: false,
        type: 'folder',
        filterPath: '\\',
        hasChild: true, // Contains a subfolder ('Employees')
        dateCreated: new Date("2023-11-15T19:02:02.3419426+05:30"),
        dateModified: new Date("2024-01-08T16:55:20.9464164+05:30"),
        size: 228465
    },
    {
        id: '3',
        name: 'Employees',
        parentId: '2',
        isFile: false,
        type: 'folder',
        filterPath: '\\Pictures\\',
        hasChild: false, // Leaf subfolder with only files
        dateCreated: new Date("2023-11-15T19:02:02.3419426+05:30"),
        dateModified: new Date("2024-01-08T16:55:20.9464164+05:30"),
        size: 237568
    },
    {
        id: '4',
        name: 'Overview.docx',
        parentId: '1',
        isFile: true,
        type: '.docx',
        filterPath: '\\Documents\\',
        hasChild: false, // File item
        dateCreated: new Date("2023-11-15T19:02:02.3419426+05:30"),
        dateModified: new Date("2024-01-08T16:55:20.9464164+05:30"),
        size: 12403
    },
    {
        id: '5',
        name: 'Profile.png',
        parentId: '3',
        isFile: true,
        type: '.png',
        filterPath: '\\Pictures\\Employees\\',
        hasChild: false, // File item
        dateCreated: new Date("2023-11-15T19:02:02.3419426+05:30"),
        dateModified: new Date("2024-01-08T16:55:20.9464164+05:30"),
        size: 53248
    }
];

var fileObject = new ej.filemanager.FileManager({
    fileSystemData: fileData,
    toolbarSettings: {
        items: ['NewFolder', 'Cut', 'Copy', 'Paste', 'Delete', 'Rename', 'SortBy', 'Refresh', 'Selection', 'View', 'Details'],
        visible: true
    },
    contextMenuSettings: {
        file: ['Cut', 'Copy', '|', 'Delete', 'Rename', '|', 'Details'],
        folder: ['Open', '|', 'Cut', 'Copy', 'Paste', '|', 'Delete', 'Rename', '|', 'Details'],
        layout: ['SortBy', 'View', 'Refresh', '|', 'Paste', '|', 'NewFolder', '|', 'Details', '|', 'SelectAll'],
        visible: true
    },
    height: '380px'
});
fileObject.appendTo('#filemanager');
