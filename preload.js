const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('autochord', {
  isAlwaysOnTop: () => ipcRenderer.invoke('aot:get'),
  toggleAlwaysOnTop: () => ipcRenderer.invoke('aot:toggle'),
});
