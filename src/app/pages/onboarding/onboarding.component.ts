import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from 'src/app/services/test.service';
import { ActivatedRoute } from '@angular/router';
import { FiveStepProcessService } from 'src/app/services/five-step-process/five-step-process.service';
import { VerifyPaymentComponent } from '../payment/verify-payment/verify-payment.component';
@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss']
})
export class OnboardingComponent implements OnInit {
  @ViewChild(VerifyPaymentComponent) verifyPaymentComponent!: VerifyPaymentComponent;
  isEdit: boolean = false
  ssoLink: any
  userId: any
  accountName: any
  siteName: any
  isLoading: boolean = false
  ssoType:any
  showDropdown: boolean = false
  email: any
  fullName: any 
  constructor(
    private router: Router,
    private testService: TestService,
    private route: ActivatedRoute,
    private fiveStepProcessService: FiveStepProcessService,
  ) { }

  ngOnInit(): void {

    let ssoLink = localStorage.getItem('sso_link')
    this.accountName = localStorage.getItem('account_name')
    this.siteName = localStorage.getItem('site_name')
    this.email = localStorage.getItem('email')
    this.fullName = localStorage.getItem('name')
    this.isLoading = true
    this.fiveStepProcessService.getSite(this.siteName).subscribe((res: any) => {
      console.log(res, '----')
      let previousTemplateId = localStorage.getItem('template_id')
      let currentTemplateId = res['template_id']
      this.isLoading = false
      if (currentTemplateId !== undefined) {
        if (previousTemplateId !== currentTemplateId.toString()) {
          this.isEdit = true
          this.ssoLink = ssoLink
          this.ssoType = 'EDITOR'
        }
        else if (previousTemplateId === currentTemplateId.toString()) {
          this.isEdit = true
          this.ssoLink = ssoLink
          this.ssoType = 'RESET_BASIC'
        }
      }
    })

    if (this.verifyPaymentComponent) {
      this.verifyPaymentComponent.callFunctionInA.subscribe(() => {
        this.doSomethingInComponentA();
      });
    }
  }
  createSitesNoCode() {
    this.router.navigate(['/five-step-process'])
  }

  doSomethingInComponentA() {
    console.log('Function in Component A was called.');
  }

  test() {
    this.testService.testService().subscribe((res) => {
    })
  }

  editSite() {
    this.isLoading = true
    this.fiveStepProcessService.generateSsoLink(this.accountName, this.siteName, this.ssoType).subscribe((res: any) => {
      this.isLoading = false
      let ssoLink = res['sso_link']
      const link = document.createElement('a');
      link.target = '_blank';
      link.href = ssoLink;
      link.setAttribute('visibility', 'hidden');
      link.click();
    })
  }

  hireProfessional() {
    this.router.navigate(['/hire-professional'])
  }


  toggleDropdown() {
    this.showDropdown = !this.showDropdown
  }
  logOut() {
    localStorage.clear()
    this.router.navigate(['/login'])
  }

  viewProfile() {
    this.router.navigate(['/profile-page'])
  }
}
