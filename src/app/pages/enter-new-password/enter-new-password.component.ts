import { Component, OnInit } from '@angular/core';
import { Notify } from 'notiflix';
import { Router, ActivatedRoute } from '@angular/router';
import { ResetPasswordService } from 'src/app/services/authentication/reset-password/reset-password.service';
@Component({
  selector: 'app-enter-new-password',
  templateUrl: './enter-new-password.component.html',
  styleUrls: ['./enter-new-password.component.scss']
})
export class EnterNewPasswordComponent implements OnInit {

  password1!:string
  password2!:string 
  isLoading:boolean = false
  hide:boolean = true
  email!:any
  constructor(
    private resetPasswordService: ResetPasswordService,
    private activatedRoute: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.email = param.get('email')
    })
  }

  resetPassword() {
    this.isLoading = true
    if (this.password1 === this.password2 ) {
    this.resetPasswordService.changePasswordService(this.email, this.password1, this.password2).subscribe((res:any) => {
      this.isLoading = false
      if (res['message'] === 'success') {
        this.router.navigate(['/login'])
        Notify.success('Password has been changed successfully')
      } else{
        Notify.failure('There was a problem changing the password')
      }
    })
  } else {
    this.isLoading = false
    Notify.failure('Password value not equal to Confirm password value')
  }
}
}
