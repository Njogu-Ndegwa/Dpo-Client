import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder } from '@angular/forms';
import { Loading, Notify } from 'notiflix';
import { FiveStepProcessService } from 'src/app/services/five-step-process/five-step-process.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.scss']
})
export class PublishComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private fiveStepProcess: FiveStepProcessService,
    private router: Router,
    private activatedRoute: ActivatedRoute
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
    // this.activatedRoute.paramMap.subscribe((res) => {
    //   console.log(res, 'Param Map Result....')
    // })
    // this.activatedRoute.params.subscribe((res) => {
    //   console.log(res, 'Params Result...34')
    // })
    const queryParams = this.activatedRoute.snapshot.queryParams;

    const sitenameR = queryParams['sitename'];

    console.log(sitenameR, 'The SiteName')
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
            this.router.navigate(['/publish-instruction'])
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
