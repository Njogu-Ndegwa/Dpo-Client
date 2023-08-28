import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hire-a-proffesional',
  templateUrl: './hire-a-proffesional.component.html',
  styleUrls: ['./hire-a-proffesional.component.scss']
})
export class HireAProffesionalComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  requestACall() {
    this.router.navigate(['/add-contact'])
  }

}
