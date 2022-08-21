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
import { DemandeComponent } from './user/demande/demande.component';


const routes: Routes = [


  
  {
    path: '',
    component: LoginComponent, } , 

    {
      path: 'user',
      component: UserComponent,
      
      children: [{
        path: '',
        component: UserComponent,canActivate:[GardeuserGuard]
      } , 
      {
        path: 'demande',
        component: DemandeComponent,canActivate:[GardeuserGuard]
      }
    
    
    ]},

  {
  path: 'admin',
  component: DefaultComponent,
  
  children: [{
    path: '',
    component: DashboardComponent,canActivate:[GardeGuard]
  },{
     path:'posts',
     component: PostsComponent ,canActivate:[GardeGuard]
  },{
    path:'listemployer',
     component: ListemployerComponent ,canActivate:[GardeGuard]
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
  }
]

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
