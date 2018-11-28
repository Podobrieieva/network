import {Actions, Effect, ofType} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {GetEmailFail, GetEmailSuccess, EmailsActionTypes} from '../actions/password-recovery.actions';

import {catchError, map} from 'rxjs/operators';

@Injectable()
export class EmailEffect {
  @Effect()
  getIsEmail$: Observable<Action>  = this.actions$.pipe(
    ofType(EmailsActionTypes.GET_EMAIL),
    map(() => new GetEmailSuccess("1111")),
    catchError(err => of(new GetEmailFail(err)))
  );

  constructor(private actions$: Actions) {}

}
