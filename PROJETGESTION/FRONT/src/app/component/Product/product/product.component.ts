import { Component, OnInit } from '@angular/core';
import {ProductService} from  '../../../service/product.service';
import {Product} from '../../../model/product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Product[]= [];
  searchTermproduct:string='';
  constructor(public productService: ProductService) { }


  ngOnInit(): void {
    this.productService.getAll().subscribe((data:Product[])=>{
      this.product=data;
      console.log(this.product);
  })
  }

}
