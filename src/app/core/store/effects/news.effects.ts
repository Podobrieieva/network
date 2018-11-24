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
          map(data => ({type: newsAction.NewsActionTypes.GET_POSTS_SUCCESS, payload: data})),
          catchError(() => of({type: newsAction.NewsActionTypes.GET_POSTS_FAIL}))
        )
      )
    );



  constructor(private actions$: Actions, private networkService: NetworkService) {}
}