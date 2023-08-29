import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PublishComponent } from './publish.component';
import { PublishRoutingModule } from './publish.routing';

@NgModule({
  declarations: [
    PublishComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PublishRoutingModule
  ]
})
export class PublishModule { }