import { UserPostsActionTypes,UserPostsActionsUnion} from '../actions/user-posts.actions';
export interface State {
 isUserPosts:object;
 isAddUserPost: object;
 
}

export const  initialState: State = {
  isUserPosts: {},
  isAddUserPost: {},

};

export function reducer (state: State = initialState, action: UserPostsActionsUnion) {
  switch (action.type) {
    case UserPostsActionTypes.GET_USER_POSTS_SUCCESS:
      return {
        ...state,
        isUserPosts: action.payload        
      };
      case UserPostsActionTypes.GET_USER_POST_ADD_SUCCESS:
      return {
        ...state,
        isAddUserPost: action.payload        
      };
    default:
      return state;
  }
}