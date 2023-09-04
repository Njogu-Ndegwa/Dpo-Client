import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder } from '@angular/forms';
import { Loading, Notify } from 'notiflix';
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
    Loading.pulse('Loading...')
    let domain: any = this.myForm.get('domain')!.value;
    this.fiveStepProcess.publishSite(this.siteName, domain).subscribe((res:any)=> {
      console.log(res, 'The Result of the Page----33----')
      if(res['message'] === 'success'){
        Notify.success('Site Published Succesfully')
        Loading.remove()
        this.myForm.reset()
        setTimeout(() => {
          const parentWindow = window.parent;
          if (parentWindow) {
            parentWindow.postMessage('publishSite', 'https://diy.infomoby.com');
          }
        },1500)
      }else if(res['message'] === 'error'){
        Notify.failure('There was an error publishing your site. Please try again')
        Loading.remove()
      }
    })
    console.log(domain, 'The Domain');
  }

}
