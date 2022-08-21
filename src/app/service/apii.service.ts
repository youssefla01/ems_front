import { HttpClient, HttpErrorResponse , HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiiService {

  constructor(private http:HttpClient ) {}



  afficher()
  {

return this.http.get('http://localhost:4000/result_emploiyeur');


}

adddemande(add_dem:any) : Observable<any> {
  return this.http.post('http://localhost:4000/ajouterdemande',add_dem)

 }





 afficheruser()
 {
  return this.http.get('http://localhost:4000/result_user'); 

 }
  
 alldemande()
 {
  return this.http.get('http://localhost:4000/result_demande'); 
 }
 deletdemande(id:any)
 {
  return this.http.delete('http://localhost:4000/delet_demande/'+id)
 }
 
 refuser ()
 {
  return this.http.get('http://localhost:4000/result_demande_refuser'); 

 }
 accepter ()
 {

  return this.http.get('http://localhost:4000/result_demande_accepter');  
 }
}
