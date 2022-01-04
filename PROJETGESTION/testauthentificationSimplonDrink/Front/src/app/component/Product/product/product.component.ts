import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  cartes: Product[] = [];
  constructor(public carteservice: ProductService) { }

  ngOnInit(): void {
    this.carteservice.getAll().subscribe((data: Product[])=>{
      this.cartes = data;
      console.log(this.cartes);
    })  
  }
  deletePost(_id?:string){
    if (!_id) return
    this.carteservice.delete(_id).subscribe(res => {
         this.cartes= this.cartes.filter(item => item._id !== _id);
        alert('Product deleted successfully!');
    })
  }
}
