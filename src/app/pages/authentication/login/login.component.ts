import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
// import {GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { LoginService } from 'src/app/services/authentication/login/login.service';
import {
  SocialAuthService,
  FacebookLoginProvider,
  SocialUser,
} from '@abacritt/angularx-social-login';
import { Loading } from 'notiflix';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup
  hide = true;
  loading: boolean = false
  // emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  // passwordFormControl = new FormControl('', [Validators.required])
  email: any
  password: any
  socialUser:any
  isLoggedin:boolean = false

  constructor(
    // private socialAuthService: SocialAuthService,
    private router: Router,
    private loginService: LoginService,
    private socialAuthService: SocialAuthService,
    private http: HttpClient
  ) {
    this.loginForm = new FormGroup({
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


  onSubmit() {
    this.loading = true
    let email = this.loginForm.get('emailFormControl')!.value;
    let password = this.loginForm.get('passwordControl')!.value;
    this.loginServiceFunction(email, password)
  }

  loginServiceFunction(email:any, password:any) {
    this.loginService.loginService(email, password).subscribe((res) => {
      this.loading = false
      Object.entries(res).forEach(([key, value]) => {
        localStorage.setItem('token', value['token'])
        localStorage.setItem('email', value['email'])
      });
      this.loginForm.reset()
      setTimeout(() => {
        this.router.navigate([''])
      }, 100)

    })
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
          let email = res.email
          let password = res.sub
          // if (this.isSignInState === true) {
            // this.loginMethod(res.email, res.sub);
          // }
          this.loginServiceFunction(email, password)
        }
      })
  }

  loginWithFacebook(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  onSignUp() {
    this.router.navigate(['/signup'])
  }


  // trySomething(){
  //   window.publishOverlayAPI.connectDomain()
  // }
}
