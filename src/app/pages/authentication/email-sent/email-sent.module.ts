import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EmailSentComponent } from './email-sent.component';
import { SocialLoginModule } from '@abacritt/angularx-social-login';
import { RouterModule } from "@angular/router";
import { EmailSentRoutingModule } from './email-sent.routing';
@NgModule({
  declarations: [
    EmailSentComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SocialLoginModule,
    RouterModule,
    EmailSentRoutingModule
  ]
})
export class EmailSentModule { }