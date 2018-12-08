import { UserProfileActionTypes,UserProfileActionsUnion} from '../actions/user-profile.actions';
export interface State {
 isUserProfile: object;
 isCurrentUserProfile: object;
}

export const  initialState: State = {
  isUserProfile: {},
  isCurrentUserProfile: {}
};

export function reducer (state: State = initialState, action: UserProfileActionsUnion) {
  switch (action.type) {
    case UserProfileActionTypes.GET_USER_PROFILE_SUCCESS:
      return {
        ...state,
        isUserProfile: action.payload        
      };
    case UserProfileActionTypes.GET_CURRENT_USER_PROFILE_SUCCESS:
      return {
        ...state,
        isCurrentUserProfile: action.payload        
      };
    default:
      return state;
  }
}