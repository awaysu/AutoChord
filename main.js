const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let win;
function createWindow() {
  win = new BrowserWindow({
    width: 520,
    height: 360,
    minWidth: 300,
    minHeight: 220,
    alwaysOnTop: true,
    autoHideMenuBar: true,
    backgroundColor: '#1b1f27',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      autoplayPolicy: 'no-user-gesture-required',
    },
  });
  win.setAlwaysOnTop(true, 'screen-saver');
  win.loadFile('index.html');
}

ipcMain.handle('aot:get', () => win.isAlwaysOnTop());
ipcMain.handle('aot:toggle', () => {
  const v = !win.isAlwaysOnTop();
  win.setAlwaysOnTop(v, 'screen-saver');
  return v;
});

app.whenReady().then(createWindow);
app.on('window-all-closed', () => app.quit());
