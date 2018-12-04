import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { Action } from '@ngrx/store';
import { GetUserProfile, GetUserProfileFail, GetUserProfileSuccess, UserProfileActionTypes } from '../actions/user-profile.actions';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { NetworkService } from '../.././../shared/services/network.service'

@Injectable()
export class UserProfileEffect {
  @Effect()
  getIsUserProfile$: Observable<Action>  = this.actions$
  .pipe(
    ofType<GetUserProfile>(UserProfileActionTypes.GET_USER_PROFILE),
    exhaustMap(
    	action => this.networkService.getUserProfile().pipe(
    		map(data => {
    			console.log(data)
           		localStorage.setItem('UserProfile', JSON.stringify(data));
           		this.router.navigate(["network/profile"]);
               return new GetUserProfileSuccess(data);           		    			
    		}),
    		catchError(err => {
    			return of(new GetUserProfileFail(err));
    		})
  		)
    )  

  );

  constructor(
  	private actions$: Actions,
  	private networkService: NetworkService,
  	private router: Router
  	) {}
}
