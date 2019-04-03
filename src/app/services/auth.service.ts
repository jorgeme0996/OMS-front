import { Injectable } from '@angular/core';
import { AuthUser } from '../interfaces/authUser';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  loginURL = "http://localhost:3000/login";

  constructor(private http: HttpClient){ }

  loginService(user: AuthUser) {
    return this.http.post(this.loginURL, user);
  }

  isAuth() {
    const headers = new HttpHeaders({
      'Authorization': localStorage.getItem('Auth')
    });
    
    if(!localStorage.getItem('Auth')) {
      return false;
    } else {
      return this.http.get("http://localhost:3000/auth", {headers});
    }
  }

}
