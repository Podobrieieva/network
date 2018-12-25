import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { GetPosts } from '../../../core/store/actions/news.actions';
import { State, getPosts } from '../../../core/store';
import {  Post } from '../../../shared/models/user.model';
import { NetworkService } from '../../../shared/services/network.service';
import { GetUserPostDelete } from '../../../core/store/actions/user-posts.actions';


@Component({
  selector: 'app-post-wrapper',
  templateUrl: './post-wrapper.component.html',
  styleUrls: ['./post-wrapper.component.scss']
})
export class PostWrapperComponent implements OnInit {
  public allPosts: boolean = true;
  // public isUserPostSubscription: Subscription; 
  public userPosts;
  // private isUserProfileSubscription: Subscription;
  // public userProfile: UserProfileModel;

  constructor( private store: Store<State>, private service: NetworkService ) {
    this.userPosts = this.store.pipe(select(getPosts));
  }

  ngOnInit() {
    this.store.dispatch(new GetPosts());
  }

  public deleteHandler(id) {
    this.store.dispatch(new GetUserPostDelete(id));
  }
  public switchPosts(){
    
        this.allPosts = true;
  }
public switchPostsSubscription(){
  this.allPosts = false;
}

}
