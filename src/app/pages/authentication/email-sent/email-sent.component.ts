import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/services/authentication/signup/signup.service';
import { Notify } from 'notiflix';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-email-sent',
  templateUrl: './email-sent.component.html',
  styleUrls: ['./email-sent.component.scss']
})
export class EmailSentComponent implements OnInit {
  name!:any
  email!:any
  isLoading:boolean = false
  constructor(
    private router: Router,
    private signupService:SignupService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      if (param) {
        this.name = param.get('name')
        this.email = param.get('email')

      }
    })
  }
  resendEmail() {
    this.isLoading = true
    this.signupService.sendResetPasswordEmailService(this.name, this.email).subscribe((res:any) => {
      if(res['message'] == 'success') {
        this.isLoading = false
        Notify.success('Email sent successfully')
      }
      else {
        Notify.failure('There was a problem sending the Email try again')
      }
    })
  }
}
