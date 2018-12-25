import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { Action } from '@ngrx/store';
import { GetUsers, GetUsersFail, GetUsersSuccess, UserProfileActionTypes } from '../actions/user-profile.actions';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { NetworkService } from '../.././../shared/services/network.service';

@Injectable()
export class GetUsersEffect {
  @Effect()
  getIsUsers$: Observable<Action>  = this.actions$
  .pipe(
    ofType<GetUsers>(UserProfileActionTypes.GET_USERS),
    exhaustMap(
      action => this.networkService.getUsersSearch(action.payload).pipe(
        map(data => {
          return new GetUsersSuccess(data.data.users);
        }),
        catchError(err => {
          return of(new GetUsersFail(err));
        })
      )
    )
  );

  constructor(
    private actions$: Actions,
    private networkService: NetworkService,
    private router: Router) {}
}
