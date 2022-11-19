import { Component, Inject, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ApiiService } from 'src/app/service/apii.service';
import { Location } from '@angular/common';
import { ServerService } from 'src/app/service/server.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { dateFormats } from 'highcharts';
@Component({
  selector: 'app-panelajout',
  templateUrl: './panelajout.component.html',
  styleUrls: ['./panelajout.component.scss']
  
})
export class PanelajoutComponent implements OnInit {
  id_user : any 
  dataArray:any = [];
  
 
  
  constructor(private api:ApiiService  , private rout:Router ,public ser:ServerService, public _location:Location, @Inject(MAT_DIALOG_DATA) public data: any) { 

    
    this.ser.getId(this.data).subscribe({
      next: (data) => {
        this.dataArray = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    
  });
    
  }



  ngOnInit(): void {
    console.log(this.data)
  }


  onPrint(){
    window.print();
}
   
accepter(id_utilisateur : any , date_debut : Date  )
{
 

  
  this.api.accepteuser(id_utilisateur).subscribe(send=>console.log(send) )

const d = new Date();

console.log()

var obj={id_utilisateur:id_utilisateur , date_debut :  date_debut  ,  datenow : d  }



  try{this.api.createSolde( obj ).subscribe(send=>console.log(send)); }
  catch(e){console.log("errur est :  "+e)}

  window.location.reload();
}

  
  

 
}
