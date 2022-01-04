import { Component, OnInit } from '@angular/core';
import { Commandes } from 'src/app/model/commandes';
import { CommandesService } from 'src/app/service/commandes.service';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent implements OnInit {
 commandes: Commandes[] = [];
  constructor(public carteservice: CommandesService) { }

  ngOnInit(): void {
    this.carteservice.getAll().subscribe((data: Commandes[])=>{
      this.commandes = data;
      console.log(this.commandes);
    })  
  }
  deleteCommandes(_id?:string){
    if (!_id) return
    this.carteservice.delete(_id).subscribe(res => {
         this.commandes= this.commandes.filter(item => item._id !== _id);
        alert('Commandes deleted successfully!');
    })
  }

}
