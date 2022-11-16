import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiiService } from 'src/app/service/apii.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  dataArray : any
  constructor(private api:ApiiService  , private rout:Router) {   //this.api.afficher().subscribe(data=>this.dataArray=data) 
  }

  ngOnInit(): void {
  }

  deleteemploi(id: any ,i: number)
  
  {
    //  this.api.deleteemploiyeur(id).subscribe(Response=>{
      
    //   console.log(Response)
    //   this.dataArray.splice(i,1)

    
    // })

  } 
  logine(form:any)
  {
    try{

   let data=form.value ;
   
   

   this.api.logine(data).subscribe(data=>console.log(data))
  
   
  }
   
   catch(e)
   {
    console.log("errur est :  "+e)
   

   }
  
  }

}
