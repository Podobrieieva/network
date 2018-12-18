import { UserPostsActionTypes,UserPostsActionsUnion} from '../actions/user-posts.actions';
export interface State {
 isUserPosts:object;
 isAddUserPost: object;
 isDeleteUserPost: object;
 isUserPostAddComment: object;
 isUserPostCommentDelete: object;
 
}

export const  initialState: State = {
  isUserPosts: {},
  isAddUserPost: {},
  isDeleteUserPost: {},
  isUserPostAddComment: {},
  isUserPostCommentDelete: {}

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
      case UserPostsActionTypes.GET_USER_POST_DELETE_SUCCESS:
      return {
        ...state,
        isDeleteUserPost: action.payload        
      };
      case UserPostsActionTypes.GET_USER_POST_ADD_COMMENT_SUCCESS:
      return {
        ...state,
        isUserPostAddComment: action.payload        
      };
      case UserPostsActionTypes.GET_USER_POST_COMMENT_DELETE_SUCCESS:
      return {
        ...state,
        isUserPostCommentDelete: action.payload        
      };
    default:
      return state;
  }
}