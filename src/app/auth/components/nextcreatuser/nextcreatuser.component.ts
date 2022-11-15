import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiiService } from 'src/app/service/apii.service';

@Component({
  selector: 'app-nextcreatuser',
  templateUrl: './nextcreatuser.component.html',
  styleUrls: ['./nextcreatuser.component.scss']
})
export class NextcreatuserComponent implements OnInit {

  constructor(private api : ApiiService , private rout : Router) { 


  }

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

  creatutilisateur(form:any)
  {
    try{

   let data=form.value ;

   this.api.addutilisateur(data).subscribe(data=>console.log(data));
   this.rout.navigate(['login']);


  }
   
   catch(e)
   {
    console.log("errur est :  "+e)
}}

}
