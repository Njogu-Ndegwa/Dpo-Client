import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { VerifyPaymentComponent } from './verify-payment.component';
import { VerifyPaymentRoutingModule } from './verify-payment.component.routing';

@NgModule({
  declarations: [
    VerifyPaymentComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    VerifyPaymentRoutingModule
  ]
})
export class VerifyPaymentModule { }