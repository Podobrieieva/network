import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { Action } from '@ngrx/store';
import { catchError, exhaustMap, map } from 'rxjs/operators';

import { GetUserPostAdd, GetUserPostAddFail, GetUserPostAddSuccess, UserPostsActionTypes } from '../actions/user-posts.actions'
import { NetworkService } from '../../../shared/services/network.service';


@Injectable()
export class UserPostAddEffect {
  @Effect()
  getIsUserPostAdd$: Observable<Action>  = this.actions$
  .pipe(
    ofType<GetUserPostAdd>(UserPostsActionTypes.GET_USER_POST_ADD),
    exhaustMap(
    	action => this.networkService.addPost(action.payload, action.imageUrl).pipe(
    		map(data=> {
    			console.log(data)
           		
           		return new GetUserPostAddSuccess(data);
           		    			
    		}),
    		catchError(err => {
    		
    			return of(new GetUserPostAddFail(err));
    		})
  		)
    )  

  );

  constructor(
  	private actions$: Actions,
  	private networkService: NetworkService,
  	) {}
}