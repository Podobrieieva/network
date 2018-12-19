import {Action} from '@ngrx/store';


export enum UserPostsActionTypes {
    GET_USER_POSTS = '[GET_USER_POSTS] Fetch UserPosts requested',
    GET_USER_POSTS_SUCCESS = '[GET_USER_POSTS] Fetch UserPosts success',
    GET_USER_POSTS_FAIL = '[GET_USER_POSTS] Fetch UserPosts failed',
    GET_USER_POST_ADD = '[GET_USER_POST_ADD] Fetch UserPostsAdd requested',
    GET_USER_POST_ADD_SUCCESS = '[GET_USER_POST_ADD] Fetch UserPostsAdd success',
    GET_USER_POST_ADD_FAIL = '[GET_USER_POST_ADD] Fetch UserPostsAdd failed',
    ADD_LIKE = '[ADD_LIKE] Fetch AddLike requested',
    ADD_LIKE_SUCCESS = '[ADD_LIKE] Fetch AddLike success',
    ADD_LIKE_FAIL = '[ADD_LIKE] Fetch AddLike failed',
    ADD_DISLIKE = '[ADD_DISLIKE] Fetch AddDislike requested',
    ADD_DISLIKE_SUCCESS = '[ADD_DISLIKE] Fetch AddDislike success',
    ADD_DISLIKE_FAIL = '[ADD_DISLIKE] Fetch AddDislike failed'
  }

  export class GetUserPosts implements Action{
    readonly type = UserPostsActionTypes.GET_USER_POSTS;
    constructor(public payload: string) {}
  }

  export class GetUserPostsSuccess implements Action {
    readonly type = UserPostsActionTypes.GET_USER_POSTS_SUCCESS;
    constructor(public payload: any) {}
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



  export class AddLike implements Action{
    readonly type = UserPostsActionTypes.ADD_LIKE;
    constructor(public payload: string) {}
  }

  export class AddLikeSuccess implements Action {
    readonly type = UserPostsActionTypes.ADD_LIKE_SUCCESS;
    constructor(public payload: any) {}
  }

  export class AddLikeFail implements Action {
    readonly type = UserPostsActionTypes.ADD_LIKE_FAIL;
    constructor(public payload: object) {}
  }



  export class AddDislike implements Action{
    readonly type = UserPostsActionTypes.ADD_DISLIKE;
    constructor(public payload: string) {}
  }

  export class AddDislikeSuccess implements Action {
    readonly type = UserPostsActionTypes.ADD_DISLIKE_SUCCESS;
    constructor(public payload: any) {}
  }

  export class AddDislikeFail implements Action {
    readonly type = UserPostsActionTypes.ADD_DISLIKE_FAIL;
    constructor(public payload: object) {}
  } 

  export type UserPostsActionsUnion = GetUserPosts  | 
    GetUserPostsFail | 
    GetUserPostsSuccess | 
    GetUserPostAdd  | 
    GetUserPostAddFail | 
    GetUserPostAddSuccess | 
    AddLike | 
    AddLikeFail | 
    AddLikeSuccess | 
    AddDislike | 
    AddDislikeFail | 
    AddDislikeSuccess;
