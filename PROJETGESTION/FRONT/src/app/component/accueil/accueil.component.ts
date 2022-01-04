import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { DataService } from '../../service/data.service';
import { IpcRenderer } from 'electron';
// import { ElectronService } from 'ngx-electron';
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  don:Data[]=[];
  message:any ;
  private ipc: IpcRenderer

  // private electronService: ElectronService;
  constructor(public dataserv:DataService) {  
    if ((<any>window).require) {
      try {
        this.ipc = (<any>window).require('electron').ipcRenderer;
      } catch (e) {
        throw e;
      }
    } else {
      console.warn('App not running inside Electron!');
    }
    this.message={
    titre:"Simplon's Drink",
    soustitre:"Bienvenue sur l'application de gestion du stock de café."}
    // this.electronService = new ElectronService();
  }
  openModal(){
    console.log("Open a modal");
    this.ipc.send("openModal");
  }
//   private closeApp() {
//     this.electronService.remote.getCurrentWindow().close();
// }
// private isFullScreen(): boolean {
//     return this.electronService.remote.getCurrentWindow().isMaximized();
// }
// private maximizeApp() {
//     this.electronService.remote.getCurrentWindow().maximize();
// }
// private unMaximizeApp() {
//     this.electronService.remote.getCurrentWindow().unmaximize();
// }
// private reduceApp() {
//     this.electronService.remote.getCurrentWindow().minimize();
// }
  ngOnInit(): void {
  }

}
