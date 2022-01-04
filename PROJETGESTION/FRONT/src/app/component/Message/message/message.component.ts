import { Component, OnInit } from '@angular/core';
import { DemandeService } from '../../../service/demande.service';
import {Demande} from '../../../model/demande';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  searchTermtype :string=''; 
  messages: Demande[]= [];
  constructor(public messageService: DemandeService) { }

  ngOnInit(): void {
    this.messageService.getAll().subscribe((data:Demande[])=>{
    this.messages=data;
    console.log(this.messages);
})
  }

}
