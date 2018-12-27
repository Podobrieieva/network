import {CodeActionsUnion, CodesActionTypes} from '../actions/code-recovery.actions';

export interface IcodeState {
  isCode: boolean;
}

export const  initialState: IcodeState = {
  isCode: false
};

export function reducer (state: IcodeState = initialState, action: CodeActionsUnion) {
  switch (action.type) {
    case CodesActionTypes.GET_CODE_SUCCESS:
      return {
        ...state,
        isCode: action.payload
      };
    default:
      return state;
  }
}

export const selectIscode = (state) => state.code.isCode;