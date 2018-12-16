import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { Action } from '@ngrx/store';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { GetPasswordFail,GetPassword, GetPasswordSuccess, PasswordChangesActionTypes} from '../actions/password-change.actions';
import { NetworkService } from '../../../shared/services/network.service'
import { AlertService } from '../../../register/service/alert.service'


@Injectable()
export class PasswordChangeEffect {
  @Effect()
  getIsPassword$: Observable<Action>  = this.actions$
  .pipe(
    ofType(PasswordChangesActionTypes.GET_PASSWORD),
    exhaustMap(
      action => this.networkService.resetPassword(action['payload']).pipe(
        map(data => {
          this.alertService.success('Your password has been reset successfully, you can now log in with your new password.', true);	
    	    window.close();
          return new GetPasswordSuccess(data);
    }),
    catchError(err => {
          this.alertService.error('Registration failed', true);
          return of(new GetPasswordFail(err));
        })
      )
    ) 

  );
    
  constructor(
    private actions$: Actions,
    private networkService: NetworkService,
    private alertService: AlertService,
    private router: Router)  {}

}

 



