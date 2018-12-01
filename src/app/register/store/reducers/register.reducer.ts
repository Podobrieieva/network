import {RegisterActionsUnion, RegistersActionTypes} from '../actions/register.actions';

export interface IregisterState {
  authorization: object;
}

export const  initialState: IregisterState = {
  authorization: {}
};

export function reducer (state: IregisterState = initialState, action: RegisterActionsUnion) {
  switch (action.type) {
    case RegistersActionTypes.GET_REGISTER_SUCCESS:
      return {
        ...state,
        authorization: action.payload
      };
    default:
      return state;
  }
}

export const selectIsregistered = (state) => state.register.authorization;