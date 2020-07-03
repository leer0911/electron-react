import { ipcMain, BrowserWindow } from 'electron';

export default function runMessagingService(mainWindow: BrowserWindow) {
  ipcMain.on('window-toggle-maximize', () => {
    if (mainWindow.isMaximized()) {
      mainWindow.unmaximize();
    } else {
      mainWindow.maximize();
    }
  });

  ipcMain.on('window-minimize', () => {
    mainWindow.minimize();
  });

  ipcMain.on('window-close', () => {
    mainWindow.close();
  });
}
