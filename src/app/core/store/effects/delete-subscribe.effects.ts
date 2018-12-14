import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { catchError, exhaustMap, map } from 'rxjs/operators';

import { DeleteSubscribe, DeleteSubscribeSuccess, DeleteSubscribeFail, SubscribersActionTypes } from '../actions/subscribe.actions';
import { AlertService } from '../../../register/service/alert.service';
import { NetworkService } from '../../../shared/services/network.service'

import { GetUserProfile, GetCurrentUserProfile } from '../../../core/store/actions/user-profile.actions'
import { GetSubscribersId, GetSubscribersProfile } from '../../../core/store/actions/subscribe.actions'
import { select, Store} from "@ngrx/store";
import { getIsUserProfile, State, getIsCurrentUserProfile, getIsSubscribersProfile, getIsSubscribersCurrent } from "../../../core/store";




@Injectable()
export class DeleteSubscribeEffect {
  @Effect()
  getIsDeleteSubscribe$: Observable<Action>  = this.actions$
  .pipe(
    ofType<DeleteSubscribe>(SubscribersActionTypes.DELETE_SUBSCRIBE),
    exhaustMap(
    	action => this.networkService.deleteSubscribe(action.payload).pipe(
    		map(data => {
          console.log(data)
          this.alertService.success('Subscription on profile delete.', true);
          this.store.dispatch(new GetUserProfile());
          this.store.dispatch(new GetSubscribersProfile());
       		return new DeleteSubscribeSuccess(data);           		    			
    		}),
    		catchError(err => {
          this.alertService.error(err, true);
    			return of(new DeleteSubscribeFail(err));
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