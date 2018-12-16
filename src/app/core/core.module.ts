import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatNativeDateModule } from '@angular/material';



import { HeaderComponent } from './containers/header/header.component'
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './containers/footer/footer.component';
import { ItemPostComponent } from './components/item-post/item-post.component';
// import { CommentWrapperComponent } from './containers/comment-wrapper/comment-wrapper.component';
import { AddCommentComponent } from './containers/add-comment/add-comment.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CommentComponent } from './components/comment/comment.component';
import { MainComponent } from './containers/main/main.component';
import { SuccessfulComponent } from './components/successful/successful.component';
import { CardOfUserComponent } from './components/card-of-user/card-of-user.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import { AddCommentForCommentComponent } from './containers/add-comment-for-comment/add-comment-for-comment.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import   MaterialModule  from '../user/material-module';
import { SubscriptionListComponent } from './containers/subscription-list/subscription-list.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule   
  ],
  declarations: [
    HeaderComponent, 
    NavComponent,
    ItemPostComponent, 
    FooterComponent, 
    // CommentWrapperComponent,
    AddCommentComponent,
    NotFoundComponent,
    CommentComponent, 
    MainComponent,
    SuccessfulComponent,
    CardOfUserComponent,
    // AddCommentForCommentComponent,
    ChangePasswordComponent,
    SubscriptionListComponent,
    ],
    
  exports: [
    HeaderComponent, 
    NavComponent,
    ItemPostComponent, 
    FooterComponent, 
    // CommentWrapperComponent,
    AddCommentComponent,
    NotFoundComponent,
    CommentComponent,
    MainComponent,
    SuccessfulComponent,
    CommonModule,
    CardOfUserComponent,
    ChangePasswordComponent
 
  ]
})
export class CoreModule { }
