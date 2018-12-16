import { UserProfileActionTypes,UserProfileActionsUnion} from '../actions/user-profile.actions';
import { UserCard } from '../../../shared/models/user.model'

export interface State {
 isUserProfile: object;
 isCurrentUserProfile: object;
 isUsers: Array<UserCard>;
}

export const  initialState: State = {
  isUserProfile: {},
  isCurrentUserProfile: {},
  isUsers: []
};

export function reducer (state: State = initialState, action: UserProfileActionsUnion) {
  switch (action.type) {
    case UserProfileActionTypes.GET_USER_PROFILE_SUCCESS:
      return {
        ...state,
        isUserProfile: action.payload,
        isCurrentUserProfile: action.payload         
      };
    case UserProfileActionTypes.GET_CURRENT_USER_PROFILE_SUCCESS:
      return {
        ...state,
        isCurrentUserProfile: action.payload        
      };
    case UserProfileActionTypes.GET_USERS_SUCCESS:
      return {
        ...state,
        isUsers: action.payload        
      };
    default:
      return state;
  }
}