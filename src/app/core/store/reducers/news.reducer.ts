import { PostModel } from "../../../shared/models/user.model";
import { NewsActionsUnion, NewsActionTypes } from "../actions/news.actions"

export  interface INewsState {
    posts: PostModel [];
  }

  export const initialState: INewsState = {
    posts: []
  };

  export function reducer(state: INewsState = initialState, action: NewsActionsUnion): INewsState {
    switch (action.type) {
      case NewsActionTypes.GET_POSTS_SUCCESS :
        return {
          ...state,
          posts: action.payload
        };
      default:
        return state;
    }
  }