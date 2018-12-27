import {LoginActionsUnion, LoginsActionTypes} from '../actions/login.actions';

export interface IloginState {
  isLogined: boolean;
}

export const  initialState: IloginState = {
  isLogined: false
};

export function reducer (state: IloginState = initialState, action: LoginActionsUnion) {
  switch (action.type) {
    case LoginsActionTypes.GET_LOGIN_SUCCESS:
      return {
        ...state,
        isLogined: action.payload
      };
    default:
      return state;
  }
}

export const selectIslogined = (state) => state.login.isLogined;