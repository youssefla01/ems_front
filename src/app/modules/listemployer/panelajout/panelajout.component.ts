import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiiService } from 'src/app/service/apii.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-panelajout',
  templateUrl: './panelajout.component.html',
  styleUrls: ['./panelajout.component.scss']
})
export class PanelajoutComponent implements OnInit {

  constructor(private api:ApiiService  , private rout:Router , public _location:Location) { }




 
    refresh(): void {
        this.rout.navigateByUrl("/admin", { skipLocationChange: true }).then(() => {
        console.log(decodeURI(this._location.path()));
        this.rout.navigate([decodeURI(this._location.path())]);
        });
    }

  ngOnInit(): void {
  }


  addemploi(form:any)
  {
    try{
   let data=form.value ;
   console.log(data)
   this.api.addduser(data).subscribe(data=>console.log(data))
   alert("emploiyer est  bien ajouter ! ")
   this.rout.navigate(['/admin/listemployer']) 

   
  }
   
   catch(e)
   {
    console.log("errur est :  "+e)
   

   }
  
  }

 
}
