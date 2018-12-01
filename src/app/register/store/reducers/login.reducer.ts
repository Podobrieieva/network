import {LoginActionsUnion, LoginsActionTypes} from '../actions/login.actions';

export interface IloginState {
  authorization: boolean;
}

export const  initialState: IloginState = {
  authorization: false  
};

export function reducer (state: IloginState = initialState, action: LoginActionsUnion) {
  switch (action.type) {
    case LoginsActionTypes.GET_LOGIN_SUCCESS:
      return {
        ...state,
        authorization: true        
      };
    default:
      return state;
  }
}

export const selectIslogined = (state) => state.login.authorization;
