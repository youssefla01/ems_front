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
}
