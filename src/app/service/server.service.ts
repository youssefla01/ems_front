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
<<<<<<< HEAD
  return this.http.get(`http://localhost:8081/getUtilisateur/${id}`);
=======
  return this.http.get(`http://localhost:8081/getAllutilisateur/${id}`);
}
updateUtil(id: any, data :any)
{
  return this.http.get(`http://localhost:8081/updateUtilisateur/${id}`, data);
>>>>>>> d8ede72b6e04d3c81a6b4f373e5621dcb1014e05
}
}
