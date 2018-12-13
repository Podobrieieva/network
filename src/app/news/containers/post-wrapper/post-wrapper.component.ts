import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import {GetPosts} from '../../../core/store/actions/news.actions';
import { State, getPosts } from '../../../core/store';
import { Observable, Subscription } from 'rxjs';
import { PostModel, Post } from '../../../shared/models/user.model';
import { NetworkService } from '../../../shared/services/network.service';

@Component({
  selector: 'app-post-wrapper',
  templateUrl: './post-wrapper.component.html',
  styleUrls: ['./post-wrapper.component.scss']
})
export class PostWrapperComponent implements OnInit {
  // postList$: Observable <PostModel[]>
  public isUserPostSubscription: Subscription; 
  public userPosts: Array<Post>;

  constructor(private store:Store<State>, private service: NetworkService ) { 
    // const subscription = this.service.userPostsSubjObservable().subscribe(data => {
    //   this.userPosts= data;
  // })
  this.isUserPostSubscription = this.store.pipe(select(getPosts)).subscribe(posts => {
    console.log(posts)
    if (posts.length) {
      this.userPosts = posts
    }      
  })
  }

  ngOnInit() {
    // this.store.dispatch({type: NewsActions.NewsActionTypes.GET_POSTS})
    // this.postList$ = this.store.pipe(select(getPosts));
    // this.service.getUserPosts();
    this.store.dispatch(new GetPosts());

  }


}





