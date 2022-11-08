import { Component, OnInit } from '@angular/core';
import { ApiiService } from 'src/app/service/apii.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
 dataArray : any 
  constructor(private ser:ApiiService ) {

   
    console.log(this.dataArray)
    
   }

  ngOnInit(): void {


  }

}
