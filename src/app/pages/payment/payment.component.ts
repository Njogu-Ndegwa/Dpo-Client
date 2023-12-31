import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PaymentsService } from 'src/app/services/payments/payments.service';
import { SharedService } from 'src/app/services/iframe/iframe-control.service';
// import { IframeControlService } from 'src/app/services/iframe/iframe-control.service';

import { Subscription } from 'rxjs';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  clickEventsubscription!:Subscription;
  selected: string | null = null;
  amountSelected:any
  isLoading:boolean = false
  isiframeVisible: boolean = false
  iframe: HTMLIFrameElement | null = null;
  clientPaid:boolean = false
  count:number = 0
  constructor(
    private router: Router,
    private paymentService: PaymentsService,
    private sharedService: SharedService,
    private activatedRoute: ActivatedRoute
    // private iframeControlService: IframeControlService
  ) {

    }

  ngOnInit(): void {
    window.addEventListener('message', this.receiveMessage.bind(this), false);
    this.activatedRoute.queryParams.subscribe((params) => {
      console.log('Params', params['sitename'])
      localStorage.setItem('site_name', params['sitename'])
      localStorage.setItem('email', params['accountname'])
    })
  }

  receiveMessage(event: MessageEvent): void {
    if (event.origin === 'https://diy.infomoby.com') {
      const receivedMessage = event.data
      if (receivedMessage === 'connectDomain') {
        this.connectDomainFunction();
      }else if (receivedMessage === 'publishSite') {
        this.publishSite()
      }
    }
  }

  publishSite(){
    // @ts-ignore
    window.publishOverlayAPI.publishDone()
    // setTimeout(() => {
    // // @ts-ignore
    // window.publishOverlayAPI.closeOverlay()
    // }, 100)
  }

  ngOnDestroy() {
    // Clean up the iframe when the component is destroyed
    this.destroyIframe();
  }
  handleClick(sectionId: string) {
    this.amountSelected = parseInt(sectionId)

    console.log(this.amountSelected, 'Amount Selected')
    // if (this.selected === sectionId) {
    //   this.selected = null;
    // } else {
      this.selected = sectionId;
    // }
  }

  isSectionSelected(sectionId: string): boolean {
    return this.selected === sectionId;
  }

  proceedToPayment() {
    this.isLoading = true
    this.paymentService.createToken(this.amountSelected).subscribe((res:any) => {
      this.isLoading = false
      console.log(res, 'The Result----37----')
      let transToken = res['trans_token']
      const queryParams = {
        trans_token: res['trans_token']
      };
      this.isiframeVisible = true

      this.createIframe(transToken)

    })
    // this.router.navigate(['/checkout'])
  }

createIframe(transToken: any) {
  this.iframe = document.createElement("iframe");
  
  const randomParam = Math.random().toString(36).substring(7); // Generate a random string
  this.iframe.src = `https://secure.3gdirectpay.com/payv3.php?ID=${transToken}&ts=${randomParam}`;
  
  this.iframe.width = "800";
  this.iframe.height = "600";
  this.iframe.style.visibility = "hidden";
  
  // Append the iframe to the document body
  document.body.appendChild(this.iframe);

  // Display the iframe
  this.iframe.style.visibility = "visible";
}



  connectDomainFunction() {
    // @ts-ignore
    window.publishOverlayAPI.connectDomain()

  }

  // setupCloseSubscription() {
  //   this.iframeControlService.closeIframe$.subscribe(() => {
  //     this.closeIframe();
  //   });
  // }
  
  // closeIframe() {
  //   this.iframe.style.visibility = 'hidden';
  // }

  incrementCount(){
    // this.count++;
    // this.iframe.style.visibility = 'hidden';
    this.destroyIframe();
    this.clientPaid = true
    }


    originWindow() {
      console.log('Parent Window Origin:', window.location.origin);
    }

    destroyIframe() {
      console.log('Function is Called')
      if (this.iframe) {
        // Set the iframe's src to about:blank to stop any ongoing requests
        this.iframe.src = 'about:blank';
    
        // Remove the iframe from the DOM
        if (this.iframe.parentNode) {
          this.iframe.parentNode.removeChild(this.iframe);
        }
    
        // Set the iframe reference to null to release the memory
        this.iframe = null;
      }
    }
    

}
