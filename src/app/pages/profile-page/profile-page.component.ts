import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  firstName!:string
  secondName!:string
  emailAddress!:string
  phoneNumber!:string
  businessName!:string
  businessEmail!:string
  photo!:string
  constructor(
    private profileService: ProfileService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  onFileSelected(event:any) {
    const selectedFile = event.target.files[0];
    console.log(selectedFile, 'The Selected File')
  }

  saveProfile() {
    this.profileService.profileService(
      this.firstName,
      this.secondName, 
      this.emailAddress, 
      this.photo, 
      this.businessName, 
      this.businessEmail, 
      this.phoneNumber).subscribe((res) => {
        
      })
  }

  cancel() {
    this.router.navigate([''])
  }

}
