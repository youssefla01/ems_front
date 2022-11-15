import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreatuserComponent } from './components/creatuser/creatuser.component';
import { NextcreatuserComponent } from './components/nextcreatuser/nextcreatuser.component';
import { ContratUserComponent } from './components/contrat-user/contrat-user.component';


@NgModule({
  declarations: [
    LoginComponent,
    CreatuserComponent,
    NextcreatuserComponent,
    ContratUserComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,HttpClientModule
  ],
  exports: [
    LoginComponent,
  ]
})
export class AuthModule {
  title = 'login';
 }
