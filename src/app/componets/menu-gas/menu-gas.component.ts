import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router } from '@angular/router'
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-menu-gas',
  templateUrl: './menu-gas.component.html',
  styleUrls: ['./menu-gas.component.css']
})
export class MenuGasComponent implements OnInit {

  showSideBar:boolean = false;
  showBurgerBar:boolean = true;
  station:any = {} 

  constructor(private router: Router, private route: ActivatedRoute, private stationService: MenuService) { }

  ngOnInit() {
    this.getStation();
  }

  getStation(){
    const id = this.route.snapshot.paramMap.get('id');
    this.stationService.getStation(id)
      .subscribe((data:any)=>{
        this.station = data.station;
        console.log(this.station);
      })
  }

  goToMap(){
    this.router.navigate(['/map'])
  }
  
  goToSASISOPA() {
    const id = this.route.snapshot.paramMap.get('id');
    const url = `/SASISOPA/menu/${id}`
    this.router.navigate([url])
  }

}
