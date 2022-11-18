import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiiService } from 'src/app/service/apii.service';

@Component({
  selector: 'app-profilupdate',
  templateUrl: './profilupdate.component.html',
  styleUrls: ['./profilupdate.component.scss']
})
export class ProfilupdateComponent implements OnInit {

  dataArray:any = [];
  a : any;
 user:any;
 admin : any; 
  constructor(public dialog: MatDialog ,public ser:ApiiService) {
    
    this.a=localStorage.getItem('id_utilisateur')
 

    this.ser.getutilisateur(this.a).subscribe({
        next: (data) => {
          this.dataArray = data;
          console.log(this.dataArray)
        
        },
        error: (e) => console.error(e)
      
    });
    

    
  }

  ngOnInit(): void {
    this.admin = localStorage.getItem('admin')
     this.user =localStorage.getItem('user')

  }

}
