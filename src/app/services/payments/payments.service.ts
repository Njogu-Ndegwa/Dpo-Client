import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

  constructor(
    private httpClient: HttpClient
  ) {

    // window.publishOverlayAPI.connectDomain()
   }

  createToken(amount:any) {
    return this.httpClient.post(`${environment.api}payment`, {
      amount: amount
    })
  }

  sendMpesaPayment(transactionToken:any, phoneNumber:any) {
    return this.httpClient.post(`${environment.api}send-mpesa`, {
      trnsaction_token: transactionToken,
      phonenumber: phoneNumber
    })
  }



  verifyPaymentService(transactionToken:any) {
    return this.httpClient.post(`${environment.api}verify-payment`, {
      transaction_token: transactionToken
    })
  }
}
