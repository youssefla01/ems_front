import { Component, OnInit } from '@angular/core';

import { ApiiService } from 'src/app/service/apii.service';


@Component({
  selector: 'app-demandeconge',
  templateUrl: './demandeconge.component.html',
  styleUrls: ['./demandeconge.component.scss']
})
export class DemandecongeComponent implements OnInit {

  constructor(private api : ApiiService) { }
  creatuser(data : any )
  {
    let dataform=data.value ; // objet 1 
    let user ={id_utilisateur : localStorage.getItem('id_utilisateur')} // objet 2 
    var obj = Object.assign(dataform, user); //  objet 1+2  pour lenvoiyer 
    try{
    this.api.createConge(obj).subscribe(
    
    
      send=>console.log(send)
      
    
      );
      alert('votre demande est valider   ! ') ; 
      window.location.reload();

    }
      catch
      {
        alert('try again ! ') ; 
      }



   console.log(obj)
  }
  ngOnInit(): void {
  }

}
