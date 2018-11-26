import {Actions, Effect, ofType} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {GetLoginFail, GetLoginSuccess, LoginsActionTypes} from '../actions/login.actions';
import {catchError, map} from 'rxjs/operators';

@Injectable()
export class LoginEffect {
  @Effect()
  getIsRegister$: Observable<Action>  = this.actions$.pipe(
    ofType(LoginsActionTypes.GET_LOGIN),
    map(() => new GetLoginSuccess(true)),
    catchError(err => of(new GetLoginFail(err)))
  );

  constructor(private actions$: Actions) {}
}