import { SubscribersActionTypes, UserProfileActionsUnion } from '../actions/subscribe.actions';
import { UserCard } from '../../../shared/models/user.model'
export interface State {
 isAddSubscribe: object;
 isDeleteSubscribe: object;
 isGetSubscribersProfile: Array<UserCard>;
 isGetSubscribersCurrent: Array<UserCard>;
 isGetSubscriptionsProfile: Array<UserCard>;
 isGetSubscriptionsId: Array<UserCard>;

}

export const  initialState: State = {
  isAddSubscribe: {},
  isDeleteSubscribe: {},
  isGetSubscribersProfile: [],
  isGetSubscribersCurrent: [],
  isGetSubscriptionsProfile: [],
  isGetSubscriptionsId: []
};

export function reducer (state: State = initialState, action: UserProfileActionsUnion) {
  switch (action.type) {
    case SubscribersActionTypes.ADD_SUBSCRIBE_SUCCESS:
      return {
        ...state,
        isAddSubscribe: action.payload             
      };
    case SubscribersActionTypes.GET_SUBSCRIBERS_ID_SUCCESS:
      return {
        ...state,
        isGetSubscribersCurrent: action.payload        
      };
    case SubscribersActionTypes.GET_SUBSCRIBERS_PROFILE_SUCCESS:
      return {
        ...state,
        isGetSubscribersProfile: action.payload        
      };
    case SubscribersActionTypes.DELETE_SUBSCRIBE_SUCCESS:
      return {
        ...state,
        isDeleteSubscribe: action.payload             
      }
    case SubscribersActionTypes.GET_SUBSCRIPTIONS_PROFILE_SUCCESS:
      return {
        ...state,
        isGetSubscriptionsProfile: action.payload        
      };
    case SubscribersActionTypes.GET_SUBSCRIPTIONS_ID_SUCCESS:
      return {
        ...state,
        isGetSubscriptionsId: action.payload        
      };                    
    default:
      return state;
  }
}