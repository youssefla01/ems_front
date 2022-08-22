import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiiService } from 'src/app/service/apii.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private api:ApiiService  , private rout:Router) { }

  ngOnInit(): void {
  }


  add(form:any)
  {
    try{
   let data=form.value ;
   console.log(data)
   this.api.adddemande(data).subscribe(data=>console.log(data))
   this.rout.navigate(['/admin/newdemande']) 
   
  }
   
   catch(e)
   {
    console.log("errur est :  "+e)
   

   }
  
  }

}
