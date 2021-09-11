const {app,BrowserWindow} = require('electron')
app.whenReady().then(()=>{
    const main = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
        },
        width:150,
        height:550,
        minWidth:150,
        minHeight:550,
        maxWidth:150,
        maxHeight:550,
        frame:false,
        transparent:true,
        icon:'favicon.ico'
    })
    main.loadFile('index.html')
})