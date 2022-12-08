import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/core/models/product';
import { Add_Product_In_Cart_Action, Delete_Product_In_Cart_Action } from 'src/app/core/ngrx/actions/cart.actions';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Input() classButton!: string;
  @Input() buttonText!: string;

  constructor(
    private store: Store
    ){}

  captureProduct(product: Product){
    if(this.buttonText === "Agregar al carrito"){

      this.store.dispatch(Add_Product_In_Cart_Action({ product: product }));

      Swal.fire({
        icon: 'success',
        html: `¡${product.name} se agregó al carrito!`,
        confirmButtonText: 'OK'
      });
    }
    else{
      const { id } = product;
      this.store.dispatch(Delete_Product_In_Cart_Action({ id: id }));

      Swal.fire({
        icon: 'success',
        html: 'Se eliminó correctamente del carrito.',
        confirmButtonText: 'OK'
      });
    }
  }
}
