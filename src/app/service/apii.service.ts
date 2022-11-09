import { HttpClient, HttpErrorResponse , HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiiService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  baseUri: string = 'http://localhost:8081/';
  constructor(private http:HttpClient ) {}


//>>>>>>>>>>>>>>>>>>>>>>>>>>  conge 
//nombre de conge 
nombreConge() :Observable<any>{ return this.http.get('http://localhost:8081/nombreconge')};
//sans decision 
Congesansdecision() :Observable<any>{ return this.http.get('http://localhost:8081/getcongesansdecision')};
//conge accepter  
CongeAccepte() :Observable<any>{ return this.http.get('http://localhost:8081/getCongeAcceptrer')};
//conge refuser  
CongeRefuser() :Observable<any>{ return this.http.get('http://localhost:8081/getCongeRefuser')};
//historiqueconge
Congehistorique() :Observable<any>{ return this.http.get('http://localhost:8081/getCongeRefuser')};
//Post conge refuser 
postCongeAccepter(id_conge:any) :Observable<any>{ return this.http.get('http://localhost:8081/postcongeaccepter',id_conge)};
// post conge accepter 
postCongeRefuser(id_conge:any) :Observable<any>{ return this.http.get('http://localhost:8081/postcongerefuser',id_conge)};


//>>>>>>>>>>>>>>>>>>>><login 
//token 
logine (user:any): Observable<any> { return this.http.post('http://localhost:8081/login',user)}
//garde Admin
accederadmin(){return !!localStorage.getItem('token');}
//garde User
 accederuser(){ return !!localStorage.getItem('token');}




 afficheruser()
 {
  return this.http.get('http://localhost:4000/result_user'); 

 }
  
 demandesans_desition()
 {
  return this.http.get('http://localhost:8081/getAllconge'); 
 }
 deletdemande(_id:any): Observable<any>
 {

  return this.http.delete('http://localhost:8081/delet_demande/'+_id)
   ;
  
  
 }
 
 refuser ()
 {
  return this.http.get('http://localhost:4000/result_demande_refuser'); 

 }
 accepter ()
 {

  return this.http.get('http://localhost:4000/result_demande_accepter');  
 }
 deleteemploiyeur(_id :any): Observable<any> {
  return this.http.delete('http://localhost:4000/delet_emploiyeur/'+_id)

 }

}
