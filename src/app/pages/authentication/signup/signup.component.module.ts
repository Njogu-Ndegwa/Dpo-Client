import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SignUpComponent } from './signup.component';
import {SignUpRoutingModule } from './signup.component.routing';
import { SocialLoginModule } from '@abacritt/angularx-social-login';

@NgModule({
  declarations: [
    SignUpComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SignUpRoutingModule,
    SocialLoginModule 
  ]
})
export class SignUpModule { }