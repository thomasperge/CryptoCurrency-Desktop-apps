const { app, BrowserWindow, ipcMain, nativeTheme } = require('electron')
const path = require('path')

function createWindow () {
  const win = new BrowserWindow({
    frame: false,
    title: 'CryptoCurrency 0.1.0 (92)',
    icon: path.join(__dirname, "./assets/icon.ico"),
    alwaysOnTop: true,
    setVisibleOnAllWorkspaces: true,
    refresh: 1000,
    width: 415,
    height: 650,
    minWidth: 415, 
    minHeight: 650,
    maxWidth: 515,
    maxHeight: 750,
    // resizable: false,
    autoHideMenuBar: true,
    titleBarStyle: 'hidden',
    titleBarOverlay: {
      color: '#18181c',
      symbolColor: '#fff'
    },
    webPreferences: {
      preload: path.join(__dirname, './script/preload.js'),
      nodeIntegration: true,
    },
  })
  win.loadFile('index.html')

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



// Run Code for Windows, Mac and Linux:
// Mac: npm run package-mac
// Windows: npm run package-win
// Linus: npm run package-linux