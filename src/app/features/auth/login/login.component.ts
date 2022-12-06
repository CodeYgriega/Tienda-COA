import { Component } from '@angular/core';
import { LoginData } from 'src/app/core/models/login-data';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private authService: AuthService){ }

  login(formData: LoginData){
    console.log(formData);
  }
}
