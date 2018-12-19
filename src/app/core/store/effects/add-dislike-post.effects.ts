import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { catchError, exhaustMap, map } from 'rxjs/operators';

import { AddDislike, AddDislikeFail, AddDislikeSuccess, UserPostsActionTypes } from '../actions/user-posts.actions'
import { NetworkService } from '../../../shared/services/network.service';
import { GetPosts } from '../../../core/store/actions/news.actions'
import { select, Store} from "@ngrx/store";
import { State } from "../../../core/store";

@Injectable()
export class AddDislikeEffect {
  @Effect()
  getIsAddDislike$: Observable<Action>  = this.actions$
  .pipe(
    ofType<AddDislike>(UserPostsActionTypes.ADD_DISLIKE),
    exhaustMap(
    	action => this.networkService.addDislikePost(action.payload).pipe(
    		map(data=> {
        console.log(data)
        this.store.dispatch(new GetPosts ());
        return new AddDislikeSuccess(data);           		    			
    		}),
    		catchError(err => {    		
    			return of(new AddDislikeFail(err));
    		})
  		)
    )  

  );

  constructor(
  	private actions$: Actions,
  	private networkService: NetworkService,
  	private store: Store<State>) {}
}