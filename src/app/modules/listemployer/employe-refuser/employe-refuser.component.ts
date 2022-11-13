import { AfterViewInit,Component, OnInit,ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ApiiService } from 'src/app/service/apii.service';
import { PaneleditComponent } from 'src/app/modules/listemployer/paneledit/paneledit.component';

@Component({
  selector: 'app-employe-refuser',
  templateUrl: './employe-refuser.component.html',
  styleUrls: ['./employe-refuser.component.scss']
})
export class EmployeRefuserComponent implements OnInit {

  dataArray:any = [];
  
  constructor(public dialog: MatDialog ,public ser:ApiiService) {
    
    this.ser.getdemandeuser().subscribe({
        next: (data) => {
          this.dataArray = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      
    });
    
    
  
    
  }
  accepter(id_utilisateur : any)
  {
    this.ser.accepteuser(id_utilisateur).subscribe(
     
     
      send=>console.log(send) )
      window.location.reload();

  }
    
    refuser(id_utilisateur : any)
  {

    this.ser.refuseruser(id_utilisateur).subscribe(
     
     
      send=>console.log(send) )
      window.location.reload();

  }

  ngOnInit(): void {
  }

}
