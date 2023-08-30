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


  fiveStepProcessService(businessName:string, templateId:string, email:string, phoneNumber:string, personObject:any, userId:any ) {
    return this.httpClient.post(`${environment.api}five-step-process`, {
    business_name: businessName,
    template_id: templateId,
    business_email: email,
    business_phone_number: phoneNumber,
    person_object: personObject,
    user_id: userId
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

  generateSsoLink(accountName:any, siteName:any, ssoType:any) {
    return this.httpClient.post(`${environment.api}generate-sso`, {
      account_name: accountName,
      site_name: siteName,
      sso_type: ssoType

    })
  }

  getSite(siteName:any) {
    return this.httpClient.post(`${environment.api}get-sites`, {
      site_name: siteName
      
    })
  }
  publishSite(siteName:string, domain:string){
    return this.httpClient.post(`${environment.api}publish-site`, {
      site_name: siteName,
      domain: domain
    })
  }
}
