import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  cart: Product[] = [];

  numberOfProducts!: number;

  constructor(private cartService: CartService){ }

  ngOnInit(){
    this.getCart();
  }

  getCart(){
    this.cart = this.cartService.getCart();
    this.numberOfProducts = this.cart.length;
  }

}
