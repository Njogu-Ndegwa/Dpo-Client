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
  containerWidth: string = '25%';
  businessName:any
  activeSection: string = '';
  defaultTemplate: string = '1000440'
  activeTheme:string = '';
  email:any
  phone:any
  personObject:any
  items: any
  selectedItem: any = null;
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
    let email = localStorage.getItem('email')
    this.personObject = {
      email: email,
      phone: "05455546546",
      first_name: "Dennis Njogu"
    }
    this.fiveStepProcessService.getTemplatesService().subscribe((res) => {
      console.log(res, 'Templates')
      this.items = res
    })
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
    const newWidth = currentWidth + offset * 25;
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
    console.log(this.defaultTemplate, 'Default Me------101-----')
    Loading.pulse()
    this.fiveStepProcessService.fiveStepProcessService(this.businessName, this.defaultTemplate, this.email, this.phone, this.personObject ).subscribe((res:any) => {
      if (res['sso_link']) {
        let sso_link = res['sso_link']
        console.log(res,' The Result')
        console.log(sso_link, 'The SSO Link')
        // this.router.navigate(['/onboarding', sso_link])
        if(sso_link) {
          const link = document.createElement('a');
          link.target = '_blank';
          link.href = sso_link;
          link.setAttribute('visibility', 'hidden');
          link.click();
        }
      }
      Loading.remove()
    })
  }
}
