import { Pipe, PipeTransform } from '@angular/core';
import {Post} from './model/post';
@Pipe({
  name: 'eventbyname'
})
export class EventbynamePipe implements PipeTransform {

  transform(value: Post[], title: string): Post[] {
    return  value.filter((event)=>{
      if(event.titre.includes(title))return event;
    else return null 
  });
  }

}

