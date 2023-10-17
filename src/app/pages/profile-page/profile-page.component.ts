import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { Router } from '@angular/router';
import { Notify, Loading } from 'notiflix';
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
  photo!:any
  userId!:string
  businessPhoneNumber!:string
  isPhotoLoaded:boolean = false
  photoUrl!:any
  constructor(
    private profileService: ProfileService,
    private router: Router
  ) { }

  ngOnInit(): void {
    let userId = localStorage.getItem('id')
    if (userId) {
      this.userId = userId
    }
    Loading.pulse('Loading...')
    this.profileService.getProfilePage(userId).subscribe((res:any) => {
      console.log(res)
      Loading.remove()
      res = res[0]
      this.businessEmail = res['business_email']
      let fullName = res['full_name'].split(' ')
      console.log(fullName, 'Full name')
      this.firstName = fullName[0]
      this.secondName = fullName[1]
      this.businessName = res['company_name']
      this.businessPhoneNumber= res['business_phone_number']
      this.emailAddress = res['email']
      this.phoneNumber = res['phone_number']
      this.photoUrl = res['photo_url']
    })
  }
  onFileSelected(event:any) {
    this.isPhotoLoaded = true
    const selectedFile = event.target.files[0];
    this.readFileAsBase64(selectedFile, (base64Data, error) => {
      if (error) {
        console.error('Error reading file:', error);
      } else {
        // Send the base64-encoded file data to the Flask backend
        this.photo = base64Data
      }
    });
  }

  readFileAsBase64(file: File, callback: (base64Data: string | null, error: any) => void): void {
    const reader = new FileReader();
  
    reader.onload = (event: any) => {
      callback(event.target.result.split(',')[1], null); // Success callback
    };
  
    reader.onerror = (event) => {
      callback(null, event); // Error callback
    };
  
    reader.readAsDataURL(file); // Read the file as a data URL
  }

  saveProfile() {
    Loading.pulse('Updating Profile...')
    this.profileService.profileService(
      this.firstName,
      this.secondName, 
      this.emailAddress, 
      this.photo, 
      this.businessName, 
      this.businessEmail, 
      this.phoneNumber,
      this.userId,
      this.businessPhoneNumber
      ).subscribe((res:any) => {
        Loading.remove()
        console.log(res, '-----77-----')
        if (res['message'] === 'success') {
          Notify.success('Profile Updated Successfully')
          this.router.navigate([''])
        }
      })
  }

  cancel() {
    this.router.navigate([''])
  }

}
