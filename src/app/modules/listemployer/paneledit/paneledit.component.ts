import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import {MatCalendarCellClassFunction} from '@angular/material/datepicker';
import { Router } from '@angular/router';
import { ApiiService } from 'src/app/service/apii.service';

@Component({
  selector: 'app-paneledit',
  templateUrl: './paneledit.component.html',
  styleUrls: ['./paneledit.component.scss']
 
})
export class PaneleditComponent implements OnInit {

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    // Only highligh dates inside the month view.
    if (view === 'month') {
      const date = cellDate.getDate();

      // Highlight the 1st and 20th day of each month.
      return date === 1 || date === 20 ? 'example-custom-date-class' : '';
    }

    return '';
  };

  constructor(private api:ApiiService  , private rout:Router) { }

  ngOnInit(): void {
  }
  add(form:any)
  {
    try{
   let data=form.value ;
   console.log(data)
   this.api.adddemande(data).subscribe(data=>console.log(data))
   this.rout.navigate(['/admin/alldemande']) 
   
  }
   
   catch(e)
   {
    console.log("errur est :  "+e)
   

   }
  
  }
}
