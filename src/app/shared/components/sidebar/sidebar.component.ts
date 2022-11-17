import { Component, OnInit } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  admin :any
  user : any 
  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  this.admin = localStorage.getItem('admin')
  this.user =localStorage.getItem('user')
    
  }

}
