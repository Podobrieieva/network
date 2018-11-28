import {Actions, Effect, ofType} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {GetPasswordFail, GetPasswordSuccess, PasswordChangesActionTypes} from '../actions/password-change.actions';

import {catchError, map} from 'rxjs/operators';

@Injectable()
export class PasswordChangeEffect {
  @Effect()
  getIsEmail$: Observable<Action>  = this.actions$.pipe(
    ofType(PasswordChangesActionTypes.GET_PASSWORD),
    map(() => new GetPasswordSuccess(true)),
    catchError(err => of(new GetPasswordFail(err)))
  );

  constructor(private actions$: Actions) {}

}
