import { Component, OnInit } from '@angular/core';
import {FormControl,  FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/services/authentication/signup/signup.service';
import {GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { HttpClient } from '@angular/common/http';
import { Notify } from 'notiflix';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignUpComponent implements OnInit{
  myForm!: FormGroup;
  hide = true;
  loading:boolean = false
  socialUser:any
  email:any
  fullname:any
  password:any
  constructor( 
    private router: Router,
    private signupService: SignupService,
    private socialAuthService: SocialAuthService,
    private http: HttpClient
    ){
      this.myForm = new FormGroup({
        fullnameControl: new FormControl('', [Validators.required]),
        emailFormControl: new FormControl('', [Validators.required, Validators.email]),
        passwordControl: new FormControl('', [Validators.required]),
      });
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
    this.loading = true
    let email = this.myForm.get('emailFormControl')!.value;
    let fullname = this.myForm.get('fullnameControl')!.value;
    let password = this.myForm.get('passwordControl')!.value;
this.signUpServiceFunction(email, password, fullname)
  }

  signUpServiceFunction(email:any, password:any, fullname:any) {
    this.signupService.signupService(email, password, fullname).subscribe((res) => {
      console.log(res, 'The Result---57---')
      this.loading = false
      this.myForm.reset()
      Notify.success('User Signed Up Succesfully')
      this.router.navigate(['/login'])
    },
    () => {
      this.loading = false
    })
  }

  loginWithFacebook(){

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
            // this.loginMethod(res.email, res.sub);
            this.signUpServiceFunction(email, password, fullname)

        }
      })
  }
}
