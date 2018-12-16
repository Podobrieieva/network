import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { GetSubscribersId } from '../../../core/store/actions/subscribe.actions'
import { GetCurrentUserProfile, GetCurrentUserProfileFail, GetCurrentUserProfileSuccess, UserProfileActionTypes } from '../actions/user-profile.actions';
import { AlertService } from '../../../register/service/alert.service';
import { NetworkService } from '../../../shared/services/network.service'
import { select, Store, Action} from "@ngrx/store";
import { State } from "../../../core/store";

@Injectable()
export class CurrentUserProfileEffect {
  @Effect()
  getIsCurrentUserProfile$: Observable<Action>  = this.actions$
  .pipe(
    ofType<GetCurrentUserProfile>(UserProfileActionTypes.GET_CURRENT_USER_PROFILE),
    exhaustMap(
    	action => this.networkService.getCurrentUserProfile(action.payload).pipe(
    		map(data => {
          const carrentUser = data.data.user;          
           this.router.navigate(["network/profile"]);
           return new GetCurrentUserProfileSuccess(carrentUser);           		    			
    		}),
    		catchError(err => {
    			return of(new GetCurrentUserProfileFail(err));
    		})
  		)
    )  

  );

  constructor(
  	private actions$: Actions,
  	private networkService: NetworkService,
  	private alertService: AlertService,
    private router: Router,  	
    private store: Store<State>) {}
}
