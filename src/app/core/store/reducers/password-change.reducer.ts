import {PassworChangesActionsUnion, PasswordChangesActionTypes} from '../actions/password-change.actions';

export interface IpassChangeState {
  isNewPass: boolean;
}

export const  initialState: IpassChangeState = {
  isNewPass: false,
};

export function reducer (state: IpassChangeState = initialState, action: PassworChangesActionsUnion) {
  switch (action.type) {
    case PasswordChangesActionTypes.GET_PASSWORD_SUCCESS:
      return {        
        ...state,
        isNewPass: action.payload
      };
    default:
      return state;
  }
}

