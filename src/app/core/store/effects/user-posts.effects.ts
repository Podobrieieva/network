import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { Action } from '@ngrx/store';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { NetworkService } from '../.././../shared/services/network.service';
import { GetUserPosts, UserPostsActionTypes,  GetUserPostsFail, GetUserPostsSuccess, } from '../actions/user-posts.actions';

@Injectable()
export class UserPostsEffect {
  @Effect()
  getIsUserPosts$: Observable<Action>  = this.actions$
  .pipe(
    ofType<GetUserPosts>(UserPostsActionTypes.GET_USER_POSTS),
    exhaustMap(
      action => this.networkService.getUserPosts(action.payload).pipe(
        map(data => {
          return new GetUserPostsSuccess(data.data.posts);
        }),
        catchError(err => {
          return of(new GetUserPostsFail(err));
        })
      )
    )
  );

  constructor(
    private actions$: Actions,
    private networkService: NetworkService,
    private router: Router
  ) {}
}
