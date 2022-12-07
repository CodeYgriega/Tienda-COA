import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../models/product';

@Injectable({
  providedIn: 'root'
})
export class HttpApiService {

  DB_PATH: string = "https://coa-challenge-oliver-yanicelli-default-rtdb.firebaseio.com/";
  PRODUCTS_PATH: string = "products.json";

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get(`${this.DB_PATH}${this.PRODUCTS_PATH}`);
  }

  postProduct(product: Product){
    return this.http.post(`${this.DB_PATH}${this.PRODUCTS_PATH}`, product);
  }
}
