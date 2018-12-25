import {EmailActionsUnion, EmailsActionTypes} from '../actions/password-recovery.actions';

export interface IemailState {
  isPasswordRecovery: object;
}

export const  initialState: IemailState = {
  isPasswordRecovery: {}
};

export function reducer (state: IemailState = initialState, action: EmailActionsUnion) {
  switch (action.type) {
    case EmailsActionTypes.GET_EMAIL_SUCCESS:
      return {
        ...state,
        isPasswordRecovery: action.payload
      };
    default:
      return state;
  }
}

export const selectIsemail = (state) => state.email.isPasswordRecovery;
