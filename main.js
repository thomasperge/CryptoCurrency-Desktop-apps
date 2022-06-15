const { app, BrowserWindow, ipcMain, nativeTheme } = require('electron')
const path = require('path')

function createWindow () {
  const win = new BrowserWindow({
    frame: true,
    title: 'CryptoCurrency 0.1.0 (87)',
    width: 375,
    height: 625,
    minWidth: 375, 
    maxWidth: 625,
    minHeight: 650,
    maxHeight: 850,
    // resizable: false,
    autoHideMenuBar: true,
    backgroundColor: '#2e2c29',
    titleBarStyle: 'hidden',
    titleBarOverlay: {
      color: '#000',
      symbolColor: '#fff'
    },
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('index.html')

  ipcMain.handle('dark-mode:toggle', () => {
    if (nativeTheme.shouldUseDarkColors) {
      nativeTheme.themeSource = 'light'
    } else {
      nativeTheme.themeSource = 'dark'
    }
    return nativeTheme.shouldUseDarkColors
  })

  ipcMain.handle('dark-mode:system', () => {
    nativeTheme.themeSource = 'system'
  })
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})