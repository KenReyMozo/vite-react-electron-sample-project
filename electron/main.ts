import { app, BrowserWindow, ipcMain, nativeTheme } from 'electron'
// import path from 'node:path'
import path from 'path'

// The built directory structure
//
// ├─┬─┬ dist
// │ │ └── index.html
// │ │
// │ ├─┬ dist-electron
// │ │ ├── main.js
// │ │ └── preload.js
// │
process.env.DIST = path.join(__dirname, '../dist')
process.env.VITE_PUBLIC = app.isPackaged ? process.env.DIST : path.join(process.env.DIST, '../public')


let win: BrowserWindow | null
// 🚧 Use ['ENV_NAME'] avoid vite:define plugin - Vite@2.x
const VITE_DEV_SERVER_URL = process.env['VITE_DEV_SERVER_URL']

function createWindow() {

  win = new BrowserWindow({
    icon: path.join(process.env.VITE_PUBLIC, 'electron-vite.svg'),
    width : 1200,
    height : 800,
    minHeight : 720,
    minWidth : 600,
    webPreferences: {
      nodeIntegration : true,
      preload: path.join(__dirname, 'preload.js'),
      webSecurity : false,
      contextIsolation: false,
    },
  })

  ipcMain.handle("dark-mode:toggle", () => {
    if(nativeTheme.shouldUseDarkColors){
      nativeTheme.themeSource = "dark"
    }
    else{
      nativeTheme.themeSource = "light"
    }
  })

  ipcMain.handle('dark-mode:system', () => {
    nativeTheme.themeSource = 'system'
  })

  // Test active push message to Renderer-process.
  win.webContents.on('did-finish-load', () => {
    win?.webContents.send('main-process-message', (new Date).toLocaleString())
  })
  win.webContents.on('did-finish-load', () => {
    win?.webContents.send('main-process-message', __dirname)
  })
  win.webContents.on('did-finish-load', () => {
    win?.webContents.send('main-process-message', VITE_DEV_SERVER_URL)
  })
  win.webContents.on('did-finish-load', () => {
    win?.webContents.send('main-process-message', app.isPackaged)
  })
  win.webContents.on('did-finish-load', () => {
    win?.webContents.send('main-process-message', path.join(process.env.DIST, 'index.html'))
  })
  // Listen for the DevTools being opened or closed
  win.webContents.on('devtools-opened', () => {
    // DevTools opened, adjust window size
    win?.setSize(1500, 800);
  })

  win.webContents.on('devtools-closed', () => {
    // DevTools closed, reset window size
    win?.setSize(1200, 600);
  })


  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL)
  } else {
    // win.loadFile('dist/index.html')
    win.loadFile(path.join(process.env.DIST, 'index.html'))
    // win.loadFile(path.join(__dirname, 'index.html'))
  }

  win.webContents.openDevTools()
}

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
    win = null
  }
})

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

// app.on('ready', async () => {
//   const is_online = await isOnline()
  
// })

app.whenReady().then(createWindow)
