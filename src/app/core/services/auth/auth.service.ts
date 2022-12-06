import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
  } from '@angular/fire/auth';
import { LoginData } from '../../models/login-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) { }

  logIn({ email, password }: LoginData){
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  register({ email, password }: LoginData){
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  logOut(){
    return signOut(this.auth);
  }
}
