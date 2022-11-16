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
//cbr conge ce mois
nombrecongemois() :Observable<any>{ return this.http.get('http://localhost:8081/nombrecongemois')};
//sans decision 
Congesansdecision() :Observable<any>{ return this.http.get('http://localhost:8081/getcongesansdecision')};
//conge accepter  
CongeAccepte() :Observable<any>{ return this.http.get('http://localhost:8081/getCongeAcceptrer')};
//conge refuser  
CongeRefuser() :Observable<any>{ return this.http.get('http://localhost:8081/getCongeRefuser')};
//historiqueconge
Congehistorique() :Observable<any>{ return this.http.get('http://localhost:8081/getCongeRefuser')};
//Post conge refuser 
postCongeAccepter(id_conge:any) :Observable<any>{ return this.http.post('http://localhost:8081/postcongeaccepter',id_conge)};
// post conge accepter 
postCongeRefuser(id_conge:any) :Observable<any>{ return this.http.post('http://localhost:8081/postcongerefuser',id_conge)};





//>>>>>>>>>>>>>>>>>>> type contat 
getAllcontrattype() :Observable<any>{ return this.http.get('http://localhost:8081/getAllcontrattype')};






//>>>>>>>>>>>>>>>>>>>> contrat  createContrat
createContrat (user:any): Observable<any> { return this.http.post('http://localhost:8081/createContrat',user)}




//>>>>>>>>>>>>>>>>>>>><login 
//token 
logine (user:any): Observable<any> { return this.http.post('http://localhost:8081/login',user)}
//garde Admin
accederadmin()  {return !!localStorage.getItem('admin');}
//garde User
 accederuser(){ return !!localStorage.getItem('user');}





 //>>>>>>>>>>>>>>>>>>>>>>> User
 //add user :  
 Createuser (user:any): Observable<any> { return this.http.post('http://localhost:8081/createuser',user)}
// demande user  getDemandeUser 
getdemandeuser() :Observable<any>{ return this.http.get('http://localhost:8081/getdemandeuser')};
//accepter
accepteuser(id_utilisateur : any) :Observable<any>{ return this.http.get('http://localhost:8081/accepteuser/'+id_utilisateur)};
//refuser
refuseruser(id_utilisateur : any) :Observable<any>{ return this.http.get('http://localhost:8081/refuseruser/'+id_utilisateur)};

//get demande accepter 
getuseraccepte() :Observable<any>{ return this.http.get('http://localhost:8081/getuseraccepte')};
//get demande refuser
getuserrefuser() :Observable<any>{ return this.http.get('http://localhost:8081/getuserrefuser')};





 //>>>>>>>>>>>>>>>>>>>>>>>>>>> utilisateur 
 //add utilisateur 
 addutilisateur (user:any): Observable<any> { return this.http.post('http://localhost:8081/createuser',user)}





 //>>>>>>>>>>>>>>>>>>>>>role  
 role() :Observable<any>{ return this.http.get('http://localhost:8081/getAllrole')};




 //>>>>>>>>>>>>>>>>>>>>>solde /getsolde/:idutilisateur 
 getsolde(id_utilisateur : any) :Observable<any>{ return this.http.get('http://localhost:8081/getsolde/'+id_utilisateur)};

}
