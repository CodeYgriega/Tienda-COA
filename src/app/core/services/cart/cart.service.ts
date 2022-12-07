import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { Product } from '../../models/product';

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

    Swal.fire({
      icon: 'success',
      html: `¡${product.name} se agregó al carrito!`,
      confirmButtonText: 'OK'
    });
  }

  deleteOneInTheCart(id: number){
    const cartFiltered = this.cart.filter((product: Product) => product.id !== id);
    this.cart = cartFiltered;
    
    Swal.fire({
      icon: 'success',
      html: 'Se eliminó correctamente del carrito.',
      confirmButtonText: 'OK'
    });
    return this.cart;
  }
}
