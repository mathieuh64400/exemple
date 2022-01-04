import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import  { DemandeService} from '../../../service/demande.service';

@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css']
})
export class DemandeComponent implements OnInit {
  forms:any=FormGroup;
  constructor( public messageService: DemandeService,
    private router: Router) { }

  
  ngOnInit(): void {
    this.forms = new FormGroup({
      Nom: new FormControl('', [Validators.required]),
      description: new FormControl('', Validators.required),
      pseudo: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      type: new FormControl('',Validators.required),
      nature: new FormControl('',Validators.required)
  })
  }
  get f(){
    return this.forms.controls;
  }
  submit(){
    console.log(this.forms.value);
    this.messageService.create(this.forms.value).subscribe(res => {
         console.log('Post created successfully!');
         this.router.navigateByUrl('/demande');
    }
    )
}
}
