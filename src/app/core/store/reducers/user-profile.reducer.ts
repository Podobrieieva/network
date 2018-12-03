import { UserProfileActionTypes, NewsActionsUnion} from '../actions/user-profile.actions';
export interface State {
 isUserProfile: object;
}

export const  initialState: State = {
  isUserProfile: {}
};

export function reducer (state: State = initialState, action: NewsActionsUnion) {
  switch (action.type) {
    case UserProfileActionTypes.GET_USER_PROFILE_SUCCESS:
      return {
        ...state,
        userProfile: action.payload        
      };
    default:
      return state;
  }
}