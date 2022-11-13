import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContratUserComponent } from './components/contrat-user/contrat-user.component';
import { CreatuserComponent } from './components/creatuser/creatuser.component';
import { LoginComponent } from './components/login/login.component';
import { NextcreatuserComponent } from './components/nextcreatuser/nextcreatuser.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'creatuser',
    component: CreatuserComponent
  },
  {
    path: 'nextcreatuser',
    component: NextcreatuserComponent
  },
  {
    path: 'contratuser',
    component: ContratUserComponent
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }


