import { Component, OnInit } from '@angular/core';
import { PermisoCreService } from '../../../services/permiso-cre.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-permiso-cre',
  templateUrl: './permiso-cre.component.html',
  styleUrls: ['./permiso-cre.component.css']
})
export class PermisoCreComponent implements OnInit {

  permisoCRE:string = '';
  
  constructor(private permiso: PermisoCreService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getPermiso();
  }

  getPermiso(){
    const param = this.route.snapshot.paramMap.get('id');
    console.log(param);
    this.permiso.getPermiso(param)
      .subscribe((data:any)=>{
        this.permisoCRE = data.station.numPermisoCre;
        console.log(data)
      })
  }
}
