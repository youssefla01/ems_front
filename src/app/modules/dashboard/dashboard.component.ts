import { Component, OnInit } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider'
import { ApiiService } from 'src/app/service/apii.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  nombreconge : any 
  constructor(public ser:ApiiService) {
    

    
  
    
  }
  ngOnInit(): void {

    this.ser.nombreConge().subscribe({
      next: (data) => {

        this.nombreconge = JSON.stringify(data);

        console.log(this.nombreconge);
      },
      error: (e) => console.error(e)
    
  });
  
    
  }

}
