import { HttpClient, HttpErrorResponse , HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiiService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  baseUri: string = 'http://localhost:4000/';
  constructor(private http:HttpClient ) {}



  afficher()
  {

return this.http.get('http://localhost:4000/result_emploiyeur');


}

adddemande(add_dem:any) : Observable<any> {
 
  return this.http.post('http://localhost:4000/ajouterdemande',add_dem)

 }
 addduser(add_emp:any) : Observable<any> {
  return this.http.post('http://localhost:4000/ajouter_emploiyeur',add_emp)

 }


alldemande() :Observable<any>{ return this.http.get('http://localhost:4000/demande_all')};

 afficheruser()
 {
  return this.http.get('http://localhost:4000/result_user'); 

 }
  
 demandesans_desition()
 {
  return this.http.get('http://localhost:4000/result_demande'); 
 }
 deletdemande(_id:any): Observable<any>
 {

  return this.http.delete('http://localhost:4000/delet_demande/'+_id)
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


gettoken (){ 

  return this.http.get('http://localhost:4000/tokentest')

}
















 data = {
  id:'199625',
  nam:'redouane',
  prenom:'aitelbacha' 
}



accer=false ;


acceder()
 {
    if(this.data.id=='199625')
    {   this.accer=true ; 
        return this.accer
    }
    else 
    {
        this.accer=false ; 
        return this.accer 
    }
 }


 accederuser()
 {
    if(this.data.id=='1996625')
    {   this.accer=true ; 
        return this.accer
    }
    else 
    {
        this.accer=false ; 
        return this.accer 
    }
 }



 


}
