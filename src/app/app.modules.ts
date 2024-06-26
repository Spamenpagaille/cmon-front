import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { ProfileComponent } from './profile/profile.component';

import { FormAuthentificationComponent } from './form-authentification/form-authentification.component';

@NgModule({
  declarations: [
    ProfileComponent,
    FormAuthentificationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    HttpClientModule,
    MatCardModule,
    AppRoutingModule,
    FormAuthentificationComponent
  ],
  providers: [//Service

  ],
  bootstrap: [

  ]
})
export class AppModule { }
