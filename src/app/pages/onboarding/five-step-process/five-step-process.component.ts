import { Component, OnInit } from '@angular/core';
import { FiveStepProcessService } from 'src/app/services/five-step-process/five-step-process.service';
import { Router } from '@angular/router';
import { Loading } from 'notiflix';

@Component({
  selector: 'app-five-step-process',
  templateUrl: './five-step-process.component.html',
  styleUrls: ['./five-step-process.component.scss']
})
export class FiveStepProcessComponent implements OnInit {
  events!: any[];
  width: string = '20%';
  currentTab: number = 1;
  previousTab!: number;
  containerWidth: string = '30%';
  businessName:any
  activeSection: string = '';
  defaultTemplate: string = '1000440'
  activeTheme:string = '';
  email:any
  phone:any
  personObject:any
  items: any
  selectedItem: any = null;
  ssoLink:any = ''
  userId:any = ''
  constructor(
    private fiveStepProcessService: FiveStepProcessService,
    private router: Router
  ) {
    
    this.events = [
      { status: 'Upload file', class: 'step01', active: 'active', icon: 'fa-solid fa-circle' },
      { status: 'Map Fields', class: 'step02', active: '' },
      { status: 'Process file', class: 'step03', active: '' },
      { status: 'Get Contacts', class: 'step04', active: '' }
    ]

  }

  ngOnInit(): void {
    this.userId = localStorage.getItem('id')
    let email = localStorage.getItem('email')
    this.personObject = {
      email: email,
      phone: "05455546546",
      first_name: "Dennis Njogu"
    }
  }

  switchTab(offset: number) {
    const newTab = this.currentTab + offset;

    if (newTab >= 1 && newTab <= 5) {
      this.previousTab = this.currentTab;
      this.currentTab = newTab;
      this.updateContainerWidth(offset);
      window.scrollTo(0, 0);
    }
  }

  updateContainerWidth(offset: number) {
    const currentWidth = parseInt(this.containerWidth, 10);
    const newWidth = currentWidth + offset * 30;
    this.containerWidth = `${newWidth}%`;
  }

  onFileSelected(value:any) {
    
  }

  // toggleIcon(section: string) {
  //   console.log('Section Toggled')
  //   // this.activeSection = this.activeSection === section ? '' : section;
  //   window.scrollTo(0, document.body.scrollHeight);

  // }

  toggleTheme(theme:string) {
    this.activeSection = this.activeTheme === theme ? '' : theme;
  }

  toggleIcon(templateId: any) {
    console.log(templateId, 'Template Id')
    this.defaultTemplate = templateId
    // Toggle the selected item
    if (this.selectedItem === templateId) {
      this.selectedItem = null;
    } else {
      this.selectedItem = templateId;
    }
  }

  isIconVisible(item: any) {
    return this.selectedItem === item;
  }

  onSubmit() {
    console.log(typeof(this.email), typeof(this.phone), 'Phone Details')
    Loading.pulse()
    this.fiveStepProcessService.fiveStepProcessService(this.businessName, this.defaultTemplate, this.email, this.phone, this.personObject, this.userId ).subscribe((res:any) => {
      console.log(res, 'The Resul---107----')
      if (res['sso_link']) {
        let sso_link = res['sso_link']
        this.ssoLink = sso_link
        let account_name = res['account_name']
        let site_name = res['site_name']
        // this.router.navigate(['/onboarding', sso_link])
        if(sso_link) {
          localStorage.setItem('account_name', account_name)
          localStorage.setItem('site_name', site_name)
          localStorage.setItem('template_id', '1000440')
          // this.saveSsoLink()
          const link = document.createElement('a');
          link.target = '_blank';
          link.href = sso_link;
          link.style.visibility = 'hidden'; // Set the CSS style to hide the link
          document.body.appendChild(link);
          link.click();
          
        }
        this.router.navigate(['/'])
      }
      Loading.remove()
    })
  }

  saveSsoLink() {
    this.fiveStepProcessService.saveSsoLink(this.ssoLink, this.userId).subscribe((res) => {
      console.log(res, 'Save SSO Link-----128----')
    })
  }
}
