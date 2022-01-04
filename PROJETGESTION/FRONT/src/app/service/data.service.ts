import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataI } from '../model/data-i';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 donnee:Array<DataI>=[];
  constructor(private http:HttpClient) {
    this.getData();
   }
   getData(p:string=''){
    this.http.get<Array<DataI>>('assets/data/data.json').subscribe(
      donnees => {
        console.log("Les données récupérées par la requéte", donnees);
        this.donnee = donnees;
      },
      erreur => console.log(erreur)
  );
}}