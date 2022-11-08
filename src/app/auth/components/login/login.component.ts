import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { ApiiService } from 'src/app/service/apii.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide: boolean = false;
  
  constructor(private api:ApiiService  , private rout:Router , private fb: FormBuilder) { }
 

  ngOnInit(): void {
  }


  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })


  dataArray :any ;

  logine(form:any)
  {
    try{

   let data=form.value ;

   this.api.logine(data).subscribe(res=>{

    if(res.token)
    {
      localStorage.setItem('token',res.token)
      this.rout.navigate(['/admin']);
    }
    if(res.status) 
    {
      localStorage.removeItem('token');
      console.log('ici');
    }
  });



   //localStorage.setItem('token',this.dataArray)
  
   
  }
   
   catch(e)
   {
    console.log("errur est :  "+e)
}}}

