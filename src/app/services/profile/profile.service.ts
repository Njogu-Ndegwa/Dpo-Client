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
      photo:any, 
      businessName:string, 
      businessEmail:string, 
      phoneNumber:string,
      userId:string,
      businessPhoneNumber:string
      
      ) {
        console.log(photo, '------25-----')
      return this.http.post(`${environment.api}user-profile`, {
        first_name: firstName,
        last_name: secondName,
        email_address: emailAddress,
        photo: photo,
        business_name: businessName,
        business_email: businessEmail,
        business_phone_number: phoneNumber,
        user_id: userId,
        phone_number: businessPhoneNumber
      })
    }

    getProfilePage(userId:any) {
      return this.http.post(`${environment.api}get-profile`, {
        user_id: userId
      })
    }
}
