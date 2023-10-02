import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ConfirmVerificatonCodeComponent } from './confirm-verificaton-code.component';
import { ConfirmVerifictionCodeRoutingModule } from './confirm-verification-code-routing.module';
@NgModule({
  declarations: [
    ConfirmVerificatonCodeComponent,
    // AddContactComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ConfirmVerifictionCodeRoutingModule
  ]
})
export class ConfirmVerificationCodeModule { }