import { Component, OnInit } from '@angular/core';
import { ApiiService } from 'src/app/service/apii.service';

@Component({
  selector: 'app-demanderefuser',
  templateUrl: './demanderefuser.component.html',
  styleUrls: ['./demanderefuser.component.scss']
})
export class DemanderefuserComponent implements OnInit {

  arraylist :  any 
  constructor(private api:ApiiService  )
   {

    this.api.refuser().subscribe(data=>this.arraylist=data)
    }

  ngOnInit(): void {
  }

}
