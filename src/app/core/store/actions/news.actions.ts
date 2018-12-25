import {Action} from '@ngrx/store';
import { Post} from '../../../shared/models/user.model';

export enum NewsActionTypes {
  GET_POSTS = '[POSTS] Fetch todos requested',
  GET_POSTS_SUCCESS = '[POSTS] Fetch todos success',
  GET_POSTS_FAIL = '[POSTS] Fetch todos failed',
}

  export class GetPosts implements Action {
    readonly type = NewsActionTypes.GET_POSTS;
  }

  export class GetPostsFail implements Action {
    readonly type = NewsActionTypes.GET_POSTS_FAIL;
    constructor(public payload: object) {}
  }

  export class GetPostsSuccess implements Action {
    readonly type = NewsActionTypes.GET_POSTS_SUCCESS;
    constructor(public payload: any) {}
  }

  export type NewsActionsUnion = GetPosts | GetPostsFail | GetPostsSuccess;
