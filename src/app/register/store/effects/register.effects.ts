import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { Action } from '@ngrx/store';
import { catchError, exhaustMap, map } from 'rxjs/operators';

import { GetRegister, GetRegisterFail, GetRegisterSuccess, RegisterActionTypes } from '../actions/register.actions';
import { AlertService } from '../../service/alert.service';
import { RegisterService } from '../../service/register.service'

@Injectable()
export class RegisterEffect {
  @Effect()
  getIsRegister$: Observable<Action>  = this.actions$
  .pipe(
    ofType<GetRegister>(RegisterActionTypes.GET_REGISTER),
    exhaustMap(
    	action => this.registerService.register(action.payload).pipe(
    		map(data => {
    			 		this.alertService.success('Registration successful', true);
           		sessionStorage.setItem('permissionToEnter', JSON.stringify(data));
           		sessionStorage.setItem('token', data['data'].token);
           		this.router.navigate([""]);
           		return new GetRegisterSuccess(data);
           		    			
    		}),
    		catchError(err => {
    			this.alertService.error('Registration failed', true);
    			return of(new GetRegisterFail(err));
    		})
  		)
    )  

  );

  constructor(
  	private actions$: Actions,
  	private registerService: RegisterService,
  	private alertService: AlertService,
  	private router: Router
  	) {}
}





