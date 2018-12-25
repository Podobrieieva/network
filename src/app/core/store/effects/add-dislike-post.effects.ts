import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { select, Store, Action } from '@ngrx/store';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { State } from '../../../core/store';
import { AddDislike, AddDislikeFail, AddDislikeSuccess, GetUserPosts, UserPostsActionTypes } from '../actions/user-posts.actions';
import { NetworkService } from '../../../shared/services/network.service';
import { GetPosts } from '../../../core/store/actions/news.actions';

@Injectable()
export class AddDislikeEffect {
  @Effect()
  getIsAddDislike$: Observable<Action>  = this.actions$
  .pipe(
    ofType<AddDislike>(UserPostsActionTypes.ADD_DISLIKE),
    exhaustMap(
      action => this.networkService.addDislikePost(action.payload).pipe(
        map(data => {
          this.store.dispatch(new GetPosts());
          this.store.dispatch(new GetUserPosts(data.data.post.author.id));
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
