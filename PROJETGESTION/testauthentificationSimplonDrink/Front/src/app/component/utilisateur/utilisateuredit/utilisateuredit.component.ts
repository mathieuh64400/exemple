import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Utilisateur } from 'src/app/model/utilisateur';
import { UtilisateurService } from 'src/app/service/utilisateur.service';

@Component({
  selector: 'app-utilisateuredit',
  templateUrl: './utilisateuredit.component.html',
  styleUrls: ['./utilisateuredit.component.css']
})
export class UtilisateureditComponent implements OnInit {
_id: string='';
post: any;
form:any = FormGroup;
  constructor(
    public utilisateurService: UtilisateurService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this._id = this.route.snapshot.params['postId'];
    console.log(this._id);
    
    this.utilisateurService.find(this._id).subscribe((data: Utilisateur)=>{
    this.post = data;
    console.log(data, this.post)
    });
    
    this.form = new FormGroup({
      nom: new FormControl('', [Validators.required]),
      prenom: new FormControl('', [Validators.required]),
      pseudo: new FormControl('', Validators.required),
      preference: new FormControl('', Validators.required),
      promotion: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      lieu: new FormControl('', Validators.required),
    });
  }
  get f(){
    return this.form.controls;
  }
     
  submit(){
    console.log(this.form.value);
    this.utilisateurService.update(this._id, this.form.value).subscribe(res => {
         alert('Utilisateur mis a jour avec succes!');
         this.router.navigateByUrl('/utilisateur');
    })
  }
}
