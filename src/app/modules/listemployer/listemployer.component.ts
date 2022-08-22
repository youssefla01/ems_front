import { AfterViewInit,Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ApiiService } from 'src/app/service/apii.service';
import { PanelajoutComponent } from './panelajout/panelajout.component';
import { PaneleditComponent } from 'src/app/modules/listemployer/paneledit/paneledit.component';

export interface UserData {
  id: string;
  nom: string;
  daten: string;
  Nationalite: string;
  dep: string;
  type: string;
  action:string;

}




@Component({
  selector: 'app-listemployer',
  templateUrl: './listemployer.component.html',
  styleUrls: ['./listemployer.component.scss']
})


export class ListemployerComponent implements AfterViewInit {

  dataArray : any 
  
  displayedColumns: string[] = ['id', 'nom', 'daten', 'Nationalite','dep','type','action'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  
  constructor(public dialog: MatDialog ,public ser:ApiiService) {
    this.ser.afficher().subscribe(data=>this.dataArray=data)
    this.dataArray = new MatTableDataSource(this.dataArray);
    
    

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.dataArray);

    
    

  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
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




  ngOnInit(): void {
  }
  

}


