import { Component, OnInit , Inject} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiiService } from 'src/app/service/apii.service';
import { ServerService } from 'src/app/service/server.service';

@Component({
  selector: 'app-panelsold',
  templateUrl: './panelsold.component.html',
  styleUrls: ['./panelsold.component.scss']
})
export class PanelsoldComponent implements OnInit {
  id_user : any 
  dataArray:any = [];
  
 
  
  constructor(private api:ApiiService  , private rout:Router ,public ser:ServerService, @Inject(MAT_DIALOG_DATA) public data: any) { 

    
    this.api.getsolde(this.data).subscribe({
      next: (data) => {
        this.dataArray = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    
  });
    
  }


  accepter(id:any,motif:any,nbr_jours_sold :any , nbr_jours :any , id_soldconge : any)
  {
  let misseAjourSolde =    nbr_jours_sold -  nbr_jours ;
  let data=motif.value ; // objet 1 
  let user ={
    id_conge : id  ,
    nbr_jours_sold : misseAjourSolde ,
    id_soldconge : id_soldconge 
   }

 var obj = Object.assign(data, user); //  objet 1+2  pour 
 console.log(obj)
 this.api.postCongeAccepter(obj).subscribe(send=>console.log(send));

 this.api.modifiersolde(obj).subscribe(send=>console.log(send));
 
  window.location.reload();


  }
  refuser(id:any,motif:any)
  {

    let data=motif.value ; // objet 1 
    let user ={id_conge : id } // objet 2 
    var obj = Object.assign(data, user); //  objet 1+2  pour 
  
       
        this.api.postCongeRefuser(obj).subscribe(send=>console.log(send));
         window.location.reload();
  
  }



  ngOnInit(): void {
    
  }


   
}