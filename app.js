const {shell} = require('electron')
thispc = () => {
    shell.openExternal('\\')
}
chrome = () => {
    shell.openExternal('C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe')
}
vscode = () => {
    shell.openExternal('C:\\Program Files\\Microsoft VS Code\\Code.exe')
}
telegram = () => {
    shell.openExternal('D:\\Software\\PC\\Windows\\Telegram\\Telegram.exe')
}