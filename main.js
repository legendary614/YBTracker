const {app, Tray, Menu, desktopCapturer} = require('electron');
const path = require('path');

const iconPath = path.join(__dirname, 'icon.png');
let appIcon = null;

app.on('ready', function(){
  appIcon = new Tray(iconPath);
  var contextMenu = Menu.buildFromTemplate([
    {
      label: "Start",
      click: function() {
        
      }
    },
    {
      label: "Stop",
    },
    { label: 'Quit',
      click: function() {
        app.quit();
      }
    }
  ]);
  appIcon.setToolTip('YBTracker');
  appIcon.setContextMenu(contextMenu);
});
