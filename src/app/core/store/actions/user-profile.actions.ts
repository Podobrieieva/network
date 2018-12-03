import {Action} from '@ngrx/store';
import { UserProfileModel } from '../../../shared/models/user.model';

export enum UserProfileActionTypes {
    GET_USER_PROFILE = '[USER_PROFILE] Fetch UserProfile requested',
    GET_USER_PROFILE_SUCCESS = '[USER_PROFILE] Fetch UserProfile success',
    GET_USER_PROFILE_FAIL = '[USER_PROFILE] Fetch UserProfile failed',
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



  export type NewsActionsUnion = GetUserProfile | GetUserProfileFail | GetUserProfileSuccess;
