import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { GetSubscriptionsProfile, GetSubscriptionsProfileSuccess, GetSubscriptionsProfileFail, SubscribersActionTypes } from '../actions/subscribe.actions';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { NetworkService } from '../.././../shared/services/network.service'


@Injectable()
export class GetSubscriptionsProfileEffect {
  @Effect()
  getIsSubscriptionsProfile$: Observable<Action>  = this.actions$
  .pipe(
    ofType<GetSubscriptionsProfile>(SubscribersActionTypes.GET_SUBSCRIPTIONS_PROFILE),
    exhaustMap(
      action => this.networkService.getUsersSubscriptionsProfile().pipe(
        map(data => {
          return new GetSubscriptionsProfileSuccess(data.data.subscriptions);                         
        }),
        catchError(err => {
          return of(new GetSubscriptionsProfileFail(err));
        })
      )
    )
  );

  constructor(
    private actions$: Actions,
    private networkService: NetworkService
    ) {}
}
