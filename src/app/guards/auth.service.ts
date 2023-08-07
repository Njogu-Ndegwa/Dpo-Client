import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Mock token (replace this with your actual implementation)
  private token: string = '';

  constructor() {
    // Load the token from storage or wherever it is stored
    // For example, you might load it from localStorage or a cookie
    this.token = localStorage.getItem('token') || '';
  }

  isAuthenticated(): boolean {
    // Check if the token exists
    return !!this.token;
  }

  // You can add other methods for login, logout, token refresh, etc.
}
