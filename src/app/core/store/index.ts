import {ActionReducerMap, ActionReducer, MetaReducer} from '@ngrx/store';
import {environment} from '../../../environments/environment';
import * as fromRouter from '@ngrx/router-store';
import * as fromNews from './reducers/news.reducer';

/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface State {
  router: fromRouter.RouterReducerState;
  post: fromNews.INewsState;
}

export const reducers: ActionReducerMap < State > = {
  router: fromRouter.routerReducer,
  post: fromNews.reducer
};

// console.log all actions
export function logger(reducer: ActionReducer < State >): ActionReducer < State > {
  return function (state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

// export const getNewsState = createFeatureSelector<fromNews.State>('news');

export const getPosts = (state: State) => state.post.posts;

// export const getTodosSelector = createSelector(
//     getNewsState,
//     getPosts,
// );
/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */
export const metaReducers: MetaReducer < State > [] = !environment.production
  ? [logger]
  : [];