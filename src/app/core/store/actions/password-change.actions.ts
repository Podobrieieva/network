import {Action} from "@ngrx/store";

export enum PasswordChangesActionTypes {
  GET_PASSWORD = '[PASSWORD] Fetch email requested',
  GET_PASSWORD_SUCCESS = '[PASSWORD] Fetch email success',
  GET_PASSWORD_FAIL = '[PASSWORD] Fetch email failed',
}

export class GetPassword implements Action {
  readonly type = PasswordChangesActionTypes.GET_PASSWORD;
}

export class GetPasswordSuccess implements Action {
  readonly type = PasswordChangesActionTypes.GET_PASSWORD_SUCCESS;
  constructor(public payload: boolean) {}
}

export class GetPasswordFail implements Action {
  readonly type = PasswordChangesActionTypes.GET_PASSWORD_FAIL;

  constructor(public error: any) {}

}

export type PassworChangesdActionsUnion = GetPassword | GetPasswordSuccess | GetPasswordFail;
