const {app, BrowserWindow, Menu}  = require('electron');
const url = require('url');
const path = require('path');


if(process.env.NODE_ENV !== 'production'){
require('electron-reload')(__dirname, {
    electron: path.join(__dirname, '../node_modules', '.bin', 'electron')
})
}


let mainWindow

app.on('ready', () => {
    mainWindow =  new BrowserWindow({});
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname,'views/index.html'),
        protocol: 'file',
        slashes: true
    }));

    const mainMenu = Menu.buildFromTemplate(templateMenu);
    Menu.setApplicationMenu(mainMenu);
});

const templateMenu = [
    {
        label: 'File',
        submenu: [
            {
                label: 'New Product',
                accelerator: 'Ctrl+N',
                click(){
                    alert('New Product');
                }
            }
        ]
    }
]