import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnterNewPasswordComponent } from './enter-new-password.component';

const routes: Routes = [
  {
    path: '',
    component: EnterNewPasswordComponent
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewPasswordRoutingModule { }
