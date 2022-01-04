import { Component, OnInit } from '@angular/core';
import { Demande } from 'src/app/model/demande';
import { DemandeService } from 'src/app/service/demande.service';

@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css']
})
export class DemandeComponent implements OnInit {
  demandes: Demande[] = [];
  constructor(public carteservice: DemandeService) { }

  ngOnInit(): void {
    this.carteservice.getAll().subscribe((data: Demande[])=>{
      this.demandes = data;
      console.log(this.demandes);
    })  
  }
  deleteDemande(_id?:string){
    if (!_id) return
    this.carteservice.delete(_id).subscribe(res => {
         this.demandes= this.demandes.filter(item => item._id !== _id);
        alert('Demandes deleted successfully!');
    })
  }

}
