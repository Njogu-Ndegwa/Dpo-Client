import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HireAProffesionalComponent } from './hire-a-proffesional.component';

const routes: Routes = [
  {
    path: '',
    component: HireAProffesionalComponent
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HireAProffesionalRoutingModule { }
