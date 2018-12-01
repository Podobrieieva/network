import * as fromRegister from './reducers/register.reducer';
import * as fromLogin from './reducers/login.reducer';
import * as fromEmail from './reducers/password-recovery.reducer';
import * as fromCode from './reducers/code-recovery.reducer';

import {ActionReducerMap, createFeatureSelector, createSelector} from "@ngrx/store";

export interface State {
  register: fromRegister.IregisterState;
  login:fromLogin.IloginState;
  email: fromEmail.IemailState;
  code: fromCode.IcodeState;
  
}

export const reducers:  ActionReducerMap <State> = {
  register: fromRegister.reducer,
  login: fromLogin.reducer,
  email: fromEmail.reducer,
  code: fromCode.reducer
}

export const getRegister = createFeatureSelector<fromRegister.IregisterState>('auth');
export const getIsRegister = createSelector(getRegister, fromRegister.selectIsregistered);

export const getLogin = createFeatureSelector<fromLogin.IloginState>('auth');
export const getIsLogin = createSelector(getLogin, fromLogin.selectIslogined);

export const getEmail = createFeatureSelector<fromEmail.IemailState>('auth');
export const getIsEmail = createSelector(getEmail, fromEmail.selectIsemail);

export const getUserCode = createFeatureSelector<fromCode.IcodeState>('auth');
export const getIsUserCode = createSelector(getUserCode, fromCode.selectIsUserCode);
