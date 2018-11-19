import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class RegisterGuard implements CanActivate {
  constructor(public router: Router) {}

  canActivate(): boolean {
    if (!this.isAuthenticated()) {
      this.router.navigate(['register']);
      console.log('0000000000000000000000')
      return false;
    }
    console.log('111111111111111111111')
    return true;
  }

  private isAuthenticated() {
    return localStorage.getItem('isRegistered') || localStorage.getItem('loggedIn') ;
  }
}