import { Component, OnInit } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider'
import { ApiiService } from 'src/app/service/apii.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dat  : any ;
  totalconge : number = 0 
  totalcongeMois : number = 0 
  porsentage :  number = 0 
  constructor(public ser:ApiiService) {
    

    
  
    
  }

  ngOnInit(): void {

  

    console.log(this.porsentage)

    this.ser.nombreConge().subscribe({
      next: (data) => {

        this.dat=data;
       this.totalconge=this.dat[0].nombreConge
       
      },
      error: (e) => console.error(e)
    
  });

  this.ser.nombrecongemois().subscribe({
    next: (data) => {

      this.dat=data;
     this.totalcongeMois=this.dat[0].nbr_conge_mois
     
    },
    error: (e) => console.error(e)

  
});
  
 
    
  }

}
