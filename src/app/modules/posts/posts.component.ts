import { AfterViewInit,Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { ApiiService } from 'src/app/service/apii.service';


export interface IPost {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  dataArray : any=[]
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private ser:ApiiService ) {


    
  }
  
  ngOnInit(): void {

    this.ser. alldemande().subscribe(data=>this.dataArray=data)
    
    
      
      this.dataArray = new MatTableDataSource(this.dataArray);
   
  
    
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataArray.filter = filterValue.trim().toLowerCase();
  }
}


