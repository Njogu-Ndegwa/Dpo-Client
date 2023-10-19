import { Component, OnInit } from '@angular/core';
import { FiveStepProcessService } from 'src/app/services/five-step-process/five-step-process.service';
import { Notify } from 'notiflix';
@Component({
  selector: 'app-publish-instruction',
  templateUrl: './publish-instruction.component.html',
  styleUrls: ['./publish-instruction.component.scss']
})
export class PublishInstructionComponent implements OnInit {
  email:string = ''
  isLoading:boolean = false
  constructor(
    private fiveStepProcessService: FiveStepProcessService
  ) { }

  ngOnInit(): void {
  }
  sendEmail() {
    console.log(this.email, 'Email----18----')
    this.isLoading = true
    this.fiveStepProcessService.sendEmailForHelp(this.email).subscribe((res:any) => {
      this.isLoading = false
      this.email =''
      console.log(res, 'The Res---24---')
      if(res['message'] === 'success') {
        Notify.success('Email Sent Successfully')
      } else {
        Notify.failure('There was a problem sending the email, please try again')
      }
    })
  }
}
