import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/authGuard';

const routes: Routes = [
  // Authentication
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/authentication/login/login.component.module').then(
        (m) => m.LoginModule
      ),
  },

  {
    path: 'signup',
    loadChildren: () =>
      import('./pages/authentication/signup/signup.component.module').then(
        (m) => m.SignUpModule
      ),
  },

  // Payment Systems
  {
    path: 'payment',
    loadChildren: () =>
      import('./pages/payment/payment.component.module').then(
        (m) => m.PaymentModule
      )
  },


  {
    path: 'verify-payment',
    loadChildren: () =>
      import('./pages/payment/verify-payment/verify-payment.component.module').then(
        (m) => m.VerifyPaymentModule
      )
  },

  {
    path: 'checkout',
    loadChildren: () =>
      import('./pages/payment/checkout/checkout.component.module').then(
        (m) => m.CheckoutModule
      )
  },

  {
    path: '',
    loadChildren: () =>
      import('./pages/onboarding/onboarding.component.module').then(
        (m) => m.OnboardingModule
      ),
      canActivate: [AuthGuard]
  },

// Simple Site Editor
  {
    path: 'five-step-process',
    loadChildren: () =>
      import('./pages/onboarding/five-step-process/five-step-process.component.module').then(
        (m) => m.FiveStepProcessModule
      ),
      canActivate: [AuthGuard]
  },


  // Hire A Proffesinal

  // {
  //   path: 'hire-professional',
  //   loadChildren: () =>
  //     import('./pages/hire-a-proffesional/hire-a-proffesional.module').then(
  //       (m) => m.HireAProffesionalModule
  //     ),
  //     canActivate: [AuthGuard]
  // },

  {
    path: 'hire-professional',
    loadChildren: () =>
      import('./pages/hire-a-proffesional/add-contact/add-contact.module').then(
        (m) => m.AddContactModule
      ),
      canActivate: [AuthGuard]
  },
  {
    path: 'publish-site',
    loadChildren: () =>
      import('./pages/publish/publish.module').then(
        (m) => m.PublishModule
      ),
      canActivate: [AuthGuard]
  },



  {
    path: 'forgot-password',
    loadChildren: () =>
      import('./pages/forgot-password/forgot-password.module').then(
        (m) => m.ForgotPasswordModule
      ),
      canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
