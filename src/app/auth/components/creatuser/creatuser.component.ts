import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { ApiiService } from 'src/app/service/apii.service';

@Component({
  selector: 'app-creatuser',
  templateUrl: './creatuser.component.html',
  styleUrls: ['./creatuser.component.scss']
})

export class CreatuserComponent implements OnInit {
 
  constructor(private api:ApiiService  , private rout:Router , private fb: FormBuilder) { }
  datarole : any 
  id_user : any 

  ngOnInit(): void {

    this.api.role().subscribe({
      next: (data) => {
        this.datarole = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    
  });

  }


  creatuser(form:any)
  {
    try{
   
   let data=form.value ;
  //  localStorage.setItem('usernam',data.username);
  
   this.api.Createuser(data).subscribe(
    (data) => {
      this.id_user = {
        state :
        { 
          data : data 
        }  
      }
      console.log(this.id_user);
      this.rout.navigate(['contratuser'],this.id_user);
    }
   
    
 
   );

  

   


  }
   
   catch(e)
   {
    console.log("errur est :  "+e)
}}
}


