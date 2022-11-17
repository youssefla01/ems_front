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
  totalconge  = 0 
  totalcongeMois  = 0 
  

  constructor(public ser:ApiiService) {
    

    
  
    
  }

  ngOnInit(): void {

  
    console.log(this.totalconge+this.totalconge)


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
