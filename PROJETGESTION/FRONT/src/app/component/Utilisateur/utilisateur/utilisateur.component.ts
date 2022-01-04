import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../../../model/utilisateur';
import { UtilisateurService } from '../../../service/utilisateur.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {

  searchTerm :string=''; 
  utilisateurs: Utilisateur[]= [];
    
   constructor(public utilisateurService:UtilisateurService) { }
 
   ngOnInit(): void {
     this.utilisateurService.getAll().subscribe((data:Utilisateur[])=>{
       this.utilisateurs=data;
       console.log(this.utilisateurs);
   })
   }
}
