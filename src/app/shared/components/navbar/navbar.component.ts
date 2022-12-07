import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Logout_Action } from 'src/app/core/ngrx/actions/auth.actions';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  
  constructor(
    private authService: AuthService,
    private store: Store
    ){ }

  logOut(){
    this.authService.logOut();

    this.store.dispatch(Logout_Action());

    //this.authService.removeToken();
  }
}
