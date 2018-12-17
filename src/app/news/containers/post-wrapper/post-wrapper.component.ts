import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import {GetPosts} from '../../../core/store/actions/news.actions';
import { State, getPosts } from '../../../core/store';
import { Subscription } from 'rxjs';
import {  Post } from '../../../shared/models/user.model';
import { NetworkService } from '../../../shared/services/network.service';
import { GetUserPostDelete } from '../../../core/store/actions/user-posts.actions';

@Component({
  selector: 'app-post-wrapper',
  templateUrl: './post-wrapper.component.html',
  styleUrls: ['./post-wrapper.component.scss']
})
export class PostWrapperComponent implements OnInit {
  public isUserPostSubscription: Subscription; 
  public userPosts: Array<Post>;

  constructor(private store:Store<State>, private service: NetworkService ) { 

  this.isUserPostSubscription = this.store.pipe(select(getPosts)).subscribe(posts => {
    console.log(posts)
    if (posts.length) {
      this.userPosts = posts
    }      
  })
  }

  ngOnInit() {
    
    this.store.dispatch(new GetPosts());

  }

  public deleteHandler(id){
    this.store.dispatch(new GetUserPostDelete(id))

  }


}





