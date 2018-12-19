import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { catchError, exhaustMap, map } from 'rxjs/operators';

import { AddLike, AddLikeFail, AddLikeSuccess, UserPostsActionTypes } from '../actions/user-posts.actions'
import { NetworkService } from '../../../shared/services/network.service';
import { GetPosts } from '../../../core/store/actions/news.actions'
import { select, Store} from "@ngrx/store";
import { State } from "../../../core/store";

@Injectable()
export class AddLikeEffect {
  @Effect()
  getIsAddLike$: Observable<Action>  = this.actions$
  .pipe(
    ofType<AddLike>(UserPostsActionTypes.ADD_LIKE),
    exhaustMap(
    	action => this.networkService.addLikePost(action.payload).pipe(
    		map(data=> {
        console.log(data)
        this.store.dispatch(new GetPosts ());
                		
          return new AddLikeSuccess(data);           		    			
    		}),
    		catchError(err => {    		
    			return of(new AddLikeFail(err));
    		})
  		)
    )  

  );

  constructor(
  	private actions$: Actions,
  	private networkService: NetworkService,
  	private store: Store<State>) {}
}