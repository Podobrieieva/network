import {Action} from '@ngrx/store';


export enum UserPostsActionTypes {
    GET_USER_POSTS = '[USER_PROFILE] Fetch UserPosts requested',
    GET_USER_POSTS_SUCCESS = '[USER_PROFILE] Fetch UserPosts success',
    GET_USER_POSTS_FAIL = '[USER_PROFILE] Fetch UserPosts failed',
    GET_USER_POST_ADD = '[USER_PROFILE] Fetch UserPostsAdd requested',
    GET_USER_POST_ADD_SUCCESS = '[USER_PROFILE] Fetch UserPostsAdd success',
    GET_USER_POST_ADD_FAIL = '[USER_PROFILE] Fetch UserPostsAdd failed',

  }

  export class GetUserPosts implements Action{
    readonly type = UserPostsActionTypes.GET_USER_POSTS;
    constructor(public payload: string) {}
  }

  export class GetUserPostsSuccess implements Action {
    readonly type = UserPostsActionTypes.GET_USER_POSTS_SUCCESS;
    constructor(public payload: object) {}
  }

  export class GetUserPostsFail implements Action {
    readonly type = UserPostsActionTypes.GET_USER_POSTS_FAIL;
    constructor(public payload: object) {}
  }
  
  export class GetUserPostAdd implements Action{
    readonly type = UserPostsActionTypes.GET_USER_POST_ADD;
    constructor(public payload: object, public imageUrl:File) {}
  }

  export class GetUserPostAddSuccess implements Action {
    readonly type = UserPostsActionTypes.GET_USER_POST_ADD_SUCCESS;
    constructor(public payload: object) {}
  }

  export class GetUserPostAddFail implements Action {
    readonly type = UserPostsActionTypes.GET_USER_POST_ADD_FAIL;
    constructor(public payload: object) {}
  }

 

  export type UserPostsActionsUnion = GetUserPosts  | 
    GetUserPostsFail | 
    GetUserPostsSuccess | 
    GetUserPostAdd  | 
    GetUserPostAddFail | 
    GetUserPostAddSuccess;
