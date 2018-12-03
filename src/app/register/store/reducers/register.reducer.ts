import { RegisterActionTypes, RegisterActionsUnion} from '../actions/register.actions';
export interface State {
  authorization: boolean;
}

export const  initialState: State = {
  authorization: false
};

export function reducer (state: State = initialState, action: RegisterActionsUnion) {
  switch (action.type) {
    case RegisterActionTypes.GET_LOGIN_SUCCESS:
      return {
        ...state,
        authorization: true        
      };
    case RegisterActionTypes.GET_REGISTER_SUCCESS:
      return {
        ...state,
        authorization: true
      };  
    default:
      return state;
  }
}


