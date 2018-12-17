import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { Action } from '@ngrx/store';
import { catchError, exhaustMap, map } from 'rxjs/operators';

import { UserPostsActionTypes, GetUserPostDelete, GetUserPostDeleteSuccess, GetUserPostDeleteFail } from '../actions/user-posts.actions'
import { NetworkService } from '../../../shared/services/network.service';


@Injectable()
export class UserPostDeleteEffect {
  @Effect()
  getIsUserPostDelete$: Observable<Action>  = this.actions$
  .pipe(
    ofType<GetUserPostDelete>(UserPostsActionTypes.GET_USER_POST_DELETE),
    exhaustMap(
    	action => this.networkService.deletePost(action.payload).pipe(
    		map(data=> {           		
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
  	) {}
}