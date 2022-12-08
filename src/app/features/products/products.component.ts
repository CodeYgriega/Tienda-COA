import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product';
import { FirebaseService } from 'src/app/core/services/firebase/firebase.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{

  products!: Product[];

  constructor(private service: FirebaseService){ }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
      this.service.getAllProducts().subscribe(res => {
          this.products = res;
      })
  }
}
