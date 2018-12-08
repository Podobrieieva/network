import {NgModule} from "@angular/core";
import {StoreModule} from "@ngrx/store";
import {metaReducers, reducers} from "./index";
import {StoreRouterConnectingModule} from "@ngrx/router-store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../../../environments/environment";
import {EffectsModule} from "@ngrx/effects";
import {NewsEffects} from "./effects/news.effects";
import {PasswordChangeEffect} from './effects/password-change.effects';
import { UserProfileEffect } from './effects/user-profile.effects';
import { CurrentUserProfileEffect } from './effects/current-user-profile.effects'

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({name: 'NgRx Demo', logOnly: environment.production}),
    EffectsModule.forRoot([NewsEffects, PasswordChangeEffect, UserProfileEffect, CurrentUserProfileEffect])
  ]
})

export class AppStoreModule { }