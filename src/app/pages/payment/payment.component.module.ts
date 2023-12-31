import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PaymentComponent } from './payment.component';
import { PaymentRoutingModule } from './payment.component.routing';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    PaymentComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PaymentRoutingModule
  ]
})
export class PaymentModule { }