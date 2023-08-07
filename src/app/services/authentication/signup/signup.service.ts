import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(
    private httpClient: HttpClient
  ) { }


  signupService(email:any, password:any, fullname:any) {
    return this.httpClient.post(`${environment.api}signup`, {
      email: email,
      password: password,
      full_name: fullname
    })
  }
}
