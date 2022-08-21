import { Component, OnInit } from '@angular/core';
import { ApiiService } from 'src/app/service/apii.service';

@Component({
  selector: 'app-demandeaccepter',
  templateUrl: './demandeaccepter.component.html',
  styleUrls: ['./demandeaccepter.component.scss']
})
export class DemandeaccepterComponent implements OnInit {

  arraylist :  any 
  constructor(private api:ApiiService  )
   {

    this.api.accepter().subscribe(data=>this.arraylist=data)
    }

  ngOnInit(): void {
  }

}
