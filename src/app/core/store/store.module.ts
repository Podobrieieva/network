import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { metaReducers, reducers } from "./index";
import { StoreRouterConnectingModule } from "@ngrx/router-store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../../../environments/environment";
import { EffectsModule } from "@ngrx/effects";
import { NewsEffects } from "./effects/news.effects";
import { PasswordChangeEffect } from './effects/password-change.effects';
import { UserProfileEffect } from './effects/user-profile.effects';

import { CurrentUserProfileEffect } from './effects/current-user-profile.effects'
import { UserPostsEffect } from "./effects/user-posts.effects";
import { UserPostAddEffect } from "./effects/user-post-add.effects";

import { AddSubscribeEffect } from './effects/add-subscribe.effects';
import { GetSubscribersIdEffect} from './effects/get-current-subscribers.effects';
import { GetSubscribersProfileEffect } from './effects/get-profile-subscribers.effects';
import { DeleteSubscribeEffect } from './effects/delete-subscribe.effects';
import { GetSubscriptionsProfileEffect } from './effects/get-profile-subscrirtions.effects'



@NgModule({
  imports: [
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({name: 'NgRx Demo', logOnly: environment.production}),
    EffectsModule.forRoot([
    	NewsEffects, 
    	PasswordChangeEffect, 
    	UserProfileEffect, 
        CurrentUserProfileEffect,
        UserPostsEffect, 
        UserPostAddEffect,
    	AddSubscribeEffect,
        GetSubscribersIdEffect,
        GetSubscribersProfileEffect,
        DeleteSubscribeEffect,
        GetSubscriptionsProfileEffect
    ])
  ]
})

export class AppStoreModule { }