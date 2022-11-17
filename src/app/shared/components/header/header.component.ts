import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Route, Router } from '@angular/router';
import { MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,} from '@angular/material/snack-bar';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  constructor(private route : Router , private _snackBar: MatSnackBar) { }

  ngOnInit() { 
    
   
  }

 

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }


  signout(){
 
    localStorage.clear();
    this.route.navigate(['/login']);
    console.log('dd')
  }
  
  openSnackBar() {
    this._snackBar.open('Nouveau Employe!!', 'consulter', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });

}
}