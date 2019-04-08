import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  permisoURL = "http://localhost:3000/station"

  constructor(private http: HttpClient) { }

  getStation(param){
    const headers = new HttpHeaders({
      'Authorization': localStorage.getItem('Auth')
    });
    const url = `${this.permisoURL}/${param}`;
    return this.http.get(url, {headers});
  }
}
