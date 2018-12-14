import {Action} from '@ngrx/store';


export enum UserProfileActionTypes {
    GET_USER_PROFILE = '[USER_PROFILE] Fetch UserProfile requested',
    GET_USER_PROFILE_SUCCESS = '[USER_PROFILE] Fetch UserProfile success',
    GET_USER_PROFILE_FAIL = '[USER_PROFILE] Fetch UserProfile failed',
    GET_CURRENT_USER_PROFILE = '[CURRENT_USER_PROFILE] Fetch CurrentUserProfile requested',
    GET_CURRENT_USER_PROFILE_SUCCESS = '[CURRENT_USER_PROFILE] Fetch CurrentUserProfile success',
    GET_CURRENT_USER_PROFILE_FAIL = '[CURRENT_USER_PROFILE] Fetch CurrentUserProfile failed',
  }

  export class GetUserProfile implements Action{
    readonly type = UserProfileActionTypes.GET_USER_PROFILE;
  }

  export class GetUserProfileSuccess implements Action {
    readonly type = UserProfileActionTypes.GET_USER_PROFILE_SUCCESS;
    constructor(public payload: object) {}
  }

  export class GetUserProfileFail implements Action {
    readonly type = UserProfileActionTypes.GET_USER_PROFILE_FAIL;
    constructor(public payload: object) {}
  }

  export class GetCurrentUserProfile implements Action{
    readonly type = UserProfileActionTypes.GET_CURRENT_USER_PROFILE;
    constructor(public payload:string) {}
  }

  export class GetCurrentUserProfileSuccess implements Action {
    readonly type = UserProfileActionTypes.GET_CURRENT_USER_PROFILE_SUCCESS;
    constructor(public payload: object) {}
  }

  export class GetCurrentUserProfileFail implements Action {
    readonly type = UserProfileActionTypes.GET_CURRENT_USER_PROFILE_FAIL;
    constructor(public payload: object) {}
  }

  export type UserProfileActionsUnion = GetUserProfile | GetUserProfileFail | GetUserProfileSuccess | GetCurrentUserProfile | GetCurrentUserProfileFail | GetCurrentUserProfileSuccess;
