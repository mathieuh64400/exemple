import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './model/product';

@Pipe({
  name: 'productbyname'
})
export class ProductbynamePipe implements PipeTransform {

  transform(value: Product[], name: string): Product[] {
    console.log(value,name);
    
    return value.filter((prod)=>{
      if(prod.name.includes(name))return prod;
    else return null 
  });
  }

}
