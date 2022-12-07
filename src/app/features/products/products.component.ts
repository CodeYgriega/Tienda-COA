import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product';
import { HttpApiService } from 'src/app/core/services/http-api/http-api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{

  products!: Product[];

  constructor(private service: HttpApiService){

    /*service.postProduct({
      id: 7,
      name: "CPU PC Gamer XTREME-GAMING",
      price: 169.999,
      img: "https://www.venta.com.mx/sh-img/5deefb2f0a06e_c4jpg_cpu%2Bgamer.jpg",
      description: "CPU Gamer con Procesador Ryzen 5 3400g 1TB 8GB de RAM."
    }).subscribe((res: any) => {
      console.log(res);
    })
    */
  }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    this.service.getProducts().subscribe((res: any) => {
        const productsArray: Product[] = Object.values(res);
        this.products = productsArray;
      });
  }
}
