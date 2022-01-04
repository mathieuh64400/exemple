import { Component, OnInit } from '@angular/core';
import {UtilisateurService} from '../../../service/utilisateur.service';

import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-createutilisateur',
  templateUrl: './createutilisateur.component.html',
  styleUrls: ['./createutilisateur.component.css']
})
export class CreateutilisateurComponent implements OnInit {
  forms:any=FormGroup;
  constructor(
    public utilisateurService: UtilisateurService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.forms = new FormGroup({
      nom: new FormControl('', [Validators.required]),
      prenom: new FormControl('', Validators.required),
      pseudo: new FormControl('', Validators.required),
      preference: new FormControl('', Validators.required),
      promotion: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      lieu: new FormControl('',Validators.required),
      img:new FormControl('',Validators.required)
  })
  }
  get f(){
    return this.forms.controls;
  }
  submit(){
    console.log(this.forms.value);
    this.utilisateurService.create(this.forms.value).subscribe(res => {
         console.log('Post created successfully!');
         this.router.navigateByUrl('/accueil');
    })
  }

}
