import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { NewdemandeComponent } from './modules/conge/newdemande/newdemande.component';
import { DemandeaccepterComponent } from './modules/conge/demandeaccepter/demandeaccepter.component';
import { DemanderefuserComponent } from './modules/conge/demanderefuser/demanderefuser.component';
import { UserComponent } from './user/user/user.component';
import { DemandeComponent } from './user/demande/demande.component';






@NgModule({
  declarations: [
    AppComponent,
   
    NewdemandeComponent,
         DemandeaccepterComponent,
         DemanderefuserComponent,
         UserComponent,
         DemandeComponent,
         
        
         
       
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    FormsModule,
    AuthModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
