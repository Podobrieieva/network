import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { SearchComponent } from './components/search/search.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { CheckInComponent } from './components/check-in/check-in.component';
import { ItemPostComponent } from './components/item-post/item-post.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CardOfUserComponent } from './components/card-of-user/card-of-user.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderComponent } from './containers/header/header.component';
import { MainComponent } from './containers/main/main.component';
import { FooterComponent } from './containers/footer/footer.component';

import { ProfileComponent } from './containers/profile/profile.component';
import { PostWrapperComponent } from './containers/post-wrapper/post-wrapper.component';
import { FriendsListComponent } from './containers/friends-list/friends-list.component';
import { AddNewPostComponent } from './containers/add-new-post/add-new-post.component';
import { CommentWrapperComponent } from './containers/comment-wrapper/comment-wrapper.component';
import { AddCommentComponent } from './containers/add-comment/add-comment.component';
import { NetworkDirective } from './shared/directives/network.directive';
import { CustomPipe } from './shared/pipes/custom.pipe';
import { NetworkService } from './shared/services/network.service';
import { RegisterGuard } from './shared/guards/register.guard';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SearchComponent,
    LogInComponent,
    CheckInComponent,
    ItemPostComponent,
    CommentsComponent,
    CardOfUserComponent,
    NotFoundComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,

    ProfileComponent,
    PostWrapperComponent,
    FriendsListComponent,
    AddNewPostComponent,
    CommentWrapperComponent,
    AddCommentComponent,
    NetworkDirective,
    CustomPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [NetworkService, RegisterGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
