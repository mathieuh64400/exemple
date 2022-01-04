import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommandesService } from '../../service/commandes.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent implements OnInit {
  forms:any=FormGroup;
  constructor(public messageService: CommandesService,
    private router: Router) { }

  ngOnInit(): void {
    this.forms = new FormGroup({
      name: new FormControl('', [Validators.required]),
     nameprod: new FormControl('', Validators.required),
      imageUrl: new FormControl('', Validators.required),
       quantity: new FormControl('',Validators.required),
      date: new FormControl('', Validators.required),
     
  })
  }
  get f(){
    return this.forms.controls;
  }
  submit(){
    console.log(this.forms.value);
    this.messageService.create(this.forms.value).subscribe(res => {
         console.log('Post created successfully!');
         this.router.navigateByUrl('/choix');
    })
  }

}
