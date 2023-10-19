import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublishInstructionComponent } from './publish-instruction.component';

const routes: Routes = [
  {
    path: '',
    component: PublishInstructionComponent
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublishInstructionRoutingModule { }
