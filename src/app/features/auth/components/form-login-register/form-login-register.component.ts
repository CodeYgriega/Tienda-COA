import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-login-register',
  templateUrl: './form-login-register.component.html',
  styleUrls: ['./form-login-register.component.scss']
})
export class FormLoginRegisterComponent implements OnInit{
  @Input() title!: string;
  @Input() button!: string;
  @Output() onSendForm: EventEmitter<any> = new EventEmitter();

  form: FormGroup;
  login: boolean = false;
  register: boolean = false;

  constructor(private fb: FormBuilder){
    this.form = fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.verifyTitle();
  }

  verifyTitle(){
    this.title === "Inicio de sesión" ? 
    this.login = true
    : 
    this.register = true;
  }

  sendEvent(){
    this.onSendForm.emit(this.form.value);
  }

  get email(){
    return this.form.get("email");
  }

  get password(){
    return this.form.get("password");
  }
}
