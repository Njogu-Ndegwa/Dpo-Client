import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {

  constructor(
    private http: HttpClient
  ) { }

  resetPasswordService(email:string){
    return this.http.post(`${environment.api}reset-password`,{
      email: email
    })
  }
  confirmVerificationCode(email:any, verificationCode:string) {
    return this.http.post(`${environment.api}confirm-verification-code`,{
      verification_code: verificationCode,
      email: email
    })
  }
  
  changePasswordService(email:any, password1:any, password2:any) {
    return this.http.post(`${environment.api}change-password`, {
      email: email,
      password1: password1,
      password2: password2
    })
  }
}
