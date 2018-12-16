import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { RegisterService } from '../../register/service/register.service'


@Injectable({ providedIn: 'root' })
export class RegisterGuard implements CanActivate {
  constructor(
    public router: Router,
    private registerService: RegisterService
    ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const permissionToEnter = this.registerService.permissionToEnterValue;
    if (permissionToEnter && permissionToEnter.data.token) {
      return true;
    }
    this.router.navigate(['/register'], { queryParams: { returnUrl: state.url } });
      return false;
  }
}