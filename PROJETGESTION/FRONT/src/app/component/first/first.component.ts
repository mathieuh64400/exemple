import { Component, OnInit } from '@angular/core';
// import {IpcRenderer} from 'electron';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
//  private ipc : IpcRenderer
  constructor() {} 

//     if (( window) .require) {
//       try {
//         this.ipc = ( window) .require ('electron'). ipcRenderer;
//       } catch (e) {
//         return e;
//       }
//     } else {
//     console.warn ('L application ne fonctionne pas dans Electron!');
//   }
//   }

 

  ngOnInit(): void {
  }
//   openModal () {
//     console.log ("Ouvrir un modal");
//     this.ipc.send ("openModal");
//   }
} 

