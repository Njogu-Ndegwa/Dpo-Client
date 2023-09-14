import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.component.routing';
// import { SocialLoginModule } from '@abacritt/angularx-social-login';
import { SocialLoginModule } from '@abacritt/angularx-social-login';
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoginRoutingModule,
    SocialLoginModule,
    RouterModule
    
    // SocialLoginModule 
  ]
})
export class LoginModule { }