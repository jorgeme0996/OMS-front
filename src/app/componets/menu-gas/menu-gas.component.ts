import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-menu-gas',
  templateUrl: './menu-gas.component.html',
  styleUrls: ['./menu-gas.component.css']
})
export class MenuGasComponent implements OnInit {

  showSideBar = false;
  showBurgerBar = true;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToMap(){
    this.router.navigate(['/map'])
  }
  
  goToSASISOPA() {
    this.router.navigate(['/SASISOPA/menu'])
  }

}
