import { Component, Inject, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
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
  
 
  
  constructor(private api:ApiiService  , private rout:Router ,public ser:ServerService, public _location:Location, @Inject(MAT_DIALOG_DATA) public data: any) { 

    
    this.ser.getId(this.data).subscribe({
      next: (data) => {
        this.dataArray = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    
  });
    
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
