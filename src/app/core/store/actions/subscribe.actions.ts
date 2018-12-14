import {Action} from '@ngrx/store';


export enum SubscribersActionTypes {
    ADD_SUBSCRIBE = '[ADD_SUBSCRIBE] Fetch AddSubscribe requested',
    ADD_SUBSCRIBE_SUCCESS = '[ADD_SUBSCRIBE] Fetch AddSubscribe success',
    ADD_SUBSCRIBE_FAIL = '[ADD_SUBSCRIBE] Fetch AddSubscribe failed',
    GET_SUBSCRIBERS_ID = '[SUBSCRIBERS_ID] Fetch GetSubscribersId requested',
    GET_SUBSCRIBERS_ID_SUCCESS = '[SUBSCRIBERS_ID] Fetch GetSubscribersId success',
    GET_SUBSCRIBERS_ID_FAIL = '[SUBSCRIBERS_ID] Fetch GetSubscribersId failed',
    GET_SUBSCRIBERS_PROFILE = '[SUBSCRIBERS_PROFILE] Fetch GetSubscribersProfile requested',
    GET_SUBSCRIBERS_PROFILE_SUCCESS = '[SUBSCRIBERS_PROFILE] Fetch GetSubscribersProfile success',
    GET_SUBSCRIBERS_PROFILE_FAIL = '[SUBSCRIBERS_PROFILE] Fetch GetSubscribersProfile failed',
    DELETE_SUBSCRIBE = '[DELETE_SUBSCRIBE] Fetch DeleteSubscribe requested',
    DELETE_SUBSCRIBE_SUCCESS = '[DELETE_SUBSCRIBE] Fetch DeleteSubscribe success',
    DELETE_SUBSCRIBE_FAIL = '[DELETE_SUBSCRIBE Fetch DeleteSubscribe failed', 


    GET_SUBSCRIPTIONS_PROFILE = '[SUBSCRIPTIONS_PROFILE] Fetch GetSubscriptionsProfile requested',
    GET_SUBSCRIPTIONS_PROFILE_SUCCESS = '[SUBSCRIPTIONS_PROFILE] Fetch GetSubscriptionsProfile success',
    GET_SUBSCRIPTIONS_PROFILE_FAIL = '[SUBSCRIPTIONS_PROFILE] Fetch GetSubscriptionsProfile failed'
  



  }

  export class AddSubscribe implements Action{
    readonly type = SubscribersActionTypes.ADD_SUBSCRIBE;
    constructor(public payload: string) {}
  }

  export class AddSubscribeSuccess implements Action {
    readonly type = SubscribersActionTypes.ADD_SUBSCRIBE_SUCCESS;
    constructor(public payload: any) {}
  }

  export class AddSubscribeFail implements Action {
    readonly type = SubscribersActionTypes.ADD_SUBSCRIBE_FAIL;
    constructor(public payload: any) {}
  }

  export class GetSubscribersId implements Action{
    readonly type = SubscribersActionTypes.GET_SUBSCRIBERS_ID;
    constructor(public payload:string) {}
  }

  export class GetSubscribersIdSuccess implements Action {
    readonly type = SubscribersActionTypes.GET_SUBSCRIBERS_ID_SUCCESS;
    constructor(public payload: any) {}
  }

  export class GetSubscribersIdFail implements Action {
    readonly type = SubscribersActionTypes.GET_SUBSCRIBERS_ID_FAIL;
    constructor(public payload: any) {}
  }

  export class GetSubscribersProfile implements Action{
    readonly type = SubscribersActionTypes.GET_SUBSCRIBERS_PROFILE;
  }

  export class GetSubscribersProfileSuccess implements Action {
    readonly type = SubscribersActionTypes.GET_SUBSCRIBERS_PROFILE_SUCCESS;
    constructor(public payload: any) {}
  }

  export class GetSubscribersProfileFail implements Action {
    readonly type = SubscribersActionTypes.GET_SUBSCRIBERS_PROFILE_FAIL;
    constructor(public payload: any) {}
  }

  export class DeleteSubscribe implements Action{
    readonly type = SubscribersActionTypes.DELETE_SUBSCRIBE;
    constructor(public payload: string) {}
  }

  export class DeleteSubscribeSuccess implements Action {
    readonly type = SubscribersActionTypes.DELETE_SUBSCRIBE_SUCCESS;
    constructor(public payload: any) {}
  }

  export class DeleteSubscribeFail implements Action {
    readonly type = SubscribersActionTypes.DELETE_SUBSCRIBE_FAIL;
    constructor(public payload: any) {}
  }
  export class GetSubscriptionsProfile implements Action{
    readonly type = SubscribersActionTypes.GET_SUBSCRIPTIONS_PROFILE;
  }

  export class GetSubscriptionsProfileSuccess implements Action {
    readonly type = SubscribersActionTypes.GET_SUBSCRIPTIONS_PROFILE_SUCCESS;
    constructor(public payload: any) {}
  }

  export class GetSubscriptionsProfileFail implements Action {
    readonly type = SubscribersActionTypes.GET_SUBSCRIPTIONS_PROFILE_FAIL;
    constructor(public payload: any) {}
  }


  export type UserProfileActionsUnion = AddSubscribe | 
    AddSubscribeFail | 
    AddSubscribeSuccess | 
    GetSubscribersId | 
    GetSubscribersIdFail | 
    GetSubscribersIdSuccess | 
    GetSubscribersProfile | 
    GetSubscribersProfileFail | 
    GetSubscribersProfileSuccess |
    DeleteSubscribe | 
    DeleteSubscribeFail | 
    DeleteSubscribeSuccess | 
    GetSubscriptionsProfile |
    GetSubscriptionsProfileSuccess | 
    GetSubscriptionsProfileFail;
