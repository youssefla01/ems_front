import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiiService } from 'src/app/service/apii.service';

@Component({
  selector: 'app-newdemande',
  templateUrl: './newdemande.component.html',
  styleUrls: ['./newdemande.component.scss']
})
export class NewdemandeComponent implements OnInit {

  dataArray : any=[]
 
  constructor(private ser:ApiiService , private rout:Router) {

   
    this.ser. alldemande().subscribe(data=>this.dataArray=data)
    
   }
   deleted(id:any)
   {
     this.ser.deletdemande(id).subscribe(response=>{
    
      this.rout.navigate(['/admin/alldemande']) 
      
     
    })
   }

  ngOnInit(): void {
  }

}