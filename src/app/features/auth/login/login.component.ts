import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LoginData } from 'src/app/core/models/login-data';
import { Login_Request_Action, Login_Request_Error_Action, Login_Request_Success_Action } from 'src/app/core/ngrx/actions/auth.actions';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
              private authService: AuthService,
              private router: Router,
              private store: Store
              ){ }

  login(formData: LoginData){

    this.store.dispatch(Login_Request_Action());

    this.authService.logIn(formData)
      .then((res: any) => {
        const { accessToken } = res.user;

        this.store.dispatch(Login_Request_Success_Action( {token: accessToken} ));

        Swal.fire({
          icon: 'success',
          html: 'Login realizado con éxito <br> ¡Ingresaste a la aplicación!',
          confirmButtonText: 'Adelante'
        });

        this.router.navigate(["/products"]);
      })
      .catch((err: Error) => {
        console.log(err);

        this.store.dispatch(Login_Request_Error_Action());

        Swal.fire({
          icon: 'error',
          html: 'Algo salió mal en la petición. <br> Por favor verifica los datos ingresados y vuelve a intentarlo',
          cancelButtonText: 'Volver'
        });

      })
  }
}
