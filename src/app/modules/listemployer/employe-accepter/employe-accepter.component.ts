import { AfterViewInit,Component, OnInit,ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ApiiService } from 'src/app/service/apii.service';
import { PaneleditComponent } from 'src/app/modules/listemployer/paneledit/paneledit.component';


@Component({
  selector: 'app-employe-accepter',
  templateUrl: './employe-accepter.component.html',
  styleUrls: ['./employe-accepter.component.scss']
})
export class EmployeAccepterComponent implements AfterViewInit{

  dataArray:any = [];
  
  constructor(public dialog: MatDialog ,public ser:ApiiService) {
    
    this.ser.getuseraccepte().subscribe({
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
  
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }


  ngOnInit(): void {
  }
  openDialog1(id : any) {

    const dialogRef = this.dialog.open(PaneleditComponent, {
      width:'70%',
      data: id 
    });
  }

}
