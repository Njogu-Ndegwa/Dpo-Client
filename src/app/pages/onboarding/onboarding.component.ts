import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from 'src/app/services/test.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss']
})
export class OnboardingComponent implements OnInit {
  isEdit:boolean = false
  ssoLink:any
  constructor(
    private router: Router,
    private testService: TestService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const ssoLink = params['sso_link'];
      // Now you have access to the SSO link value (sso_link).
      // You can use it as needed in your component logic.
      console.log(ssoLink);

      if (ssoLink) {
        this.isEdit = true
        this.ssoLink = ssoLink
      }

    });
  }
  createSitesNoCode() {
    this.router.navigate(['/five-step-process'])
  }

  test() {
    this.testService.testService().subscribe((res) => {
      console.log(res, "The Result-------22-----")
    })
  }

  editSite() {
    const link = document.createElement('a');
    link.target = '_blank';
    link.href = this.ssoLink ;
    link.setAttribute('visibility', 'hidden');
    link.click();
  }
}
