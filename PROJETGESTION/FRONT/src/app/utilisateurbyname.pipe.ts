import { Pipe, PipeTransform } from '@angular/core';
import {Utilisateur} from './model/utilisateur';
@Pipe({
  name: 'utilisateurbyname'
})
export class UtilisateurbynamePipe implements PipeTransform {

  transform(value: Utilisateur[], nom: string): Utilisateur[] {
    console.log(value,nom);
    
    return value.filter((user)=>{
      if(user.nom.includes(nom))return user;
    else return null 
  });
  }

}
