import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TimelineComponent } from './timeline.component';


@NgModule({
  declarations: [
    TimelineComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    TimelineComponent
  ]
})
export class TimelineComponentModule { }
