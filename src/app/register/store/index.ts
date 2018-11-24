import * as fromRegister from './reducers/register.reducer';
import * as fromLogin from './reducers/login.reducer';
import {ActionReducerMap, createFeatureSelector, createSelector} from "@ngrx/store";

export interface State {
  register: fromRegister.IregisterState;
  login:fromLogin.IloginState;
}

export const reducers:  ActionReducerMap <State> = {
  register: fromRegister.reducer,
  login: fromLogin.reducer
}

export const getRegister = createFeatureSelector<fromRegister.IregisterState>('auth');
export const getIsRegister = createSelector(getRegister, fromRegister.selectIsregistered);


export const getLogin = createFeatureSelector<fromLogin.IloginState>('auth');
export const getIsLogin = createSelector(getLogin, fromLogin.selectIslogined)