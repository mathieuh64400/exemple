import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ProductService } from 'src/app/service/product.service';
@Component({
  selector: 'app-productcreate',
  templateUrl: './productcreate.component.html',
  styleUrls: ['./productcreate.component.css']
})
export class ProductcreateComponent implements OnInit {
  form:any= FormGroup;
  constructor(public pbcarteservice: ProductService,
    private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      titre: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      description:new FormControl('', [Validators.required]),
      imageUrl: new FormControl('', [Validators.required]), 
      date:new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      quantity:new FormControl('', [Validators.required]),
      etat:new FormControl('', [Validators.required]),
      NomConsommateur:new FormControl('', [Validators.required]),
     
    });
  }
   
  get f(){
    return this.form.controls;
  }
    
  submit(){
    console.log(this.form.value);
    this.pbcarteservice.create(this.form.value).subscribe(res => {
         alert('Produit created successfully!');
         this.router.navigateByUrl('/product');
    })
  }


}
