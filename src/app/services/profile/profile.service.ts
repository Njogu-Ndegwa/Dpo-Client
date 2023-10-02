import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private http: HttpClient
  ) { }

    profileService(
      firstName:string,
      secondName:string, 
      emailAddress:string, 
      photo:string, 
      businessName:string, 
      businessEmail:string, 
      phoneNumber:string) {
      return this.http.post(`${environment}user-profile`, {
        first_name: firstName,
        second_name: secondName,
        email_address: emailAddress,
        photo: photo,
        business_name: businessName,
        business_email: businessEmail,
        business_phone_number: phoneNumber
      })
    }
}
