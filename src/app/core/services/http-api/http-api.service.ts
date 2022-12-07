import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../models/product';

@Injectable({
  providedIn: 'root'
})
export class HttpApiService {

  DB_PATH: string = "https://coa-challenge-oliver-yanicelli-default-rtdb.firebaseio.com/";
  PRODUCTS_PATH: string = "products.json";
  PRODUCTS_CARTS_PATH: string = "product_carts.json";
  CARTS_PATH: string = "carts.json";

  constructor(private http: HttpClient) { }

  //PRODUCTS
  getProducts(){
    return this.http.get(`${this.DB_PATH}${this.PRODUCTS_PATH}`);
  }

  postProduct(product: Product){
    return this.http.post(`${this.DB_PATH}${this.PRODUCTS_PATH}`, product);
  }

  //CARTS
  getCarts(){
    return this.http.get(`${this.DB_PATH}${this.CARTS_PATH}`);
  }

  postCart(cart: any){
    return this.http.post(`${this.DB_PATH}${this.CARTS_PATH}`, cart);
  }

  //PRODUCTS CARTS
  getProductsCarts(){
    return this.http.get(`${this.DB_PATH}${this.PRODUCTS_CARTS_PATH}`);
  }

  postProductsCart(productsCart: any){
    return this.http.post(`${this.DB_PATH}${this.PRODUCTS_CARTS_PATH}`, productsCart);
  }
}
