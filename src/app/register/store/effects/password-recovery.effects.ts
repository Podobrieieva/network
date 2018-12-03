import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { Action } from '@ngrx/store';
import { GetEmail, GetEmailSuccess, GetEmailFail, EmailsActionTypes } from '../actions/password-recovery.actions';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { AlertService } from '../../service/alert.service';
import { RegisterService } from '../../service/register.service'

@Injectable()
export class EmailEffect {
  @Effect()
  getIsEmail$: Observable<Action>  = this.actions$
  .pipe(
    ofType<GetEmail>(EmailsActionTypes.GET_EMAIL),
    exhaustMap(
    	action => this.registerService.passwordRecovery(action.payload).pipe(
    		map(data => {
    			console.log(data)
           		this.alertService.success('You have requested a password reset, for this, use the link sent to your e-mail', true);
           		// localStorage.setItem('permissionToEnter', JSON.stringify(data));
           		// localStorage.setItem('token', data['data'].token);
           		// this.router.navigate([""]);
           		return new GetEmailSuccess(data);
           		    			
    		}),
    		catchError(err => {
    			this.alertService.error('Email !!!!! failed', true);
    			return of(new GetEmailFail(err));
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
