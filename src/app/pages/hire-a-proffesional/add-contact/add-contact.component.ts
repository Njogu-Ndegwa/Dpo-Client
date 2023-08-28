import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {

  currentTab: number = 1;
  previousTab!: number;
  constructor(
    private router: Router
  ) { 
  }

  ngOnInit(): void {
  }

  switchTab(offset: number) {
    const newTab = this.currentTab + offset;
    if (newTab >= 1 && newTab <= 3) {
      this.previousTab = this.currentTab;
      this.currentTab = newTab;
      // this.updateContainerWidth(offset);
      window.scrollTo(0, 0);
    } 
  }

}
