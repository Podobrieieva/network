import * as fromRegister from './reducers/register.reducer';
import * as fromEmail from './reducers/password-recovery.reducer';
import * as fromCode from './reducers/code-recovery.reducer';

import {ActionReducerMap, createFeatureSelector, createSelector} from "@ngrx/store";

export interface State {
  authorization: fromRegister.State;
  email: fromEmail.IemailState;
  code: fromCode.IcodeState;
  
}

export const reducers:  ActionReducerMap <State> = {
  authorization: fromRegister.reducer,
  email: fromEmail.reducer,
  code: fromCode.reducer
}

export const getIsAuthorization = (state) => state.authorization;

export const getEmail = createFeatureSelector<fromEmail.IemailState>('auth');
export const getIsEmail = createSelector(getEmail, fromEmail.selectIsemail);

export const getUserCode = createFeatureSelector<fromCode.IcodeState>('auth');
export const getIsUserCode = createSelector(getUserCode, fromCode.selectIsUserCode);
