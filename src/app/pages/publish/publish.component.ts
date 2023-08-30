import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder } from '@angular/forms';
import { Notify } from 'notiflix';
import { FiveStepProcessService } from 'src/app/services/five-step-process/five-step-process.service';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.scss']
})
export class PublishComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private fiveStepProcess: FiveStepProcessService
    ) { 
    this.myForm = this.formBuilder.group({
      domain: ''
    });
  }
  domain: any = ''
  myForm!: FormGroup;
  siteName: string = ''
  ngOnInit(): void {
    this.siteName = localStorage.getItem('site_name')!
  }

  publishSite() {
    let domain: any = this.myForm.get('domain')!.value;
    this.fiveStepProcess.publishSite(this.siteName, domain).subscribe((res:any)=> {
      if(res['message'] === 'success'){
        Notify.success('Site Published Succesfully')
        setTimeout(() => {
          const parentWindow = window.parent;
          if (parentWindow) {
            parentWindow.postMessage('publishSite', 'https://diy.infomoby.com');
          }
        }, 500)
      }else if(res['message'] === 'error'){
        Notify.failure('There was an error publishing your site. Please try again')
      }
    })
    console.log(domain, 'The Domain');
  }

}
