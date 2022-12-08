import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/core/models/product';
import { FirebaseService } from 'src/app/core/services/firebase/firebase.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{

  products$!: Observable<Product[]>;

  constructor(private service: FirebaseService){ }

  //al inicializar el componente, ejecutamos la funcion encargada de traer todos los productos guardados en Firebase
  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    this.products$ = this.service.getAllProducts();
  }
}
