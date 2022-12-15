import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiiService } from '../service/apii.service';

@Injectable({
  providedIn: 'root'
})
export class GardeGuard implements CanActivate {
 // appelle les parametre que ce trouve  a notre servise  et  la fonction que permet de nous acceder a la page 
 constructor(private serv:ApiiService,private derict:Router)
 {
   //...........test
 }

 canActivate(

  



   route: ActivatedRouteSnapshot,
   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     // retourner un variable si true ou false 
   return new Promise((variable_prener_le_boolen,reject)=>
   {
     if(this.serv.accederadmin())
     {
      variable_prener_le_boolen(true)
    }
     else{
      
       this.derict.navigate(['/login'])
       
       variable_prener_le_boolen(false)
     }

   }
   
   ) 
 }
  
}
