import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FiveStepProcessComponent } from './five-step-process.component';

const routes: Routes = [
  {
    path: '',
    component: FiveStepProcessComponent
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FiveStepProcessRoutingModule { }
