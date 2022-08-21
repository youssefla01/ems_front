import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { ListemployerComponent } from 'src/app/modules/listemployer/listemployer.component';
import { NewdemandeComponent } from './modules/conge/newdemande/newdemande.component';
import { DemandeaccepterComponent } from './modules/conge/demandeaccepter/demandeaccepter.component';
import { DemanderefuserComponent } from './modules/conge/demanderefuser/demanderefuser.component';



const routes: Routes = [{
  path: 'admin',
  component: DefaultComponent,
  
  children: [{
    path: '',
    component: DashboardComponent
  },{
     path:'posts',
     component: PostsComponent 
  },{
    path:'listemployer',
     component: ListemployerComponent 
  },

  {
    path:'newdemande',
     component: NewdemandeComponent 
  }
  ,

  {
    path:'demandeaccepter',
     component:DemandeaccepterComponent
  }
  ,

  {
    path:'demanderefuser',
     component:  DemanderefuserComponent
  }
]

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
