import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiiService } from 'src/app/service/apii.service';
import { PanelajoutComponent } from '../../listemployer/panelajout/panelajout.component';

@Component({
  selector: 'app-demanderefuser',
  templateUrl: './demanderefuser.component.html',
  styleUrls: ['./demanderefuser.component.scss']
})
export class DemanderefuserComponent implements OnInit {

  arraylist :  any 
  constructor(private api:ApiiService  , public dialog: MatDialog  )
   {

    this.api.CongeRefuser().subscribe(data=>this.arraylist=data)
    }
    openDialog(id : any) {

      const dialogRef = this.dialog.open(PanelajoutComponent, {
        width:'70%',
        data: id 
      });
      console.log(id)
    }
  ngOnInit(): void {
  }

}
