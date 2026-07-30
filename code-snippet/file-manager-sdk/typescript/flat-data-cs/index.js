/**
 * File Manager flat data sample
 */
var resultData = [
    {
        dateCreated: new Date("2023-11-15T19:02:02.3419426+05:30"),
        dateModified: new Date("2024-01-08T18:16:38.4384894+05:30"),
        filterPath: "",
        hasChild: true,
        id: '0',
        isFile: false,
        name: "Files",
        parentId: null,
        size: 1779448,
        type: "folder"
    },
    {
        dateCreated: new Date("2023-11-15T19:02:02.3419426+05:30"),
        dateModified: new Date("2024-01-08T16:55:20.9464164+05:30"),
        filterPath: "\\",
        hasChild: false,
        id: '1',
        isFile: false,
        name: "Archives",
        parentId: '0',
        size: 680786,
        type: "folder"
    },
    {
        dateCreated: new Date("2023-11-15T19:02:02.3419426+05:30"),
        dateModified: new Date("2024-01-08T16:55:20.9464164+05:30"),
        filterPath: "\\",
        hasChild: false,
        id: "2",
        isFile: false,
        name: "Audio",
        parentId: "0",
        size: 20,
        type: "folder"
    },
    {
        dateCreated: new Date("2023-11-15T19:02:02.3419426+05:30"),
        dateModified: new Date("2024-01-08T16:55:20.9464164+05:30"),
        filterPath: "\\",
        hasChild: false,
        id: "3",
        isFile: false,
        name: "Video",
        parentId: "0",
        size: 6172,
        type: "folder"
    },
    {
        dateCreated: new Date("2023-11-15T19:02:02.3419426+05:30"),
        dateModified: new Date("2024-01-08T16:55:20.9464164+05:30"),
        filterPath: "\\Archives\\",
        hasChild: false,
        id: "4",
        isFile: true,
        name: "EJ2_File_Manager",
        parentId: "1",
        size: 12403,
        type: ".docx"
    },
    {
        dateCreated: new Date("2023-11-15T19:02:02.3419426+05:30"),
        dateModified: new Date("2024-01-08T16:55:20.9464164+05:30"),
        filterPath: "\\Archives\\",
        hasChild: false,
        id: "5",
        isFile: true,
        name: "EJ2_File_Manager",
        parentId: "1",
        size: 90099,
        type: ".pdf"
    },
    {
        dateCreated: new Date("2023-11-15T19:02:02.3419426+05:30"),
        dateModified: new Date("2024-01-08T16:55:20.9464164+05:30"),
        filterPath: "\\Archives\\",
        hasChild: false,
        id: "6",
        isFile: true,
        name: "File_Manager_PPT",
        parentId: "1",
        size: 578010,
        type: ".pptx"
    },
    {
        dateCreated: new Date("2023-11-15T19:02:02.3419426+05:30"),
        dateModified: new Date("2024-01-08T16:55:20.9464164+05:30"),
        filterPath: "\\Archives\\",
        hasChild: false,
        id: "7",
        isFile: true,
        name: "File_Manager",
        parentId: "1",
        size: 274,
        type: ".txt"
    },
    {
        dateCreated: new Date("2023-11-15T19:02:02.3419426+05:30"),
        dateModified: new Date("2024-01-08T16:55:20.9464164+05:30"),
        filterPath: "\\Audio\\",
        hasChild: false,
        id: "8",
        isFile: true,
        name: "Music",
        parentId: "2",
        size: 10,
        type: ".mp3"
    },
    {
        dateCreated: new Date("2023-11-15T19:02:02.3419426+05:30"),
        dateModified: new Date("2024-01-08T16:55:20.9464164+05:30"),
        filterPath: "\\Audio\\",
        hasChild: false,
        id: "9",
        isFile: true,
        name: "Sample_Music",
        parentId: "2",
        size: 10,
        type: ".mp3"
    },
    {
        dateCreated: new Date("2023-11-15T19:02:02.3419426+05:30"),
        dateModified: new Date("2024-01-08T16:55:20.9464164+05:30"),
        filterPath: "\\Video\\",
        hasChild: false,
        id: "10",
        isFile: true,
        name: "Demo_Video",
        parentId: "3",
        size: 10,
        type: ".mp4"
    },
    {
        dateCreated: new Date("2023-11-15T19:02:02.3419426+05:30"),
        dateModified: new Date("2024-01-08T16:55:20.9464164+05:30"),
        filterPath: "\\Video\\",
        hasChild: false,
        id: "11",
        isFile: true,
        name: "Sample_Video",
        parentId: "3",
        size: 10,
        type: ".mp4"
    }
];
var fileObject = new ej.filemanager.FileManager({
    fileSystemData: resultData,
    toolbarSettings: { items: ['NewFolder', 'Cut', 'Copy', 'Paste', 'Delete', 'Rename', 'SortBy', 'Refresh', 'Selection', 'View', 'Details'], visible: true },
    contextMenuSettings: { file: ["Open", "|", "Cut", "Copy", "Paste", "Delete", "Rename", "|", "Details"], folder: ["Open", "|", "Cut", "Copy", "Paste", "|", "Delete", "Rename", "|", "Details"], layout: ["SortBy", "View", "Refresh", "|", "Paste", "|", "NewFolder", "|", "Details", "|", "SelectAll"], visible: true },
    height: '380px'
});
fileObject.appendTo('#filemanager');