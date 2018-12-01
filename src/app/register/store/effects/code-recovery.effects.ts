import {Actions, Effect, ofType} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {CodesActionTypes, GetCodeSuccess, GetCodeFail} from '../actions/code-recovery.actions';
import {catchError, map} from 'rxjs/operators';


import {selectIsUserCode} from '../reducers/code-recovery.reducer'
import { getIsUserCode,  State} from "../../store";


import { select, Store} from "@ngrx/store";
import { Subscription } from "rxjs";




@Injectable()
export class CodeEffect {
	private isCodeUserSubscription: Subscription;

  @Effect()
  getIsCode$: Observable<Action>  = this.actions$.pipe(
    ofType(CodesActionTypes.GET_CODE),
    map(() =>{
    	    	 	return new GetCodeSuccess(true)
        }),
    catchError(err => of(new GetCodeFail(err)))
 );

  constructor(private actions$: Actions, private store: Store<State>) {
		this.isCodeUserSubscription = this.store.pipe(select(getIsUserCode)).subscribe(isUserCode => {
		      if (isUserCode && localStorage.getItem ('accountAvailability') === isUserCode) {	      	
		      	localStorage.setItem('accountFree', "true");	       		
		      }
		return;
    })
  }
}