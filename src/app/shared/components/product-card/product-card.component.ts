import { Component, Input } from '@angular/core';
import { Product } from 'src/app/core/models/product';
import { CartService } from 'src/app/core/services/cart/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Input() classButton!: string;
  @Input() buttonText!: string;

  constructor(private cartService: CartService){}

  captureProduct(product: Product){
    if(this.buttonText === "Agregar al carrito"){
      this.cartService.setOneInTheCart(product);
    }
    else{
      const { id } = product;
      this.cartService.deleteOneInTheCart(id);
    }
  }
}
