import { Component, OnInit } from '@angular/core';
import {FormControl,  FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/services/authentication/signup/signup.service';
// import {GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignUpComponent implements OnInit{
  myForm!: FormGroup;
  hide = true;
  loading:boolean = false
  constructor( 
    private router: Router,
    private signupService: SignupService
    ){
      this.myForm = new FormGroup({
        fullnameControl: new FormControl('', [Validators.required]),
        emailFormControl: new FormControl('', [Validators.required, Validators.email]),
        passwordControl: new FormControl('', [Validators.required]),
      });
    }


  ngOnInit() {

  }

  toLogin() {
    this.router.navigate(['/login'])
  }

  onSubmit() {
    this.loading = true
    const email = this.myForm.get('emailFormControl')!.value;
    const fullname = this.myForm.get('fullnameControl')!.value;
    const password = this.myForm.get('passwordControl')!.value;

    this.signupService.signupService(email, password, fullname).subscribe((res) => {
      this.loading = false
      this.myForm.reset()
      this.router.navigate(['/login'])
    })

  }

  // loginWithGoogle() {
  //   this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
  //   .then(() => this.router.navigate(['']));
  // }
}
