import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiiService } from 'src/app/service/apii.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PanelsoldComponent } from '../panelsold/panelsold.component';
import { PanelajoutComponent } from '../../listemployer/panelajout/panelajout.component';
@Component({
  selector: 'app-newdemande',
  templateUrl: './newdemande.component.html',
  styleUrls: ['./newdemande.component.scss']
})
export class NewdemandeComponent implements OnInit {

  dataArray: any ; 
 
  constructor(private ser:ApiiService , private rout:Router , public dialog: MatDialog) {

   
    this.ser.Congesansdecision().subscribe(data=>this.dataArray=data)
    console.log(this.dataArray);

    
    
   }


   panelsold(id:any)
   {
    const dialogRef = this.dialog.open(PanelsoldComponent, {
      width:'50%',
      data: id 
    });
    console.log(id)
   }

  ngOnInit(): void {
  }

}