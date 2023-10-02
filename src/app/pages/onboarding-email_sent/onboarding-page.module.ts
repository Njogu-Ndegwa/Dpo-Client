import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { OnboardingPageComponent } from './onboarding-page.component';
import { OnboardingRoutingModule } from '../onboarding/onboarding.component.routing';
@NgModule({
  declarations: [
    OnboardingPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OnboardingRoutingModule
  ]
})
export class OnboardingEmailSentModule { }