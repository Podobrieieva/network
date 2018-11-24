import {Action} from "@ngrx/store";

export enum LoginsActionTypes {
  GET_LOGIN = '[LOGIN] Fetch login requested',
  GET_LOGIN_SUCCESS = '[LOGIN] Fetch login success',
  GET_LOGIN_FAIL = '[LOGIN] Fetch login failed',
}

export class GetLogin implements Action {
  readonly type = LoginsActionTypes.GET_LOGIN;
}

export class GetLoginSuccess implements Action {
  readonly type = LoginsActionTypes.GET_LOGIN_SUCCESS;
  constructor(public payload: boolean) {}
}

export class GetLoginFail implements Action {
  readonly type = LoginsActionTypes.GET_LOGIN_FAIL;

  constructor(public error: any) {}

}

export type LoginActionsUnion = GetLogin | GetLoginSuccess | GetLoginFail;