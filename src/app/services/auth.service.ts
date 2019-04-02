import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthUser } from '../interfaces/authUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  loginURL:string = "http://localhost:3000/login"

  constructor(private http:HttpClient){ }

  login(user:AuthUser){
    let body = JSON.stringify(user);
    return this.http.post( this.loginURL, body);
  }

}
