import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { select, Store, Action} from '@ngrx/store';
import { State } from '../../../core/store';
import { GetUserProfile } from '../../../core/store/actions/user-profile.actions';
import { AddLike, AddLikeFail, AddLikeSuccess, GetUserPosts, UserPostsActionTypes } from '../actions/user-posts.actions';
import { NetworkService } from '../../../shared/services/network.service';
import { GetPosts,  } from '../../../core/store/actions/news.actions';

@Injectable()
export class AddLikeEffect {
  @Effect()
  getIsAddLike$: Observable<Action>  = this.actions$
  .pipe(
    ofType<AddLike>(UserPostsActionTypes.ADD_LIKE),
    exhaustMap(
      action => this.networkService.addLikePost( action.payload ).pipe (
        map(data => {
          this.store.dispatch(new GetPosts());
          this.store.dispatch(new GetUserPosts(data.data.post.author.id));
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
    private store: Store<State>) { }
}
