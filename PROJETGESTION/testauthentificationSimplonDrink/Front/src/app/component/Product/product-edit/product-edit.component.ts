import { Component, OnInit } from '@angular/core';
import { PbcarteService } from '../../../service/pbcarte.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../../model/product';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
 
  _id: string="";
  product:any;
  form:any= FormGroup;
  
  constructor(
    public pbcarteservice: PbcarteService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    // console.log("hello");

    this._id = this.route.snapshot.params['postId'];
    // console.log(this.route.snapshot.params['postId']);
    
    this.pbcarteservice.find(this._id).subscribe((data: Product)=>{
       this.product = data;
       console.log(this.product);
       
  })
  this.form = new FormGroup({
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
  this.pbcarteservice.update(this._id, this.form.value).subscribe((res:any) => {
       alert('Produit updated successfully!');
       this.router.navigateByUrl('/produit');
  })
}

}
