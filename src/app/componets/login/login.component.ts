import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AuthUser } from '../../interfaces/authUser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  showLogin:boolean = true;
  showResPass:boolean = false;
  
  constructor(private auth: AuthService, private router: Router) { }

  login(user, pass) {

    let userTryLogin: AuthUser = {
      username: user,
      password: pass
    }
    
    this.auth.loginService(userTryLogin)
      .subscribe( (data:any) => {
        let token = data.token;
        localStorage.setItem('Auth', token);
        if(data.ok === true) {
          this.router.navigate(['/map'])
        }
      })
  }

}
