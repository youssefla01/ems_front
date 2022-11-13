import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiiService } from 'src/app/service/apii.service';

@Component({
  selector: 'app-contrat-user',
  templateUrl: './contrat-user.component.html',
  styleUrls: ['./contrat-user.component.scss']
})
export class ContratUserComponent implements OnInit {

test : any ;
  constructor(private api:ApiiService , private router : ActivatedRoute , private rout:Router , private fb: FormBuilder) {

    //  DOM this.test=this.rout.getCurrentNavigation()?.extras.state.data; 

   }

  

  datatypecontat : any 
  ngOnInit(): void {
    

    this.api.getAllcontrattype().subscribe({
      next: (data) => {
        this.datatypecontat = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    
  });
  }

  createContrat(form:any)
  {
    try{

  let data=form.value ;
  let user ={id_utilisateur : 22}
  var obj = Object.assign(data, user);
  console.log(obj)
   this.api.createContrat(obj).subscribe(
    
    
    send=>console.log(send)
    
    
    );
  //  this.rout.navigate(['nextcreatuser']);


  }
   
   catch(e)
   {
    console.log("errur est :  "+e)
}}



}


