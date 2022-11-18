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
 
  navigationcreate (){

    this.rout.navigate(['/creatuser']);
  }

  ngOnInit(): void {
    localStorage.clear()
  }


  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })


  dataArray :any ;

  login(form:any)
  {
    try{

   let data=form.value ;

   this.api.logine(data).subscribe(res=>{

    if(res.token && res.user)
    {
      localStorage.clear()
      localStorage.setItem('token',res.token)
      localStorage.setItem('user',res.user)
      localStorage.setItem('id_utilisateur',res.id_utilisateur)
      this.rout.navigate(['/admin']);
    }
    if(res.token && res.admin) 
    {
      localStorage.clear()
      localStorage.setItem('token',res.token)
      localStorage.setItem('admin',res.admin)
      localStorage.setItem('id_utilisateur',res.id_utilisateur)
      this.rout.navigate(['/admin']);
    }

  });


  }
   
   catch(e)
   {
    console.log("errur est :  "+e)
}}}

