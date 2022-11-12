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
   refuser()
   {

   }
   accepter()
   {
    
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
