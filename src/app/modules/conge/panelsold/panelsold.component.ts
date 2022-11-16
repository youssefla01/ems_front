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


  accepter(id:any)
  {
    console.log(id)
     
       this.api.postCongeAccepter(id).subscribe(

         send=>console.log(send) )
        window.location.reload();
  }
  refuser(id:any)
  {

 
   this.api.postCongeRefuser(id).subscribe(


     send=>console.log(send) )
     window.location.reload();
  }



  ngOnInit(): void {
    console.log(this.data)
  }


  onPrint(){
    window.print();
}
   
}