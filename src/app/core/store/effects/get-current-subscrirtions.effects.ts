import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { GetSubscriptionsId,
         GetSubscriptionsIdSuccess,
         GetSubscriptionsIdFail,
         SubscribersActionTypes } from '../actions/subscribe.actions';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { NetworkService } from '../.././../shared/services/network.service';


@Injectable()
export class GetSubscriptionsIdEffect {
  @Effect()
  getIsSubscriptionsId$: Observable<Action>  = this.actions$
  .pipe(
    ofType<GetSubscriptionsId>(SubscribersActionTypes.GET_SUBSCRIPTIONS_ID),
    exhaustMap(
      action => this.networkService.getUsersSubscriptionsId(action.payload).pipe(
        map(data => new GetSubscriptionsIdSuccess(data.data.subscriptions) ),
        catchError(err => {
          return of(new GetSubscriptionsIdFail(err));
        })
      )
    )
  );

  constructor(
    private actions$: Actions,
    private networkService: NetworkService) {}
}
