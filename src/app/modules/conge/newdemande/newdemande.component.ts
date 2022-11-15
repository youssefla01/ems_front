import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiiService } from 'src/app/service/apii.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-newdemande',
  templateUrl: './newdemande.component.html',
  styleUrls: ['./newdemande.component.scss']
})
export class NewdemandeComponent implements OnInit {

  dataArray: any ; 
 
  constructor(private ser:ApiiService , private rout:Router) {

   
    this.ser.Congesansdecision().subscribe(data=>this.dataArray=data)
    console.log(this.dataArray);

    
    
   }




   accepter(id:any)
   {
      
        this.ser.postCongeAccepter(id).subscribe(
     
     
          send=>console.log(send) )
          window.location.reload();
   }
   refuser(id:any)
   {

  
    this.ser.postCongeRefuser(id).subscribe(
 
 
      send=>console.log(send) )
      window.location.reload();
   }

  ngOnInit(): void {
  }

}