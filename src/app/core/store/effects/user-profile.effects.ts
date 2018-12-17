import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { Action } from '@ngrx/store';
import { GetUserProfile, GetUserProfileFail, GetUserProfileSuccess, UserProfileActionTypes } from '../actions/user-profile.actions';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { NetworkService } from '../.././../shared/services/network.service';
import { GetUserPosts } from '../actions/user-posts.actions';
import { select, Store} from "@ngrx/store";
import { State } from "../../../core/store";

@Injectable()
export class UserProfileEffect {
  @Effect()
  getIsUserProfile$: Observable<Action>  = this.actions$
  .pipe(
    ofType<GetUserProfile>(UserProfileActionTypes.GET_USER_PROFILE),
    exhaustMap(
    	action => this.networkService.getUserProfile().pipe(
    		map(data => {
          sessionStorage.setItem('userProfile', JSON.stringify(data.data.user));
          this.store.dispatch(new GetUserPosts(data.data.user.id));
          //this.router.navigate(["network/profile", {id: data.data.user.id}]);
          return new GetUserProfileSuccess(data.data.user);           		    			
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
  	private router: Router,
  	private store: Store<State>) {}
}
