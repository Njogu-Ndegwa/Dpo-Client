import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  selected: string | null = null;
  amountSelected:any
  constructor() { }

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

}
