import {Action} from "@ngrx/store";

export enum EmailsActionTypes {
  GET_EMAIL = '[EMAIL] Fetch email requested',
  GET_EMAIL_SUCCESS = '[EMAIL] Fetch email success',
  GET_EMAIL_FAIL = '[EMAIL] Fetch email failed',
}

export class GetEmail implements Action {
  readonly type = EmailsActionTypes.GET_EMAIL;
}

export class GetEmailSuccess implements Action {
  readonly type = EmailsActionTypes.GET_EMAIL_SUCCESS;
  constructor(public payload: string) {}
}

export class GetEmailFail implements Action {
  readonly type = EmailsActionTypes.GET_EMAIL_FAIL;

  constructor(public error: any) {}

}

export type EmailActionsUnion = GetEmail | GetEmailSuccess | GetEmailFail;


