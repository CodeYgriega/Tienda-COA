import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LoginData } from 'src/app/core/models/login-data';
import { Register_Request_Action, Register_Request_Error_Action, Register_Request_Success_Action } from 'src/app/core/ngrx/actions/auth.actions';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(
              private authService: AuthService,
              private router: Router,
              private store: Store
              ){ }

  register(formData: LoginData){

    this.store.dispatch(Register_Request_Action());

    this.authService.register(formData)
      .then((res: any) => {
        
        this.store.dispatch(Register_Request_Success_Action());

        Swal.fire({
          icon: 'success',
          html: '¡ Te registraste correctamente en la aplicación! <br> Ahora puedes iniciar sesión',
          confirmButtonText: 'Vamos'
        });

        this.router.navigate(["/auth/login"])
      })
      .catch((err: Error) => {
        console.log(err);

        this.store.dispatch(Register_Request_Error_Action());

        Swal.fire({
          icon: 'error',
          html: 'Algo salió mal durante la petición. <br> Por favor vuelva a intentarlo nuevamente',
          cancelButtonText: 'Ok'
        }); 
      })
  }
}
