import { UserPostsActionTypes,UserPostsActionsUnion} from '../actions/user-posts.actions';
import { PostModel } from '../../../shared/models/user.model'

export interface State {
 isUserPosts:Array<PostModel>;
 isAddUserPost: object;
 isAddLike: object;
 isAddDislike: object; 
}

export const  initialState: State = {
  isUserPosts: [],
  isAddUserPost: {},
  isAddLike: {},
  isAddDislike: {}
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
      case UserPostsActionTypes.ADD_LIKE_SUCCESS:
      return {
        ...state,
        isAddLike: action.payload        
      };      
      case UserPostsActionTypes.ADD_DISLIKE_SUCCESS:
      return {
        ...state,
        isAddDislike: action.payload        
      }; 
    default:
      return state;
  }
}