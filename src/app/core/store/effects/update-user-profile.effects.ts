import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { GetUserProfile, PutUpdateProfile, PutUpdateProfileFail, PutUpdateProfileSuccess, UserProfileActionTypes } from '../actions/user-profile.actions';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { NetworkService } from '../.././../shared/services/network.service';
import { AlertService } from '../../../register/service/alert.service'
import { select, Store} from "@ngrx/store";
import { State } from "../../../core/store";

@Injectable()
export class UpdateUserProfileEffect {
  @Effect()
  getIsUpdateUserProfile$: Observable<Action>  = this.actions$
  .pipe(
    ofType<PutUpdateProfile>(UserProfileActionTypes.PUT_UPDATE_PROFILE),
    exhaustMap(
    	action => this.networkService.putUpdateProfile(action.payload).pipe(
    		map(data => {
          //this.store.dispatch(new GetUserProfile());
          this.alertService.success('Your profile has been successfully updated.', true);  
          return new PutUpdateProfileSuccess(data.data.user);           		    			
    		}),
    		catchError(err => {
    			return of(new PutUpdateProfileFail(err));
    		})
  		)
    )  

  );

  constructor(
  	private actions$: Actions,
  	private networkService: NetworkService,
    private alertService: AlertService,
    private store: Store<State>) {}
}