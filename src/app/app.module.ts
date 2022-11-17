import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { AuthModule } from './auth/auth.module';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { NewdemandeComponent } from './modules/conge/newdemande/newdemande.component';
import { DemandeaccepterComponent } from './modules/conge/demandeaccepter/demandeaccepter.component';
import { DemanderefuserComponent } from './modules/conge/demanderefuser/demanderefuser.component';
import { UserComponent } from './user/user/user.component';
import { TestComponent } from './modules/test/test.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PanelsoldComponent } from './modules/conge/panelsold/panelsold.component';














@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TestComponent,
  
    

       
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    FormsModule,
    AuthModule,
    HttpClientModule, ReactiveFormsModule 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
