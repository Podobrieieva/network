import {Action} from '@ngrx/store';

export enum RegisterActionTypes {
  GET_LOGIN = '[LOGIN] Fetch login requested',
  GET_LOGIN_SUCCESS = '[LOGIN] Fetch login success',
  GET_LOGIN_FAIL = '[LOGIN] Fetch login failed',
  GET_REGISTER = '[REGISTER] Fetch register requested',
  GET_REGISTER_SUCCESS = '[REGISTER] Fetch register success',
  GET_REGISTER_FAIL = '[REGISTER] Fetch register failed'
}

export class GetLogin implements Action {
  readonly type = RegisterActionTypes.GET_LOGIN;
  constructor(public payload: object) {}
}

export class GetLoginSuccess implements Action {
  readonly type = RegisterActionTypes.GET_LOGIN_SUCCESS;
  constructor(public payload: boolean) {}
}

export class GetLoginFail implements Action {
  readonly type = RegisterActionTypes.GET_LOGIN_FAIL;
  constructor(public error: any) {}

}
export class GetRegister implements Action {
  readonly type = RegisterActionTypes.GET_REGISTER;
  constructor(public payload: object) {}
}

export class GetRegisterSuccess implements Action {
  readonly type = RegisterActionTypes.GET_REGISTER_SUCCESS;
  constructor(public payload: boolean) {}
}

export class GetRegisterFail implements Action {
  readonly type = RegisterActionTypes.GET_REGISTER_FAIL;
  constructor(public error: object) {}

}

export type RegisterActionsUnion = GetLogin | GetLoginSuccess | GetLoginFail | GetRegister | GetRegisterSuccess | GetRegisterFail;

