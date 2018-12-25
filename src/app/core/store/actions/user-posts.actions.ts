import {Action} from '@ngrx/store';
import { PostComment } from '../../../shared/models/user.model';


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
    GET_USER_POST_ADD_COMMENT = '[USER_PROFILE] Fetch UserPostAddComment requested',
    GET_USER_POST_ADD_COMMENT_SUCCESS = '[USER_PROFILE] Fetch UserPostAddComment success',
    GET_USER_POST_ADD_COMMENT_FAIL = '[USER_PROFILE] Fetch UserPostAddComment failed',
    GET_USER_POST_COMMENT_DELETE = '[USER_PROFILE] Fetch UserPostsCommentDelete requested',
    GET_USER_POST_COMMENT_DELETE_SUCCESS = '[USER_PROFILE] Fetch UserPostsCommentDelete success',
    GET_USER_POST_COMMENT_DELETE_FAIL = '[USER_PROFILE] Fetch UserPostsCommentDelete failed',
    ADD_LIKE = '[ADD_LIKE] Fetch AddLike requested',
    ADD_LIKE_SUCCESS = '[ADD_LIKE] Fetch AddLike success',
    ADD_LIKE_FAIL = '[ADD_LIKE] Fetch AddLike failed',
    ADD_DISLIKE = '[ADD_DISLIKE] Fetch AddDislike requested',
    ADD_DISLIKE_SUCCESS = '[ADD_DISLIKE] Fetch AddDislike success',
    ADD_DISLIKE_FAIL = '[ADD_DISLIKE] Fetch AddDislike failed'
}

  export class GetUserPosts implements Action {
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

  export class GetUserPostAdd implements Action {
    readonly type = UserPostsActionTypes.GET_USER_POST_ADD;
    constructor(public payload: object, public imageUrl: File) {}
  }

  export class GetUserPostAddSuccess implements Action {
    readonly type = UserPostsActionTypes.GET_USER_POST_ADD_SUCCESS;
    constructor(public payload: object) {}
  }

  export class GetUserPostAddFail implements Action {
    readonly type = UserPostsActionTypes.GET_USER_POST_ADD_FAIL;
    constructor(public payload: object) {}
  }

  export class GetUserPostDelete implements Action {
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

  export class GetUserPostAddComment implements Action {
    readonly type = UserPostsActionTypes.GET_USER_POST_ADD_COMMENT;
    constructor(public payloadIdPost: string, public payload: PostComment) {}
  }

  export class GetUserPostAddCommentSuccess implements Action {
    readonly type = UserPostsActionTypes.GET_USER_POST_ADD_COMMENT_SUCCESS;
    constructor(public payload: object) {}
  }

  export class GetUserPostAddCommentFail implements Action {
    readonly type = UserPostsActionTypes.GET_USER_POST_ADD_COMMENT_FAIL;
    constructor(public payload: object) {}
  }

  export class GetUserPostCommentDelete implements Action {
    readonly type = UserPostsActionTypes.GET_USER_POST_COMMENT_DELETE;
    constructor(public payloadPost: object, public payloadComment: PostComment) {}
  }

  export class GetUserPostCommentDeleteSuccess implements Action {
    readonly type = UserPostsActionTypes.GET_USER_POST_COMMENT_DELETE_SUCCESS;
    constructor(public payload: object) {}
  }

  export class GetUserPostCommentDeleteFail implements Action {
    readonly type = UserPostsActionTypes.GET_USER_POST_COMMENT_DELETE_FAIL;
    constructor(public payload: object) {}
  }

  export class AddLike implements Action {
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

  export class AddDislike implements Action {
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
    GetUserPostDelete  |
    GetUserPostDeleteFail |
    GetUserPostDeleteSuccess |
    GetUserPostAddComment |
    GetUserPostAddCommentFail |
    GetUserPostAddCommentSuccess|
    GetUserPostCommentDelete  |
    GetUserPostCommentDeleteFail |
    GetUserPostCommentDeleteSuccess|
    AddLike |
    AddLikeFail |
    AddLikeSuccess |
    AddDislike |
    AddDislikeFail |
    AddDislikeSuccess;
