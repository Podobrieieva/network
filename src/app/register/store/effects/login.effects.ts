import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { Action } from '@ngrx/store';
import { GetLogin, GetLoginSuccess, GetLoginFail, RegisterActionTypes } from '../actions/register.actions';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { AlertService } from '../../service/alert.service';
import { RegisterService } from '../../service/register.service';
import { NetworkService } from '../../../shared/services/network.service'
import { State} from '../../../core/store'
import { select, Store} from '@ngrx/store';
import { GetUserProfile } from '../../../core/store/actions/user-profile.actions';


@Injectable()
export class LoginEffect {
  @Effect()
  getIsLogin$: Observable<Action>  = this.actions$
  .pipe(
    ofType<GetLogin>(RegisterActionTypes.GET_LOGIN),
    exhaustMap(
    	action => this.registerService.login(action.payload).pipe(
    		map(data => {
    			sessionStorage.setItem('permissionToEnter', JSON.stringify(data));
          sessionStorage.setItem('token', data['data'].token);
          this.registerService.permissionSubject.next(data);
          this.networkService.profileСhange('profile');
          this.router.navigate(['/network/profile']); 
          return new GetLoginSuccess(data);           		    			
    		}),
    		catchError(err => {
          this.alertService.error('The email or password entered are not the same as those stored in our database. Check that the entered data is correct and try again.', true);
   				return of(new GetLoginFail(err));
    		})
  		)
    )  

  );

  constructor(
  	private actions$: Actions,
    private networkService: NetworkService, 
  	private registerService: RegisterService,
  	private alertService: AlertService,
  	private router: Router,
    private store: Store<State>
  	) {}
}