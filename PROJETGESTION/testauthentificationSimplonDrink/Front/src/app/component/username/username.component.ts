import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// import '*' as EventEmitter from 'events';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {
  @Output() userNameEvent =new EventEmitter<string>()
  username=''
  constructor() { }

  ngOnInit(): void {
  }
  setUserName(): void {
    this.userNameEvent.emit(this.username)
  }
}
