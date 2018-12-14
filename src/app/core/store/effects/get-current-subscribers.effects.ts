import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { GetSubscribersId, GetSubscribersIdFail, GetSubscribersIdSuccess, SubscribersActionTypes } from '../actions/subscribe.actions';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { NetworkService } from '../.././../shared/services/network.service'

@Injectable()
export class GetSubscribersIdEffect {
  @Effect()
  getIsSubscribersCurrent$: Observable<Action>  = this.actions$
  .pipe(
    ofType<GetSubscribersId>(SubscribersActionTypes.GET_SUBSCRIBERS_ID),
    exhaustMap(
    	action => this.networkService.getUsersSubscribersId(action.payload).pipe(
    		map(data => {
          return new GetSubscribersIdSuccess(data.data.subscribers);           		    			
    		}),
    		catchError(err => {
    			return of(new GetSubscribersIdFail(err));
    		})
  		)
    )  

  );

  constructor(
  	private actions$: Actions,
  	private networkService: NetworkService) {}
}


