import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiiService } from 'src/app/service/apii.service';

@Component({
  selector: 'app-demande-user',
  templateUrl: './demande-user.component.html',
  styleUrls: ['./demande-user.component.scss']
})
export class DemandeUserComponent implements OnInit {

 
  dataArray: any ; 
  constructor(private ser:ApiiService ) {

   
   
    
   }
   refuser(id_utilisateur : any)
   {
    
    this.ser.refuseruser(id_utilisateur).subscribe(
     
     
      send=>console.log(send) )
      window.location.reload();


   }


   accepter(id_utilisateur : any)
   {
      
    this.ser.accepteuser(id_utilisateur).subscribe(
     
     
      send=>console.log(send) )
      window.location.reload();
   }

  ngOnInit(): void {
      
    this.ser.getdemandeuser().subscribe({
      next: (data) => {
        this.dataArray = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    
  });

  }

}
