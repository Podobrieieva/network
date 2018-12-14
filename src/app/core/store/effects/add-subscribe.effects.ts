import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { catchError, exhaustMap, map } from 'rxjs/operators';


import { GetUserProfile, GetCurrentUserProfile } from '../../../core/store/actions/user-profile.actions'
import { GetSubscribersId, GetSubscribersProfile } from '../../../core/store/actions/subscribe.actions'
import { select, Store} from "@ngrx/store";
import { getIsUserProfile, State, getIsCurrentUserProfile, getIsSubscribersProfile, getIsSubscribersCurrent } from "../../../core/store";


import { AddSubscribe, AddSubscribeSuccess, AddSubscribeFail, SubscribersActionTypes } from '../actions/subscribe.actions';
import { AlertService } from '../../../register/service/alert.service';
import { NetworkService } from '../../../shared/services/network.service'

@Injectable()
export class AddSubscribeEffect {
  @Effect()
  getIsAddSubscribe$: Observable<Action>  = this.actions$
  .pipe(
    ofType<AddSubscribe>(SubscribersActionTypes.ADD_SUBSCRIBE),
    exhaustMap(
    	action => this.networkService.addSubscribe(action.payload).pipe(
    		map(data => {
          this.alertService.success('Subscription on profile succeeded.', true);
          this.store.dispatch(new GetUserProfile());
          this.store.dispatch(new GetSubscribersProfile());
       		return new AddSubscribeSuccess(data);           		    			
    		}),
    		catchError(err => {
          this.alertService.error(err, true);
    			return of(new AddSubscribeFail(err));
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
