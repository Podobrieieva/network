import {CodeActionsUnion, CodesActionTypes} from '../actions/code-recovery.actions';

export interface IcodeState {
  isUserCode: boolean;
}

export const  initialState: IcodeState = {
  isUserCode: false
};

export function reducer (state: IcodeState = initialState, action: CodeActionsUnion) {
  switch (action.type) {
    case CodesActionTypes.GET_CODE:
      return {
        ...state,
      };
    case CodesActionTypes.GET_CODE_SUCCESS:
      return {
        ...state,
        isUserCode: action.payload
      };
    default:
      return state;
  }
}

export const selectIsUserCode = (state) => state.code.isUserCode;