// import { Actions, ActionTypes } from '../actions/register.actions';
// import { initialState, State } from '../states/register.state';


// export function userReducer(state = initialState, action: Actions): State {
//    switch (action.type) {
//       case ActionTypes.LOGIN_REQUEST:
//         return {
//           ...state,
//           error: null,
//           isLoading: true
//         };
//       case ActionTypes.LOGIN_SUCCESS:
//         return {
//           ...state,
//           user: action.payload.user,
//           error: null,
//           isLoading: false,
//         };
//       case ActionTypes.LOGIN_FAILURE:
//         return {
//           ...state,
//           error: action.payload.error,
//           isLoading: false
//         };
//       default: {
//          return state;
//       }
//     }
//  }