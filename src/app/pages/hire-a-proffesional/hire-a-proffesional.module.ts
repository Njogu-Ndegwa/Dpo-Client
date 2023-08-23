import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HireAProffesionalRoutingModule } from './hire-a-proffesional.routing';
import { HireAProffesionalComponent } from './hire-a-proffesional.component';
// import { AddContactComponent } from './add-contact/add-contact.component';
@NgModule({
  declarations: [
    HireAProffesionalComponent,
    // AddContactComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HireAProffesionalRoutingModule
  ]
})
export class HireAProffesionalModule { }