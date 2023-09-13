import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { env } from 'process';
@Injectable({
  providedIn: 'root'
})
export class HireProffesionalService {

  constructor(
    private http: HttpClient
  ) { }

  hireProfessionalService(fullName:string, emailAddress:string, phoneNumber:string, communicationMode: string, assistanceType:string, other:string) {
    return this.http.post(`${environment.api}hire-professional`, {
      full_name: fullName,
      email_address: emailAddress,
      phone_number: phoneNumber,
      communication_mode: communicationMode,
      assistance_type: assistanceType,
      other: other
    })
  }
}
