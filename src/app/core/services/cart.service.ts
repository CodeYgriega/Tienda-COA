import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Product[] = [];

  constructor() { }

  getCart(){
    return this.cart;
  }

  setOneInTheCart(product: Product){
    this.cart.push(product);
  }

  deleteOneInTheCart(id: number){
    const cartFiltered = this.cart.filter((product: Product) => product.id !== id);
    this.cart = cartFiltered;
  }
}
