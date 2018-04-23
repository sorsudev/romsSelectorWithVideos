const electron = require('electron'),
      app = electron.app,
      BrowserWindow = electron.BrowserWindow;

require('electron-reload')(__dirname, {
    electron: require(`${__dirname}/node_modules/electron`)
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        height: 768,
        width: 1266
    });

    mainWindow.setMenu(null);
    mainWindow.webContents.openDevTools();
    mainWindow.setResizable(false);
    mainWindow.loadURL(`file://${app.getAppPath()}/app/views/index.html`);
    mainWindow.on('closed', () => { mainWindow = null; });
});
