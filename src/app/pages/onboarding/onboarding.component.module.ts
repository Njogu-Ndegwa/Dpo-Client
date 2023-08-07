import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { OnboardingComponent } from './onboarding.component';
import { OnboardingRoutingModule } from './onboarding.component.routing';

@NgModule({
  declarations: [
    OnboardingComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OnboardingRoutingModule 
  ]
})
export class OnboardingModule { }