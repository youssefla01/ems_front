import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) { 

  }
  baseUrl = 'http://localhost:8081/getAllutilisateur';
getUtilisateur()
 {
  return this.http.get(`${this.baseUrl}`);
}
}
