import { Injectable, OnInit } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {

  // Mock token (replace this with your actual implementation)
  private token: string = '';

  constructor() {
    console.log('-----13----')
    // Load the token from storage or wherever it is stored
    // For example, you might load it from localStorage or a cookie
    this.token = localStorage.getItem('token') || '';
  }
  ngOnInit(): void {
    console.log('-----18------')
    // this.token = localStorage.getItem('token') || '';
    // let token = localStorage.getItem('token')
    // console.log('-------18----guard', this.token)

  }

  isAuthenticated(): boolean {
    // Check if the token exists
    this.token = localStorage.getItem('token') || '';
    console.log(this.token)
    console.log('-------19------', !!this.token)
    return !!this.token;
  }

  // You can add other methods for login, logout, token refresh, etc.
}
