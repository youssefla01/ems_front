<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
=======
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
>>>>>>> d8ede72b6e04d3c81a6b4f373e5621dcb1014e05
import { ApiiService } from 'src/app/service/apii.service';
import { Location } from '@angular/common';
import { ServerService } from 'src/app/service/server.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-panelajout',
  templateUrl: './panelajout.component.html',
  styleUrls: ['./panelajout.component.scss']
  
})
export class PanelajoutComponent implements OnInit {
  id_user : any 
  dataArray:any = [];
<<<<<<< HEAD
  id = 8;
  constructor(private api:ApiiService  , private router: Router,private rout:Router ,public ser:ServerService, public _location:Location) { 
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.ser.getId(this.id).subscribe({
=======
  
 
  
  constructor(private api:ApiiService  , private rout:Router ,public ser:ServerService, public _location:Location, @Inject(MAT_DIALOG_DATA) public data: any) { 

    
    this.ser.getId(this.data).subscribe({
>>>>>>> d8ede72b6e04d3c81a6b4f373e5621dcb1014e05
      next: (data) => {
        this.dataArray = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    
  });
<<<<<<< HEAD

=======
    
>>>>>>> d8ede72b6e04d3c81a6b4f373e5621dcb1014e05
  }

    refresh(): void {
        this.rout.navigateByUrl("/admin", { skipLocationChange: true }).then(() => {
        console.log(decodeURI(this._location.path()));
        this.rout.navigate([decodeURI(this._location.path())]);
        });
    }
    
    

  ngOnInit(): void {
    console.log(this.data)
  }


  onPrint(){
    window.print();
}
   
   
  
  

 
}
