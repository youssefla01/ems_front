import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiiService } from 'src/app/service/apii.service';
import { Location } from '@angular/common';
import { ServerService } from 'src/app/service/server.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-paneledit',
  templateUrl: './paneledit.component.html',
  styleUrls: ['./paneledit.component.scss']
  
})
export class PaneleditComponent implements OnInit {
  id_user : any 
  dataArray:any = [];
  id : any
  
 
  
  constructor(private api:ApiiService  , private rout:Router ,public ser:ServerService, public _location:Location, @Inject(MAT_DIALOG_DATA) public data: any) { 
   
    
    this.ser.getId(this.data).subscribe({
      next: (data) => {
        this.dataArray = data;
        console.log(data);
        console.log('nom' ,this.data.nom);
      },
      error: (e) => console.error(e)
      
    
  });
  
    
}
  updatUtil(){
    const datarow = {
      nom : this.dataArray.nom,
      prenom : this.dataArray.prenom
    };
    console.log(this.dataArray.nom)
    this.ser.updateUtil(this.data, datarow).subscribe(
      response => {
        console.log(response);
      },
      error => {console.log(error)
      });

  
  }

    refresh(): void {
        this.rout.navigateByUrl("/admin", { skipLocationChange: true }).then(() => {
        console.log(decodeURI(this._location.path()));
        this.rout.navigate([decodeURI(this._location.path())]);
        });
    }
    
    

  ngOnInit(): void {
    console.log(this.data)
  }


  addemploi(form:any)
  {
    try{
   let data=form.value ;
   console.log(data)
   //this.api.addduser(data).subscribe(data=> this.rout.navigate(['/admin/posts']) )
   alert("emploiyer est  bien ajouter ! ")
  

   
  }
   
   catch(e)
   {
    console.log("errur est :  "+e)
   

   }
  
  }

 
}
