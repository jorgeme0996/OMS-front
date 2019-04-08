import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PermisoCreService {

  permisoURL = "http://localhost:3000/station"

  constructor(private http: HttpClient) { }

  getPermiso(param){
    const headers = new HttpHeaders({
      'Authorization': localStorage.getItem('Auth')
    });
    const url = `${this.permisoURL}/${param}/permiso`; 
    return this.http.get(url, {headers});
  }
  
}
