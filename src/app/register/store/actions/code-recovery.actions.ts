import {Action} from "@ngrx/store";


export enum CodesActionTypes {
  GET_CODE = '[CODE] Fetch code requested',
  GET_CODE_SUCCESS = '[CODE] Fetch code success',
  GET_CODE_FAIL = '[CODE] Fetch code failed',
}

export class GetCode implements Action {
  readonly type = CodesActionTypes.GET_CODE;
}

export class GetCodeSuccess implements Action {
  readonly type = CodesActionTypes.GET_CODE_SUCCESS;
  constructor(public payload: boolean) {}
}

export class GetCodeFail implements Action {
  readonly type = CodesActionTypes.GET_CODE_FAIL;

  constructor(public error: any) {}

}

export type CodeActionsUnion = GetCode | GetCodeSuccess | GetCodeFail;