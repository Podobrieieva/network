import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { Action } from '@ngrx/store';
import { GetSubscribersProfile,
         GetSubscribersProfileFail,
         GetSubscribersProfileSuccess,
         SubscribersActionTypes } from '../actions/subscribe.actions';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { NetworkService } from '../.././../shared/services/network.service';


@Injectable()
export class GetSubscribersProfileEffect {
  @Effect()
  getIsSubscribersProfile$: Observable<Action>  = this.actions$
  .pipe(
    ofType<GetSubscribersProfile>(SubscribersActionTypes.GET_SUBSCRIBERS_PROFILE),
    exhaustMap(
      action => this.networkService.getUsersSubscribersProfile().pipe(
        map(data => {
          return new GetSubscribersProfileSuccess(data.data.subscribers);
        }),
        catchError(err => {
          return of(new GetSubscribersProfileFail(err));
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
