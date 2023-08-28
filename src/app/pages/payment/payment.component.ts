import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentsService } from 'src/app/services/payments/payments.service';
import { IframeControlService } from 'src/app/services/iframe/iframe-control.service';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  selected: string | null = null;
  amountSelected:any
  isLoading:boolean = false
  isiframeVisible: boolean = false
  iframe!: HTMLIFrameElement
  constructor(
    private router: Router,
    private paymentService: PaymentsService,
    private iframeControlService: IframeControlService

  ) { }

  ngOnInit(): void {
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
createIframe(transToken:any) {
  this.iframe = document.createElement("iframe");
  this.iframe.src = `https://secure.3gdirectpay.com/payv3.php?ID=${transToken}`;
  this.iframe.width = "800";
  this.iframe.height = "600";
  this.iframe.style.visibility = "hidden"; // Set the visibility property
  // Append the iframe to the document body
  document.body.appendChild(this.iframe);
  
  // Display the iframe (you might want to adjust visibility or other styles)
  this.iframe.style.visibility = "visible";

  this.setupCloseSubscription()
}


  connectDomainFunction() {
    // @ts-ignore
    window.publishOverlayAPI.connectDomain()

  }
  setupCloseSubscription() {
    this.iframeControlService.closeIframe$.subscribe(() => {
      this.closeIframe();
    });
  }
  
  closeIframe() {
    this.iframe.style.visibility = 'hidden';
  }

}
