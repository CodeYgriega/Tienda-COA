import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ProductCardComponent } from './components/product-card/product-card.component';



@NgModule({
  declarations: [
    NavbarComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    ProductCardComponent
  ]
})
export class SharedModule { }
