import { Component, OnInit } from '@angular/core';
import { ResetPasswordService } from 'src/app/services/authentication/reset-password/reset-password.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Notify } from 'notiflix';
@Component({
  selector: 'app-confirm-verificaton-code',
  templateUrl: './confirm-verificaton-code.component.html',
  styleUrls: ['./confirm-verificaton-code.component.scss']
})
export class ConfirmVerificatonCodeComponent implements OnInit {
  verificationCode!: string
  isLoading: boolean = false
  email!:any 
  constructor(
    private resetPasswordService: ResetPasswordService,
    private router: Router,
    private activatedRoute: ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.email = param.get('email')
      console.log(this.email, 'The Email')
    })
  }
  resetPassword() {
    this.isLoading = true
    this.resetPasswordService.confirmVerificationCode(this.email, this.verificationCode).subscribe((res:any) => {
      console.log(res, 'Confirm Verification Code')
      this.isLoading = false
      if(res['message'] === 'success') {
        Notify.success('Verification Code Confirmed Successfully')
        this.router.navigate(['/enter-new-password', {
          email: this.email
        }])
      }
      else {
        Notify.failure('There was a problem confirming the verification code. Please confirm it is correct')

      }
    })
  }
  login() {
    this.router.navigate(['/login'])
  }
}
