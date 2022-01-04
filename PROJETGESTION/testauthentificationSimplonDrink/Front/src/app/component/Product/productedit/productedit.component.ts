import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/model/product';
@Component({
  selector: 'app-productedit',
  templateUrl: './productedit.component.html',
  styleUrls: ['./productedit.component.css']
})
export class ProducteditComponent implements OnInit {
  _id: string="";
  product:any;
  form:any= FormGroup;
  constructor( public service:ProductService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this._id = this.route.snapshot.params['postId'];
    // console.log(this.route.snapshot.params['postId']);
    
    this.service.find(this._id).subscribe((data: Product)=>{
       this.product = data;
       console.log(this.product);
       
  })
  this.form = new FormGroup({
    titre: new FormControl('', [Validators.required]),
    // contenu: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    imageUrl: new FormControl('', Validators.required),
    category: new FormControl('', [Validators.required]),
    quantity:new FormControl('', [Validators.required]),
    description:new FormControl('', [Validators.required]),
    date:new FormControl('', [Validators.required]),
    etat:new FormControl('', [Validators.required]),
    NomConsommateur:new FormControl('', [Validators.required]),
  });
  }

get f(){
  return this.form.controls;
}
   
submit(){
  console.log(this.form.value);
  this.service.update(this._id, this.form.value).subscribe((res:any) => {
       console.log('Post updated successfully!');
       this.router.navigateByUrl('/product');
  })
}

}
