// // import { Action } from '@ngrx/store';
// import { UserModel } from '../../../shared/models/user.model';

// export enum ActionTypes {
//     LOGIN_REQUEST = '[Register] Login Request',
//     LOGIN_FAILURE = '[Register] Login Failure',
//     LOGIN_SUCCESS = '[Register] Login Success'
//   }

// export class LoginRequestAction implements Action {
//   readonly type = ActionTypes.LOGIN_REQUEST;
//   constructor(public payload: { userName: string; password: string }) {}
// }
// export class LoginFailureAction implements Action {
//   readonly type = ActionTypes.LOGIN_FAILURE;
//   constructor(public payload: { error: string }) {}
// }
// export class LoginSuccessAction implements Action {
//   readonly type = ActionTypes.LOGIN_SUCCESS;
//   constructor(public payload: { user: UserModel }) {}
// }
// export type Actions = LoginRequestAction | LoginFailureAction | LoginSuccessAction;