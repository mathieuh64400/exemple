import { Pipe, PipeTransform } from '@angular/core';
import {Demande} from './model/demande';
@Pipe({
  name: 'messagesbyname'
})
export class MessagesbynamePipe implements PipeTransform {

  transform(value: Demande[], name: string): Demande[] {
    return  value.filter((note)=>{
      if(note.Nom.includes(name))return note;
    else return null 
  });
  };
  }
