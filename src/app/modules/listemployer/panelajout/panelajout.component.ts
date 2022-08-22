import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiiService } from 'src/app/service/apii.service';

@Component({
  selector: 'app-panelajout',
  templateUrl: './panelajout.component.html',
  styleUrls: ['./panelajout.component.scss']
})
export class PanelajoutComponent implements OnInit {

  constructor(private api:ApiiService  , private rout:Router) { }

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
