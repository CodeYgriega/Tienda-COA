import { Component } from '@angular/core';
import { FirebaseService } from '../core/services/firebase/firebase.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent {

  constructor(private s: FirebaseService){ }

  /*
    s.addProduct({
      name: "CPU PC Gamer XTREME-GAMING",
      price: 169.999,
      img: "https://www.venta.com.mx/sh-img/5deefb2f0a06e_c4jpg_cpu%2Bgamer.jpg",
      description: "CPU Gamer con Procesador Ryzen 5 3400g 1TB 8GB de RAM."
    })
      .then((res) => console.log(res))
      .catch(err => console.log(err))
  */

}
