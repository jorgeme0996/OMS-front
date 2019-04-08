import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    const auth = this.auth.isAuth();

    if(this.auth.isAuth()){
      console.log('Paso el guard');
      return true
    } else {
      console.log('Bloqueado por el guard'); 
      return false
    }
  }
}
