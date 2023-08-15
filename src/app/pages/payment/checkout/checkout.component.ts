import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PaymentsService } from 'src/app/services/payments/payments.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  phonenumber:any
  transToken:any

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private paymentsService: PaymentsService
  ) { }

  ngOnInit(): void {
  this.activeRoute.queryParams.subscribe((params) => {
    this.transToken = params['trans_token']
    console.log(this.transToken, 'Trans Token')
  })
  }

  handleSubmit() {
    console.log(this.phonenumber, 'Phone Number')
    // this.router.navigate([''])
    this.paymentsService.sendMpesaPayment(this.transToken, this.phonenumber).subscribe((res) => {
      console.log(res, 'the result')
    })
  }

}
