import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table'
import { ListemployerComponent } from 'src/app/modules/listemployer/listemployer.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PaneleditComponent } from 'src/app/modules/listemployer/paneledit/paneledit.component';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { PanelajoutComponent } from 'src/app/modules/listemployer/panelajout/panelajout.component';
import { ContactComponent } from 'src/app/modules/contact/contact.component';
import {FormsModule , ReactiveFormsModule} from '@angular/forms';
import { EmployeAccepterComponent } from 'src/app/modules/listemployer/employe-accepter/employe-accepter.component';
import { EmployeRefuserComponent } from 'src/app/modules/listemployer/employe-refuser/employe-refuser.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { NewdemandeComponent } from 'src/app/modules/conge/newdemande/newdemande.component';











@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    ListemployerComponent,
    PaneleditComponent,
    PanelajoutComponent,
    ContactComponent,
    EmployeAccepterComponent,
    EmployeRefuserComponent,
    NewdemandeComponent
    
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatExpansionModule
    
   

    
    
    
  ]
})
export class DefaultModule { }
