import { Component, DoCheck, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product';
import { CartService } from 'src/app/core/services/cart/cart.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit, DoCheck {

  cart: Product[] = [];

  numberOfProducts: number = 0;

  totalPrice: number = 0;

  constructor(private cartService: CartService){ }

  ngDoCheck(): void {
    this.getCart();
  }

  ngOnInit(){
    this.getCart();
  }

  getCart(){
    this.cart = this.cartService.getCart();
    this.numberOfProducts = this.cart.length;
    this.totalPrice = this.cart.reduce((acc: number, product: Product) => {
      return acc + product.price;
    }, 0);
  }

}
