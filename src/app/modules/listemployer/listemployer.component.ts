import { AfterViewInit,Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ApiiService } from 'src/app/service/apii.service';
import { PanelajoutComponent } from './panelajout/panelajout.component';
import { PaneleditComponent } from 'src/app/modules/listemployer/paneledit/paneledit.component';

import { getLocaleDateFormat } from '@angular/common';
import { ServerService } from 'src/app/service/server.service';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}



@Component({
  selector: 'app-listemployer',
  templateUrl: './listemployer.component.html',
  styleUrls: ['./listemployer.component.scss']
})


export class ListemployerComponent implements OnInit {
  
  

  dataArray:any = [];
  

    
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  
  constructor(public dialog: MatDialog ,public ser:ServerService) {
    /*this.ser.getUtilisateur().subscribe((res : any)=>{
      this.dataArray= res;
      console.log(this.dataArray)
      });
      */
    this.ser.getUtilisateur().subscribe({
        next: (data) => {
          this.dataArray = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      
    });
    
    
  
    
  }
  

  /*deleteemploi(id: any ,i: number)
  
  {
     this.ser.deleteemploiyeur(id).subscribe(Response=>{
      alert('suprimer')
      console.log(Response)
      this.dataArray.splice(i,1)

    
    })

  }

*/
  ngAfterViewInit() {
  
  }


  
  openDialog() {

    this.dialog.open(PanelajoutComponent, {
      width:'30%'
    });
  }
  openDialog1() {

    this.dialog.open(PaneleditComponent, {
      width:'30%'
    });
  }
tab ={

  nome : '' ,
  prenom : '' ,
  date_de_naissance : '' ,
  nationatily : '' ,
  post : '' ,
  type_contrat: ''

}
 data(_id : any ,nome : string ,prenom : string ,date_de_naissance : string ,nationatily : string ,post : string ,type_contrat: string)
 {
   this.tab.nome=nome 
   this.tab.prenom=prenom 
   this.tab.date_de_naissance=date_de_naissance
   this.tab.nationatily=nationatily
   this.tab.post=post
   this.tab.type_contrat=type_contrat  
  console.log(this.tab)

 }


  ngOnInit(): void {
  }
  

}





