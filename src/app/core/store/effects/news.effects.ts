import {Action} from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import { Observable, of } from 'rxjs';

import { NetworkService } from '../../../shared/services/network.service';
import * as newsAction from '../actions/news.actions';
import { catchError, exhaustMap, map } from 'rxjs/operators';

@Injectable()
export class NewsEffects {
  @Effect()
  getPosts$: Observable<Action> = this.actions$
    .pipe(
      ofType<newsAction.GetPosts>(newsAction.NewsActionTypes.GET_POSTS),
      exhaustMap(
        action => this.networkService.getPosts().pipe(
          map(data=> {
            return new newsAction.GetPostsSuccess(data)}),
          catchError(err => {
            return of(new newsAction.GetPostsFail(err));
          })
         )
      )
    );



  constructor(private actions$: Actions, private networkService: NetworkService) {}
}