import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) { 

  }
  baseUrl = 'http://localhost:8081/';
getUtilisateur()
 {
  return this.http.get('http://localhost:8081/getAllutilisateur');
}
getId(id: any)
{
  return this.http.get(`http://localhost:8081/getUtilisateur/${id}`);
}
}
