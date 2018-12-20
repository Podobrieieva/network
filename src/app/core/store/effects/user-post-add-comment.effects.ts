import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { Action } from '@ngrx/store';
import { catchError, exhaustMap, map } from 'rxjs/operators';

import { GetUserPostAddComment, GetUserPostAddCommentFail, GetUserPostAddCommentSuccess, UserPostsActionTypes, GetUserPosts } from '../actions/user-posts.actions'
import { NetworkService } from '../../../shared/services/network.service';

import { GetUserProfile, GetCurrentUserProfile } from '../actions/user-profile.actions'
import { select, Store} from "@ngrx/store";
import { State } from "../../../core/store";
import { GetPosts } from '../actions/news.actions';

@Injectable()
export class UserPostAddCommentEffect {
  @Effect()
  getIsUserPostAddComment$: Observable<Action>  = this.actions$
  .pipe(
    ofType<GetUserPostAddComment>(UserPostsActionTypes.GET_USER_POST_ADD_COMMENT),
    exhaustMap(
    	action => this.networkService.addComment(action.payloadIdPost, action.payload).pipe(
    		map(data=> {
          data.data.post.author.id === action.payload.author.id ? 
                this.store.dispatch(new GetUserProfile()) : this.store.dispatch(new GetCurrentUserProfile(data.data.post.author.id));
      
        this.store.dispatch(new GetPosts());;       		
        return new GetUserPostAddCommentSuccess(data);           		    			
    		}),
    		catchError(err => {    		
    			return of(new GetUserPostAddCommentFail(err));
    		})
  		)
    )  

  );

  constructor(
  	private actions$: Actions,
  	private networkService: NetworkService,
  	private store: Store<State>) {}
}