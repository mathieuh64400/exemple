import { Component } from '@angular/core';
import { IpcRenderer } from 'electron';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FRONT';
 
  
  // public playPingPong() {
  //   if(this._electronService.isElectronApp) {
  //       let pong: string = this._electronService.ipcRenderer.sendSync('ping');
  //       console.log(pong);
  //   }
}

