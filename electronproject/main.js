const electron =require('electron');
const url =require('url');
const path =require('path');

const {app, BrowserWindow, Menu,ipcMain}=electron;

let mainWindow;
let addWindow;
// listen for app to be ready
app.on('ready',function(){
    // new window:
    mainWindow= new BrowserWindow({width: 800, height: 600})
    // load html into window
    mainWindow.loadURL(url.format({
        pathname:path.join(__dirname,'mainWindow.html'), //file: dirname/mainWindow.html;
        protocol:'file',
        slashes:true
    }));

    // Quit app when closed:
    mainWindow.on('closed',function(){
        app.quit();
    })
    // ipc main traitement:
    ipcMain.on('item:add',function(e,item){
        console.log(item);
        mainWindow.webContents.send('item:add',item);
        addWindow.close();
    })
    // Build menu:
    const mainMenu =Menu.buildFromTemplate(mainMenutemplate);
    // insert menu
    Menu.setApplicationMenu(mainMenu);
});
// traitememnt createAddWindow:
function createAddWindow(){
   // new window:
   addWindow = new BrowserWindow({width: 400, height: 400, title:'add Cities list Items'},   {webPreferences: {
    nodeIntegration: true,
    contextIsolation: false,
    enableRemoteModule: true,
  }})
   // load html into window
   addWindow.loadURL(url.format({
       pathname:path.join(__dirname,'addWindow.html'), //file: dirname/mainWindow.html;
       protocol:'file',
       slashes:true
   }));
   addWindow.on('close',function(){
       addWindow=null;
   })
}
// menu
const mainMenutemplate=[
    {label:'File',
     submenu:[
         {label:'Ajout ville',
            click(){
                createAddWindow();
            }},
         {label:'Copiez',
         role: 'copy'},
         {label:'coller',role:'paste'},
         {label:'effacez',click(){
             mainWindow.webContents('item :clear')
         }},
         {label:'Quitter',
        //  accelerator:process.plateform =='darwin'
          click(){
              app.quit();
          }}
     ]}
    //  {
    //     label: 'View',
    //     submenu: [
           
    //        {
    //           role: 'toggledevtools'
    //        },
    //        {
    //           type: 'separator'
    //        },
    //        {
    //           role: 'resetzoom'
    //        },
    //        {
    //           role: 'zoomin'
    //        },
    //        {
    //           role: 'zoomout'
    //        },
    //        {
    //           type: 'separator'
    //        },
    //        {
    //           role: 'togglefullscreen'
    //        }
    //     ]
    //  }
]
// add developper tools if not in prod:

if(process.env.NODE_ENV !=='production'){
    mainMenutemplate.push({
        label:'Developper Tools',
        submenu:[
            {
                label :' Toggle DevTools',
                click(items, focusedWindow){
                    focusedWindow.toggleDevTools();

                }
            }
        ]

    })
}