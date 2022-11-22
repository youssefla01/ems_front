import { Component, OnInit } from '@angular/core';
import { ApiiService } from 'src/app/service/apii.service';

@Component({
  selector: 'app-listdemande',
  templateUrl: './listdemande.component.html',
  styleUrls: ['./listdemande.component.scss']
})
export class ListdemandeComponent implements OnInit {
dataArray : any 

  constructor(private ser:ApiiService) { 
   
    let id_utilisateur = localStorage.getItem('id_utilisateur');
    this.ser.congeparuser(id_utilisateur).subscribe({
      next: (data) => {
        this.dataArray = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    
  });


    console.log(this.dataArray);

  }

  ngOnInit(): void {


    
  }

}
