import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  showLogin:boolean = true;
  showResPass:boolean = false;
  
  constructor(private auth: AuthService) { }

  login(user, pass){
    let userTryLogin = {
      username: user,
      password: pass
    }

    this.auth.login(userTryLogin)
      .subscribe((token: any) => {
        console.log(token);
      })
  }
}
