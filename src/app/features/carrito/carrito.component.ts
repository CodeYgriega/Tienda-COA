import { Component, DoCheck, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { Product } from 'src/app/core/models/product';
import { AppStore } from 'src/app/core/ngrx/app.store';
import { selectCart } from 'src/app/core/ngrx/selectors/cart.selector';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  cart$!: Observable<Product[]>;

  totalPrice$!: Observable<number>;

  constructor(private store: Store<AppStore>){ }

  ngOnInit(){
    this.getCart();
  }

  getCart(){
    this.cart$ = this.store.select(selectCart);

    this.totalPrice$ = this.cart$.pipe(
      map((products: Product[]) => {
        return products.reduce((acc: number, product: Product) => {
          return acc + product.price;
        }, 0)
      })
    )
       
  }

}
