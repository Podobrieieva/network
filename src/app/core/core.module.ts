import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { HeaderComponent } from './containers/header/header.component'
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './containers/footer/footer.component';
import { ItemPostComponent } from './components/item-post/item-post.component';
import { CommentWrapperComponent } from './containers/comment-wrapper/comment-wrapper.component';
import { AddCommentComponent } from './containers/add-comment/add-comment.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CommentComponent } from './components/comment/comment.component';
import { MainComponent } from './containers/main/main.component';
import { SuccessfulComponent } from './components/successful/successful.component';
import { CardOfUserComponent } from './components/card-of-user/card-of-user.component';




@NgModule({
  imports: [
    CommonModule,
    RouterModule,
   
  ],
  declarations: [
    HeaderComponent, 
    NavComponent,
    ItemPostComponent, 
    FooterComponent, 
    CommentWrapperComponent,
    AddCommentComponent,
    NotFoundComponent,
    CommentComponent, 
    MainComponent,
    SuccessfulComponent,
    CardOfUserComponent
    ],
  exports: [
    HeaderComponent, 
    NavComponent,
    ItemPostComponent, 
    FooterComponent, 
    CommentWrapperComponent,
    AddCommentComponent,
    NotFoundComponent,
    CommentComponent,
    MainComponent,
    SuccessfulComponent,
    CommonModule,
    CardOfUserComponent
 
  ]
})
export class CoreModule { }
