import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
   
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from '../model/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiURL = "http://localhost:3050/api/produit";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<any> {

    return this.httpClient.get(this.apiURL )

    .pipe(
      catchError(this.errorHandler)
    )
  }
     
  create(post:Product): Observable<any> {

    return this.httpClient.post(this.apiURL + 's', JSON.stringify(post), this.httpOptions)

    .pipe(
      catchError(this.errorHandler)
    )
  }  
     
  find(id:number): Observable<any> {

    return this.httpClient.get(this.apiURL + '/' + id)

    .pipe(
      catchError(this.errorHandler)
    )
  }
     
  update(id:number, post:Product): Observable<any> {

    return this.httpClient.put(this.apiURL + '/' + id, JSON.stringify(post), this.httpOptions)

    .pipe(
      catchError(this.errorHandler)
    )
  }
     
  delete(id:number){
    return this.httpClient.delete(this.apiURL + '/' + id, this.httpOptions)

    .pipe(
      catchError(this.errorHandler)
    )
  }
    


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

