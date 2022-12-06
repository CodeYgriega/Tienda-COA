import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FeaturesComponent } from './features.component';
import { HomeComponent } from './home/home.component';
import { CarritoComponent } from './carrito/carrito.component';

const routes: Routes = [
  {
    path: "",
    component: FeaturesComponent,
    children: [
      {
        path: "cart",
        loadChildren: () => import("./carrito/carrito.module").then(m => m.CarritoModule)
      },
      {
        path: "products",
        loadChildren: () => import("./products/products.module").then(m => m.ProductsModule)
      },
      {
        path: "auth",
        loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule)
      },
      {
        path: "home",
        component: HomeComponent
      },
      {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
