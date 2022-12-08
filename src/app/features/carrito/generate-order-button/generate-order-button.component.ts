import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/core/models/product';
import { Create_Order_For_Buy_Action, Create_Order_For_Buy_Error_Action, Create_Order_For_Buy_Success_Action } from 'src/app/core/ngrx/actions/cart.actions';
import { FirebaseService } from 'src/app/core/services/firebase/firebase.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-generate-order-button',
  templateUrl: './generate-order-button.component.html',
  styleUrls: ['./generate-order-button.component.scss']
})
export class GenerateOrderButtonComponent {
  @Input() cart$!: Observable<Product[]>;
  @Input() disableButton!: any;

  idCart!: string;
  productsInCart!: string[];

  constructor(
    private firebaseService: FirebaseService,
    private store: Store
    ){}

  generateOrder(){

    this.store.dispatch(Create_Order_For_Buy_Action());

    //nos subscribimos al observable y lo mapeamos para guardar en una variable unicamente los id de los productos del carrito 
    this.cart$.subscribe((res: Product[]) => {
      this.productsInCart = res.map((product: Product) => product.id);
    });

    //creacion del documento "Carts" (en Firebase)
    this.firebaseService.addCart({
      status_completed: false
    })
      .then((res: any) => {
        //almacenamos el id del cart creado para luego usarlo en el siguiente paso
        this.idCart = res.id;
        
          //si todo sale bien, sigue con la creacion del documento "Product_carts"
          this.firebaseService.addProductCarts({
            product_id: this.productsInCart, //
            cart_id: this.idCart, //usamos el id del cart creado anteriormente para identificar el "cart_id"
            quantity: 1
          })
            .then((res: any) => {
                this.store.dispatch(Create_Order_For_Buy_Success_Action());
                Swal.fire({
                  icon: 'success',
                  html: '¡Orden de compra realizada con éxito! <br> Tu pedido será procesado en breve.',
                  confirmButtonText: 'OK'
                });
              })
              .catch((err: Error) => {
                this.store.dispatch(Create_Order_For_Buy_Error_Action());
                Swal.fire({
                  icon: 'error',
                  html: 'Algo salió mal durante la petición. <br> Por favor vuelva a intentarlo',
                  confirmButtonText: 'OK'
                });
              });
      })
      .catch((err: Error) => {
        this.store.dispatch(Create_Order_For_Buy_Error_Action());
        Swal.fire({
          icon: 'error',
          html: 'Algo salió mal durante la petición. <br> Por favor vuelva a intentarlo',
          confirmButtonText: 'OK'
        });
      });
  }
}
