import { HttpClient, HttpErrorResponse , HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiiService {

  constructor(private http:HttpClient ) {}



  afficher()
  {

return this.http.get('http://localhost:4000/result_emploiyeur');


}
}
