import { Component, OnInit } from '@angular/core';
import { ResetPasswordService } from 'src/app/services/authentication/reset-password/reset-password.service';
import { Router } from '@angular/router';
import { Notify } from 'notiflix';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  email!: string
  isLoading:boolean = false
  constructor(
    private resetPasswordService: ResetPasswordService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  resetPassword(){
    this.isLoading = true
    this.resetPasswordService.resetPasswordService(this.email).subscribe((res:any) => {
      console.log(res, 'Reset Password Result')
      this.isLoading = false
      if(res['message'] === 'success') {
        Notify.success('Verification code sent successfully')
        this.router.navigate(['/confirm-verification-code', {
          email: this.email
        }])
      }else{
        this.isLoading = false
        Notify.failure('There was a problem sending the verification code')
      }
    })
  }
  login() {
    this.router.navigate(['/login'])
  }

}
