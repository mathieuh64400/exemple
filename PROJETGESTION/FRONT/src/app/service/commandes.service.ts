import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
   
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
    
import { Commandes } from '../model/commandes';
@Injectable({
  providedIn: 'root'
})
export class CommandesService {
  private apiURL = "http://localhost:3050/api/commande";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }
  // getAll(): Observable<any> {

  //   return this.httpClient.get(this.apiURL )

  //   .pipe(
  //     catchError(this.errorHandler)
  //   )
  // }
  create(post:Commandes): Observable<any> {

    return this.httpClient.post(this.apiURL, JSON.stringify(post), this.httpOptions)

    .pipe(
      catchError(this.errorHandler)
    )
  }  

  // delete(id:number){
  //   return this.httpClient.delete(this.apiURL + '/' + id, this.httpOptions)

  //   .pipe(
  //     catchError(this.errorHandler)
  //   )
  // } 
  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}
