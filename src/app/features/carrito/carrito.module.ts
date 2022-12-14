import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarritoRoutingModule } from './carrito-routing.module';
import { CarritoComponent } from './carrito.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { GenerateOrderButtonComponent } from './generate-order-button/generate-order-button.component';


@NgModule({
  declarations: [
    CarritoComponent,
    GenerateOrderButtonComponent
  ],
  imports: [
    CommonModule,
    CarritoRoutingModule,
    SharedModule
  ]
})
export class CarritoModule { }
