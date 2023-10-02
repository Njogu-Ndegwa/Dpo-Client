import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NewPasswordRoutingModule } from './enter-new-password-routing';
import { EnterNewPasswordComponent } from './enter-new-password.component';
@NgModule({
  declarations: [
    EnterNewPasswordComponent,
    // AddContactComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NewPasswordRoutingModule
  ]
})
export class EnterNewPasswordModule { }