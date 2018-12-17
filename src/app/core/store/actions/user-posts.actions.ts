import {Action} from '@ngrx/store';


export enum UserPostsActionTypes {
    GET_USER_POSTS = '[USER_PROFILE] Fetch UserPosts requested',
    GET_USER_POSTS_SUCCESS = '[USER_PROFILE] Fetch UserPosts success',
    GET_USER_POSTS_FAIL = '[USER_PROFILE] Fetch UserPosts failed',
    GET_USER_POST_ADD = '[USER_PROFILE] Fetch UserPostsAdd requested',
    GET_USER_POST_ADD_SUCCESS = '[USER_PROFILE] Fetch UserPostsAdd success',
    GET_USER_POST_ADD_FAIL = '[USER_PROFILE] Fetch UserPostsAdd failed',
    GET_USER_POST_DELETE = '[USER_PROFILE] Fetch UserPostsDelete requested',
    GET_USER_POST_DELETE_SUCCESS = '[USER_PROFILE] Fetch UserPostsDelete success',
    GET_USER_POST_DELETE_FAIL = '[USER_PROFILE] Fetch UserPostsDelete failed',

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

  
  export class GetUserPostDelete implements Action{
    readonly type = UserPostsActionTypes.GET_USER_POST_DELETE;
    constructor(public payload: string) {}
  }

  export class GetUserPostDeleteSuccess implements Action {
    readonly type = UserPostsActionTypes.GET_USER_POST_DELETE_SUCCESS;
    constructor(public payload: object) {}
  }

  export class GetUserPostDeleteFail implements Action {
    readonly type = UserPostsActionTypes.GET_USER_POST_DELETE_FAIL;
    constructor(public payload: object) {}
  }
  

 

  export type UserPostsActionsUnion = GetUserPosts  | 
    GetUserPostsFail | 
    GetUserPostsSuccess | 
    GetUserPostAdd  | 
    GetUserPostAddFail | 
    GetUserPostAddSuccess |
    GetUserPostDelete  | 
    GetUserPostDeleteFail | 
    GetUserPostDeleteSuccess;
