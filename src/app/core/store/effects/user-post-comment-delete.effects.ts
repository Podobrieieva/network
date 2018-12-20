import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { Action } from '@ngrx/store';
import { catchError, exhaustMap, map } from 'rxjs/operators';

import { UserPostsActionTypes, GetUserPostDelete, GetUserPostDeleteSuccess, GetUserPostDeleteFail, GetUserPostCommentDelete } from '../actions/user-posts.actions'
import { NetworkService } from '../../../shared/services/network.service';
import { GetUserProfile, GetCurrentUserProfile } from '../actions/user-profile.actions'
import { Store, select } from '@ngrx/store';
import { State } from '../../../core/store';
import { GetPosts } from '../actions/news.actions';


@Injectable()
export class UserPostDeleteCommentEffect {
  @Effect()
  getIsUserPostCommentDelete$: Observable<Action>  = this.actions$
  .pipe(
    ofType<GetUserPostCommentDelete>(UserPostsActionTypes.GET_USER_POST_COMMENT_DELETE),
    exhaustMap(
    	action => this.networkService.deleteComment(action.payloadPost, action.payloadComment).pipe(
    		map(data=> { 
          
          // console.log(data)
          // this.store.dispatch(new GetUserProfile()) 
          data.data.post.author.id === action.payloadComment.author.id ? 
          this.store.dispatch(new GetUserProfile()) : this.store.dispatch(new GetCurrentUserProfile(data.data.post.author.id));
  
          this.store.dispatch(new GetPosts());;        		
          return new GetUserPostDeleteSuccess(data);           		    			
    		}),
    		catchError(err => {    		
    			return of(new GetUserPostDeleteFail(err));
    		})
  		)
    )  

  );

  constructor(
  	private actions$: Actions,
  	private networkService: NetworkService,
  	private store: Store<State>) {}
}