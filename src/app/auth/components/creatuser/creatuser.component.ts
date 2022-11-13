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
      
   this.api.Createuser(data).subscribe(
    
    
    send=>console.log(send)
    
    
    );
   this.rout.navigate(['nextcreatuser']);


  }
   
   catch(e)
   {
    console.log("errur est :  "+e)
}}
}


