import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { PaymentsService } from 'src/app/services/payments/payments.service';
import { Notify } from 'notiflix';
// import { IframeControlService } from 'src/app/services/iframe/iframe-control.service';
import { SharedService } from 'src/app/services/iframe/iframe-control.service';

@Component({
  selector: 'app-verify-payment',
  templateUrl: './verify-payment.component.html',
  styleUrls: ['./verify-payment.component.scss']
})
export class VerifyPaymentComponent implements OnInit {
  @Output() callFunctionInA = new EventEmitter<void>();
  transactionToken: any
  isLoading: boolean = false
  constructor(
    private activatedRoute: ActivatedRoute,
    private paymentService: PaymentsService,
    private sharedService: SharedService,
    private router: Router

  ) {
    this.activatedRoute.queryParams.subscribe((param) => {
      this.transactionToken = param['TransactionToken']
    })
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.verifyPayment()
  }


  verifyPayment() {
    window.scrollTo(0, 0);
    console.log(this.transactionToken, 'The Transaction Token')
    this.isLoading = true
    this.paymentService.verifyPaymentService(this.transactionToken).subscribe((res: any) => {
      console.log(res, 'The Result')
      if (res['status'] === 'paid') {
        Notify.success('Payment Successful')
        if (res['amount'] === '5500.00') {
          setTimeout(() => {
            this.isLoading = false
            this.router.navigate(['/publish-site'])
          }, 1000)
        } else if (res['amount'] === '7750.00') {
          setTimeout(() => {
            this.isLoading = false
            this.initiateConnectDomain()
          }, 1000)
        }
      }
      else {
        Notify.failure('Payment not Succesful')
      }
    })

  }


  connectDomainFunction() {
    // @ts-ignore
    window.publishOverlayAPI.connectDomain()

  }

  closeIframeFromOtherComponent() {
    // this.iframeControlService.closeIframe();
  }


  logPublishOverlayAPIcontent() {
    // @ts-ignore
    console.log(window.publishOverlayAPI)
  }

  initiateConnectDomain(){
    const parentWindow = window.parent;
    if (parentWindow) {
      parentWindow.postMessage('connectDomain', 'https://diy.infomoby.com');
    }


  }
}
