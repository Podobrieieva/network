import {ActionReducerMap, ActionReducer, MetaReducer, createFeatureSelector, createSelector} from '@ngrx/store';
import {environment} from '../../../environments/environment';
import * as fromRouter from '@ngrx/router-store';
import * as fromNews from './reducers/news.reducer';
import * as fromPasswordChange from './reducers/password-change.reducer';
import * as fromUserProfile from './reducers/user-profile.reducer';
import * as fromUserPosts from './reducers/user-posts.reducer';
import * as fromSubscribe from './reducers/subscribers.reducer';
import * as fromUsers from './reducers/user-profile.reducer'
/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface State {
  router: fromRouter.RouterReducerState;
  post: fromNews.State;
  passwordChange: fromPasswordChange.IpassChangeState;
  userProfile: fromUserProfile.State;
  userPosts: fromUserPosts.State;
  subscribers: fromSubscribe.State;
  users: fromUsers.State;
}

export const reducers: ActionReducerMap < State > = {
  router: fromRouter.routerReducer,
  post: fromNews.reducer,
  passwordChange: fromPasswordChange.reducer,
  userProfile: fromUserProfile.reducer,
  userPosts: fromUserPosts.reducer,
  subscribers: fromSubscribe.reducer,
  users: fromUsers.reducer
};

// console.log all actions
export function logger(reducer: ActionReducer <State>): ActionReducer < State > {
  return function (state: State, action: any): State {
    console.log('action', action);
    console.log('state', state);
    return reducer(state, action);
  };
}

export const getIsUserProfile = (state) => state.userProfile.isUserProfile;
export const getIsUpdateUserProfile = (state) => state.userProfile.isUpdateUserProfile;
export const getIsCurrentUserProfile = (state) => state.userProfile.isCurrentUserProfile;
export const getIsNewPassword = (state) => state.passwordChange.isNewPass;
export const getIsSubscribersCurrent = (state) => state.subscribers.isGetSubscribersCurrent;
export const getIsSubscribersProfile = (state) => state.subscribers.isGetSubscribersProfile;
export const getIsAddSubscribe = (state) => state.subscribers.isAddSubscribe;
export const getIsDeleteSubscribe = (state) => state.subscribers.isDeleteSubscribe;
export const getIsSubscriptionsProfile = (state) => state.subscribers.isGetSubscriptionsProfile;
export const getIsSubscriptionsId = (state) => state.subscribers.isGetSubscriptionsId;
export const getIsUsers = (state) => state.users.isUsers;

// export const getNewsState = createFeatureSelector<fromNews.State>('news');

export const getPosts = (state) => state.post.posts;
export const getIsUserPosts = (state) => state.userPosts.isUserPosts;
export const getIsAddUserPost = (state) => state.userPosts.isAddUserPost;

export const getIsAddLike = (state) => state.userPosts.isAddLike;
export const getIsAddDislike = (state) => state.userPosts.isAddDislike;




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


