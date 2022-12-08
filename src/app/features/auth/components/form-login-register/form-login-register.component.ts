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

  //creación del formulario reactivo
  form: FormGroup;
  login: boolean = false;
  register: boolean = false;
  
  constructor(private fb: FormBuilder){
    this.form = fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]]
    })
  }

  //al inicializar el componente verificamos el titulo brindado por input al componente
  ngOnInit(): void {
    this.verifyTitle();
  }

  //método condicional, devuelve un booleano distinto según el título proporcionado
  verifyTitle(){
    this.title === "Inicio de sesión" ? 
    this.login = true
    : 
    this.register = true;
  }

  //emitimos los resultados cuando se hace "submit" al form para que el componente padre pueda obtener el $event y encargarse de su tarea correspondiente (login o registro)
  sendEvent(){
    this.onSendForm.emit(this.form.value);
  }

  //getters
  get email(){
    return this.form.get("email");
  }

  get password(){
    return this.form.get("password");
  }
}
