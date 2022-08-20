import { Component, OnInit } from '@angular/core';

import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PaneleditComponent } from './paneledit/paneledit.component';

export interface PeriodicElement {
  name: string;
  position: number;
  naissance: string;
  nat: string;
  poste: string;
  type: string;
  dated: string;
  datef: string;
  soldec:number;
  
  
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'hassan lachguer', naissance: '10/02/2001', nat: 'H', poste:'developpeur',type:'CDI',dated:'10/10/23',datef:'10/10/23',soldec:16,},

];

@Component({
  selector: 'app-listemployer',
  templateUrl: './listemployer.component.html',
  styleUrls: ['./listemployer.component.scss']
})


export class ListemployerComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(PaneleditComponent, {
      width:'30%'
    });
  }

  displayedColumns: string[] = ['position', 'name', 'naissance', 'nat','poste', 'type', 'dated','datef','soldec','action'];
  dataSource = ELEMENT_DATA;


  ngOnInit(): void {
  }
  

}



