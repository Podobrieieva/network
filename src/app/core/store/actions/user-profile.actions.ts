import {Action} from '@ngrx/store';


export enum UserProfileActionTypes {
    GET_USER_PROFILE = '[USER_PROFILE] Fetch UserProfile requested',
    GET_USER_PROFILE_SUCCESS = '[USER_PROFILE] Fetch UserProfile success',
    GET_USER_PROFILE_FAIL = '[USER_PROFILE] Fetch UserProfile failed',
    GET_CURRENT_USER_PROFILE = '[CURRENT_USER_PROFILE] Fetch CurrentUserProfile requested',
    GET_CURRENT_USER_PROFILE_SUCCESS = '[CURRENT_USER_PROFILE] Fetch CurrentUserProfile success',
    GET_CURRENT_USER_PROFILE_FAIL = '[CURRENT_USER_PROFILE] Fetch CurrentUserProfile failed',
    GET_USERS = '[USERS] Fetch Users requested',
    GET_USERS_SUCCESS = '[USERS] Fetch Users success',
    GET_USERS_FAIL = '[USERS] Fetch Users failed',

    PUT_UPDATE_PROFILE = '[UPDATE_PROFILE] Fetch UpdateProfile requested',
    PUT_UPDATE_PROFILE_SUCCESS = '[UPDATE_PROFILE] Fetch UpdateProfile success',
    PUT_UPDATE_PROFILE_FAIL = '[UPDATE_PROFILE] Fetch UpdateProfile failed'
      


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

  export class GetUsers implements Action{
    readonly type = UserProfileActionTypes.GET_USERS;
    constructor(public payload:any) {}
  }

  export class GetUsersSuccess implements Action {
    readonly type = UserProfileActionTypes.GET_USERS_SUCCESS;
    constructor(public payload: any) {}
  }

  export class GetUsersFail implements Action {
    readonly type = UserProfileActionTypes.GET_USERS_FAIL;
    constructor(public payload:  any) {}
  }


  export class PutUpdateProfile implements Action{
    readonly type = UserProfileActionTypes.PUT_UPDATE_PROFILE;
    constructor(public payload:object) {}
  }

  export class PutUpdateProfileSuccess implements Action {
    readonly type = UserProfileActionTypes.PUT_UPDATE_PROFILE_SUCCESS;
    constructor(public payload: object) {}
  }

  export class PutUpdateProfileFail implements Action {
    readonly type = UserProfileActionTypes.PUT_UPDATE_PROFILE_FAIL;
    constructor(public payload: object) {}
  }

  export type UserProfileActionsUnion = GetUserProfile | 
    GetUserProfileFail | 
    GetUserProfileSuccess | 
    GetCurrentUserProfile | 
    GetCurrentUserProfileFail | 
    GetCurrentUserProfileSuccess | 
    GetUsers | 
    GetUsersSuccess | 
    GetUsersFail | 
    PutUpdateProfile | 
    PutUpdateProfileFail | 
    PutUpdateProfileSuccess;
