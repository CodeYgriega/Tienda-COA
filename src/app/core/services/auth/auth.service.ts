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

  register({ email, password }: LoginData){
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  logIn({ email, password }: LoginData){
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  logOut(){
    return signOut(this.auth);
  }
  
  /*
  saveToken(token: string){
    localStorage.setItem("token", token);
  }

  getToken(){
    return localStorage.getItem("token");
  }

  removeToken(){
    localStorage.removeItem("token");
  }*/
}
