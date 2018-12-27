import {PassworChangesdActionsUnion, PasswordChangesActionTypes} from '../actions/password-change.actions';

export interface IpassChangeState {
  isPassChanges: boolean;
}

export const  initialState: IpassChangeState = {
  isPassChanges: false
};

export function reducer (state: IpassChangeState = initialState, action: PassworChangesdActionsUnion) {
  switch (action.type) {
    case PasswordChangesActionTypes.GET_PASSWORD_SUCCESS:
      return {
        ...state,
        isPassChanges: action.payload
      };
    default:
      return state;
  }
}

