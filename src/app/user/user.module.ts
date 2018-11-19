import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';




import { ProfileComponent } from './containers/profile/profile.component';
import { FriendsListComponent } from './containers/friends-list/friends-list.component';
import { AddNewPostComponent } from './containers/add-new-post/add-new-post.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CoreModule
   

 
  ],
  declarations: [
    ProfileComponent,
    AddNewPostComponent,
    FriendsListComponent
  ],
  exports: [
    ProfileComponent,
    AddNewPostComponent,
    FriendsListComponent,
    CommonModule
  ]
})
export class UserModule { }
