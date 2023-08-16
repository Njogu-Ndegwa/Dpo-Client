import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentsService } from 'src/app/services/payments/payments.service';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  selected: string | null = null;
  amountSelected:any
  isLoading:boolean = false
  constructor(
    private router: Router,
    private paymentService: PaymentsService
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
      // this.router.navigate(['/checkout'], {queryParams})
      const iframe = document.createElement("iframe");
      iframe.src = `https://secure.3gdirectpay.com/payv3.php?ID=${transToken}`;
      iframe.width = "800";
      iframe.height = "600";
      iframe.style.visibility = "hidden"; // Set the visibility property
      
      // Append the iframe to the document body
      document.body.appendChild(iframe);
      
      // Display the iframe (you might want to adjust visibility or other styles)
      iframe.style.visibility = "visible";

      
    })
    // this.router.navigate(['/checkout'])
  }

}
