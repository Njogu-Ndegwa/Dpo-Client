import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PublishInstructionComponent } from './publish-instruction.component';
import { PublishInstructionRoutingModule } from './publish.routing';

@NgModule({
  declarations: [
    PublishInstructionComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PublishInstructionRoutingModule
  ]
})
export class PublishInstructionModule { }