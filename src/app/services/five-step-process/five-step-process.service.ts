import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FiveStepProcessService {

  constructor(
    private httpClient: HttpClient
  ) { }


  fiveStepProcessService(businessName:string, templateId:string, email:string, phoneNumber:string, personObject:any ) {
    return this.httpClient.post(`${environment.api}five-step-process`, {
    business_name: businessName,
    template_id: templateId,
    email: email,
    phone_number: phoneNumber,
    person_object: personObject
    })
  }

  getTemplatesService(){
    return this.httpClient.get(`${environment.api}get-templates`)
  }

  saveSsoLink(ssoLink:any, userId:any) {
    return this.httpClient.post(`${environment.api}save-sso`, {
      sso_link: ssoLink,
      user_id: userId
    })
  }
}
