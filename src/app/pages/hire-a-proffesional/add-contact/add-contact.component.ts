import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Loading, Notify } from 'notiflix';
import { HireProffesionalService } from 'src/app/services/hire-professional/hire-proffesional.service';
@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {

  currentTab: number = 1;
  previousTab!: number;
  selected:string = ''
  assistanceType: string = ''
  fullName:string = ''
  emailAddress:string = ''
  communicationMode:string = ''
  phoneNumber:string = ''
  other:string = ''
  constructor(
    private router: Router,
    private hireProffesional: HireProffesionalService
  ) { 
  }

  ngOnInit(): void {
  }

  switchTab(offset: number) {
    const newTab = this.currentTab + offset;
    if (newTab >= 1 && newTab <= 4) {
      this.previousTab = this.currentTab;
      this.currentTab = newTab;
      // this.updateContainerWidth(offset);
      window.scrollTo(0, 0);
    }

    if (this.currentTab === 4) {
      this.addContact()
    }
  }


  handleClick(sectionId: string) {
    if (sectionId === '1') {
      this.assistanceType = 'Design my website'
    }else if (sectionId === '2'){
      this.assistanceType = 'Get an online store'
    }else if(sectionId === '3'){
      this.assistanceType = 'Other'
    }
    // if (this.selected === sectionId) {
    //   this.selected = null;
    // } else {
      this.selected = sectionId;
    // }
  }

  isSectionSelected(sectionId: string): boolean {
    return this.selected === sectionId;
  }


  addContact() {
    Loading.pulse('Loading...')
    this.hireProffesional.hireProfessionalService(this.fullName, this.emailAddress, this.phoneNumber, this.communicationMode, this.assistanceType, this.other).subscribe((res:any) => {
      console.log(res)
      Loading.remove()
      if(res['full_name']) {

        Notify.success('Email Sent Succesfully')
      } else{
        Notify.failure('There was a problem sending the email')
      }

    })
  }
  goBackHome() {
    this.router.navigate([''])
  }

}
