import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ApiiService } from 'src/app/service/apii.service';
import { Location } from '@angular/common';
import { ServerService } from 'src/app/service/server.service';
@Component({
  selector: 'app-panelajout',
  templateUrl: './panelajout.component.html',
  styleUrls: ['./panelajout.component.scss']
})
export class PanelajoutComponent implements OnInit {

  dataArray:any = [];
  id = 8;
  constructor(private api:ApiiService  , private router: Router,private rout:Router ,public ser:ServerService, public _location:Location) { 
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.ser.getId(this.id).subscribe({
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
  }


  addemploi(form:any)
  {
    try{
   let data=form.value ;
   console.log(data)
   this.api.addduser(data).subscribe(data=> this.rout.navigate(['/admin/posts']) )
   alert("emploiyer est  bien ajouter ! ")
  

   
  }
   
   catch(e)
   {
    console.log("errur est :  "+e)
   

   }
  
  }

 
}
