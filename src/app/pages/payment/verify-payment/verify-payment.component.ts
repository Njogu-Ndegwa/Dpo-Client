import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { PaymentsService } from 'src/app/services/payments/payments.service';
import { Notify } from 'notiflix';

@Component({
  selector: 'app-verify-payment',
  templateUrl: './verify-payment.component.html',
  styleUrls: ['./verify-payment.component.scss']
})
export class VerifyPaymentComponent implements OnInit {

  transactionToken: any
  constructor(
    private activatedRoute: ActivatedRoute,
    private paymentService: PaymentsService

  ) {
    this.activatedRoute.queryParams.subscribe((param) => {
      this.transactionToken = param['TransactionToken']
    })
  }

  ngOnInit(): void {
  }


  verifyPayment() {
    console.log(this.transactionToken, 'The Transaction Token')
    this.paymentService.verifyPaymentService(this.transactionToken).subscribe((res: any) => {
      console.log(res, 'The Result')
      if (res['status'] === 'paid') {
        Notify.success('Payment Succesfult')
        if (res['amount'] === '5500') {

        } else if (res['amount'] === '7750') {

        }
        // window.publishOverlayAPI.connectDomain()
      }
      else {
        Notify.failure('Payment not Succesful')
      }
    })

  }


  testFunction() {
  // @ts-ignore
window.publishOverlayAPI.connectDomain()


// @ts-ignore
console.log(window.publishOverlayAPI, 'Publish OverLay API')
  }

}
