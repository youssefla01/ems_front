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
   
}