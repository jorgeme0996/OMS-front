import { Component, OnInit } from '@angular/core';
import { PermisoCreService } from '../../../services/permiso-cre.service';

@Component({
  selector: 'app-permiso-cre',
  templateUrl: './permiso-cre.component.html',
  styleUrls: ['./permiso-cre.component.css']
})
export class PermisoCreComponent implements OnInit {

  permisoCRE:string = '';
  
  constructor(private permiso: PermisoCreService) { }

  ngOnInit() {
    
  }

  getPermiso(){
    this.permiso.getPermiso()
      .subscribe((data:any)=>{
        this.permisoCRE = data;
        console.log(data)
      })
  }

}
