import {EmailActionsUnion, EmailsActionTypes} from '../actions/password-recovery.actions';

export interface IemailState {
  isEmail: string;
}

export const  initialState: IemailState = {
  isEmail: ""
};

export function reducer (state: IemailState = initialState, action: EmailActionsUnion) {
  switch (action.type) {
    case EmailsActionTypes.GET_EMAIL_SUCCESS:
      return {
        ...state,
        isEmail: action.payload
      };
    default:
      return state;
  }
}

export const selectIsemail = (state) => state.email.isEmail;