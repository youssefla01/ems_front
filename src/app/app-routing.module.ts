import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { ListemployerComponent } from 'src/app/modules/listemployer/listemployer.component';
import { NewdemandeComponent } from './modules/conge/newdemande/newdemande.component';
import { DemandeaccepterComponent } from './modules/conge/demandeaccepter/demandeaccepter.component';
import { DemanderefuserComponent } from './modules/conge/demanderefuser/demanderefuser.component';
import { GardeGuard } from './gardes/garde.guard';
import { LoginComponent } from './auth/components/login/login.component';
import { UserComponent } from './user/user/user.component';
import { GardeuserGuard } from './gardeutilisateur/gardeuser.guard';

import { ContactComponent } from 'src/app/modules/contact/contact.component';
import { TestComponent } from './modules/test/test.component';

import { EmployeAccepterComponent } from './modules/listemployer/employe-accepter/employe-accepter.component';
import { EmployeRefuserComponent } from './modules/listemployer/employe-refuser/employe-refuser.component';
import { ProfilupdateComponent } from './modules/user/profilupdate/profilupdate.component';


import { AccesGuard } from './acces/acces.guard';
import { DemandecongeComponent } from './modules/user/demandeconge/demandeconge.component';
import { ListdemandeComponent } from './modules/user/listdemande/listdemande.component';
import { ContactuserComponent } from './modules/user/contactuser/contactuser.component';
import { SoldComponent } from './modules/user/sold/sold.component';




const routes: Routes = [


  {
  path: 'admin',
  component: DefaultComponent,
  
  children: [{
    path: '',
    component: DashboardComponent,canActivate:[AccesGuard]
  },{
     path:'posts',
     component: PostsComponent ,canActivate:[GardeGuard]
  },{
    path:'listemployer',
     component: ListemployerComponent ,canActivate:[GardeGuard] 
  },
  {
    path:'employeAccepter',
     component: EmployeAccepterComponent ,
  },
  {
    path:'employeRefuser',
     component: EmployeRefuserComponent ,
  },

  {
    path:'newdemande',
     component: NewdemandeComponent ,canActivate:[GardeGuard]
  }
  ,

  {
    path:'demandeaccepter',
     component:DemandeaccepterComponent,canActivate:[GardeGuard]
  }
  ,

  {
    path:'demanderefuser',
     component:  DemanderefuserComponent,canActivate:[GardeGuard]
  },
  {
    path:'profilupdate',
     component:  ProfilupdateComponent,canActivate:[AccesGuard]
  }


 
 
]} , 

{
path: 'user',
component: DefaultComponent,

children: [
  
  {
    path:'demandeconge',
     component: DemandecongeComponent,
  },
  {
    path:'listdemande',
     component: ListdemandeComponent,
  },
  {
    path:'contact',
     component: ContactuserComponent,
  },
  {
    path:'sold',
     component: SoldComponent,
  }


]




}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
