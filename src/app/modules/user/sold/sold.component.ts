import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiiService } from 'src/app/service/apii.service';
import { ServerService } from 'src/app/service/server.service';

@Component({
  selector: 'app-sold',
  templateUrl: './sold.component.html',
  styleUrls: ['./sold.component.scss']
})
export class SoldComponent implements OnInit {

  id_user  = localStorage.getItem('id_utilisateur') 
  dataArray:any = [];

  constructor(private api:ApiiService  , private rout:Router ,public ser:ServerService ) { 

    
    this.api.getsoldejust(this.id_user).subscribe({
      next: (data) => {
        this.dataArray = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    
  });
    
  }


  ngOnInit(): void {

    
  }

}
