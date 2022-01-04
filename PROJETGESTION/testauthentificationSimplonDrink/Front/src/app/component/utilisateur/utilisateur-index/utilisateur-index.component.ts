import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/model/utilisateur';
import { UtilisateurService } from 'src/app/service/utilisateur.service';

@Component({
  selector: 'app-utilisateur-index',
  templateUrl: './utilisateur-index.component.html',
  styleUrls: ['./utilisateur-index.component.css']
})
export class UtilisateurIndexComponent implements OnInit {
  searchTerm :string=''; 
  utilisateurs: Utilisateur[]= [];
  constructor(public utilisateurService: UtilisateurService) { }

  ngOnInit(): void {
    this.utilisateurService.getAll().subscribe((data:Utilisateur[])=>{
      this.utilisateurs=data;
      console.log(this.utilisateurs);
  })
  }
  delete(_id?:string){
    if (!_id) return
    this.utilisateurService.delete(_id).subscribe(res => {
         this.utilisateurs = this.utilisateurs.filter(item => item._id !== _id);
         alert('Utilisateur deleted successfully!');
    })
  }
}
