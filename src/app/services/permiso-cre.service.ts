import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PermisoCreService {

  permisoURL = "http://localhost:3000/station/"

  constructor(private http: HttpClient) { }

  getPermiso(){
    const headers = new HttpHeaders({
      'Authorization': localStorage.getItem('Auth')
    });
    
    return this.http.get(this.permisoURL, {headers});
  }
  

}
