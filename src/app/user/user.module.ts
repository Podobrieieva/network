import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProfileComponent } from './containers/profile/profile.component';
import { FriendsListComponent } from './containers/friends-list/friends-list.component';
import { AddNewPostComponent } from './containers/add-new-post/add-new-post.component';
import MaterialModule from '../core/material-module';
import { SettingsComponent } from './containers/settings/settings.component';
import { UserInfoComponent } from './containers/info/user-info.component';


@NgModule({
  imports: [
CommonModule,
    RouterModule,
    CoreModule,
   MaterialModule,
   BrowserAnimationsModule,
   MatNativeDateModule,
   BrowserModule,
   BrowserAnimationsModule,
   FormsModule,
   HttpClientModule,
   MatNativeDateModule,
   ReactiveFormsModule
  ],
  declarations: [
    ProfileComponent,
    AddNewPostComponent,
    FriendsListComponent,
    SettingsComponent,
    UserInfoComponent
  ],
  exports: [
    ProfileComponent,
    AddNewPostComponent,
    FriendsListComponent,
    CommonModule
  ]
})
export class UserModule { }
