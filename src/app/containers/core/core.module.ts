import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from '../header/header.component';
import { NavComponent } from '../../components/nav/nav.component';
import { FooterComponent } from '../footer/footer.component';
import { ItemPostComponent } from '../../components/item-post/item-post.component';
import { CommentWrapperComponent } from '../comment-wrapper/comment-wrapper.component';
import { AddCommentComponent } from '../add-comment/add-comment.component';
import { NotFoundComponent } from '../../components/not-found/not-found.component';
import { CommentComponent } from '../../components/comment/comment.component';


@NgModule({
  imports: [
    CommonModule
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
 
  ]
})
export class CoreModule { }
