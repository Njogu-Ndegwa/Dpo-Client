import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AddContactComponent } from './add-contact.component';
import { AddContactRoutingModule } from './add-contact.routing';
@NgModule({
  declarations: [
    AddContactComponent,
    // AddContactComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AddContactRoutingModule
  ]
})
export class AddContactModule { }