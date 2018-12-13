import { Post} from "../../../shared/models/user.model";
import { NewsActionsUnion, NewsActionTypes } from "../actions/news.actions"

export  interface State{
    posts: Array<Post>
  }

  export const initialState: State = {
    posts: []
  };

  export function reducer(state: State = initialState, action: NewsActionsUnion) {
    switch (action.type) {
      case NewsActionTypes.GET_POSTS_SUCCESS :
        return {
          ...state,
          posts: action.payload.data.posts
        };
      default:
        return state;
    }
  }