import { Component, OnInit } from '@angular/core';
import { ApiiService } from 'src/app/service/apii.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
 dataArray : any 
  constructor(private ser:ApiiService ) {

    this.ser.gettoken().subscribe(data=>this.dataArray=data)
    console.log(this.dataArray)
    
   }

  ngOnInit(): void {


  }

}
