import { Component, OnInit } from '@angular/core';
import {FormControl,  FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
// import {GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { LoginService } from 'src/app/services/authentication/login/login.service';
import {
  SocialAuthService,
  FacebookLoginProvider,
  SocialUser,
} from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup
  hide = true;
  loading:boolean=  false
  // emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  // passwordFormControl = new FormControl('', [Validators.required])
  email:any
  password:any
  constructor( 
    // private socialAuthService: SocialAuthService,
    private router: Router,
    private loginService: LoginService,
    private socialAuthService: SocialAuthService
    ){
      this.loginForm = new FormGroup({
        emailFormControl: new FormControl('', [Validators.required, Validators.email]),
        passwordControl: new FormControl('', [Validators.required]),
      });
    }

  ngOnInit() {

  }


  onSubmit() {
    this.loading = true
    const email = this.loginForm.get('emailFormControl')!.value;
    const password = this.loginForm.get('passwordControl')!.value;
    this.loginService.loginService(email, password).subscribe((res)  => {
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