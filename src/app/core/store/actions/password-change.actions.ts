import {Action} from '@ngrx/store';

export enum PasswordChangesActionTypes {
  GET_PASSWORD = '[PASSWORD] Fetch password requested',
  GET_PASSWORD_SUCCESS = '[PASSWORD] Fetch password success',
  GET_PASSWORD_FAIL = '[PASSWORD] Fetch password failed',
}

export class GetPassword implements Action {
  readonly type = PasswordChangesActionTypes.GET_PASSWORD;
  constructor(public payload: object) {}
}

export class GetPasswordSuccess implements Action {
  readonly type = PasswordChangesActionTypes.GET_PASSWORD_SUCCESS;
  constructor(public payload: object) {}
}

export class GetPasswordFail implements Action {
  readonly type = PasswordChangesActionTypes.GET_PASSWORD_FAIL;
  constructor(public error: any) {}

}

export type PassworChangesActionsUnion = GetPassword | GetPasswordSuccess | GetPasswordFail;
