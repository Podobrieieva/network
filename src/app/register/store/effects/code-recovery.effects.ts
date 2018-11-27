import {Actions, Effect, ofType} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {CodesActionTypes, GetCodeSuccess, GetCodeFail} from '../actions/code-recovery.actions';

import {catchError, map} from 'rxjs/operators';


@Injectable()
export class CodeEffect {
  @Effect()
  getIsCode$: Observable<Action>  = this.actions$.pipe(
    ofType(CodesActionTypes.GET_CODE),
    map(() => new GetCodeSuccess(true)),
    catchError(err => of(new GetCodeFail(err)))
  );

  constructor(private actions$: Actions) {}

}