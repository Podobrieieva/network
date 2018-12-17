import { Component, OnInit } from '@angular/core';
import { NetworkService } from '../../../shared/services/network.service';
import { PostComment } from '../../../shared/models/user.model';
import { Store, select } from '@ngrx/store';
import { State, getIsUserProfile, getPosts } from '../../store';
import { Subscription } from 'rxjs';
import { GetPosts } from '../../store/actions/news.actions';

@Component({
  selector: 'app-comment-wrapper',
  templateUrl: './comment-wrapper.component.html',
  styleUrls: ['./comment-wrapper.component.scss']
})
export class CommentWrapperComponent implements OnInit {
  public commentWrapper: Array<PostComment>;
  private isUserPostsSubscription: Subscription;
  

  constructor(private networkService: NetworkService, private store: Store<State>) { 
    this.isUserPostsSubscription = this.store.pipe(select(getPosts)).subscribe(posts => {
      console.log(posts)  
       if (posts.length) {
        this.commentWrapper = posts.comments
      }  
       
    })
  }

  ngOnInit() {
    this.store.dispatch(new GetPosts ())
  }



}
