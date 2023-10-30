import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/services/authentication/signup/signup.service';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { HttpClient } from '@angular/common/http';
import { Notify } from 'notiflix';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignUpComponent implements OnInit {
  myForm!: FormGroup;
  hide = true;
  loading: boolean = false
  socialUser: any
  email: any
  fullname: any
  password: any
  submitted: boolean = false

  constructor(
    private router: Router,
    private signupService: SignupService,
    private socialAuthService: SocialAuthService,
    private http: HttpClient
  ) {
    this.myForm = new FormGroup({
      fullnameControl: new FormControl('', Validators.required),
      emailFormControl: new FormControl('', [Validators.required, Validators.email]),
      passwordControl: new FormControl('', [Validators.required, Validators.pattern(/^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/)]),
      businessFieldControl: new FormControl(''),
      phoneNumberControl: new FormControl('', Validators.required),

    });
  }

  get passwordFormField() {
    return this.myForm.get('passwordControl');
  }


  ngOnInit() {
    this.socialAuthService.authState.subscribe((user: any) => {
      this.socialUser = user;
      this.authWithGoogle(user.provider);
    });
  }

  toLogin() {
    this.router.navigate(['/login'])
  }

  onSubmit() {
    this.submitted = true
    let email = this.myForm.get('emailFormControl')!.value;
    let fullname = this.myForm.get('fullnameControl')!.value;
    let password = this.myForm.get('passwordControl')!.value;
    let phoneNumber = this.myForm.get('phoneNumberControl')!.value;
    let businessField = this.myForm.get('businessFieldControl')!.value;

    console.log(phoneNumber, businessField,  '---------------64-------------')
    if (this.myForm.valid) {
    this.loading = true
    this.signUpServiceFunction(email, password, fullname, businessField, phoneNumber)
    } else {

      console.log('Fill in all the required')
    }
  }

  signUpServiceFunction(email: any, password: any, fullname: any, businessField:any, phoneNumber:any) {
    this.signupService.signupService(email, password, fullname, businessField, phoneNumber).subscribe((res) => {
      this.loading = false
      this.myForm.reset()
      this.router.navigate(['/verification-email-sent', {
        name: fullname,
        email: email
      }])
      Notify.success('A verification email has been sent to your email. Please verify your email')
    },
      () => {
        this.loading = false
      })
  }

  loginWithFacebook() {

  }

  authWithGoogle(provider: string): void {
    this.loading = true
    this.http
      .get(
        `https://oauth2.googleapis.com/tokeninfo?id_token=${this.socialUser.idToken}`
      )
      .toPromise()
      .then((res: any) => {

        if (res.email_verified) {
          let email = res.email;
          let fullname = res.name;
          let password = res.sub;
          let businessField = ''
          let phoneNumber = ''
          // this.loginMethod(res.email, res.sub);
          this.signUpServiceFunction(email, password, fullname, businessField, phoneNumber)

        }
      })
  }
}
