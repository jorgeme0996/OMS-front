import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  mapURL = "http://localhost:3000/map"

  constructor(private http: HttpClient) { }

  getCoord(){
    const headers = new HttpHeaders({
      'Authorization': localStorage.getItem('Auth')
    });

    return this.http.get(this.mapURL, {headers});
  }
}
