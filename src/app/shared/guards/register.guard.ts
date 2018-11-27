import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class RegisterGuard implements CanActivate {
  constructor(public router: Router) {}

  canActivate(): boolean {
    if (!this.isAuthenticated()) {
      this.router.navigate(['register']);      
      return false;
    }  
    return true;
  }

  private isAuthenticated() {
    return localStorage.getItem('isRegistered') || localStorage.getItem('loggedIn') || localStorage.getItem('accountFree') ;
  }
}