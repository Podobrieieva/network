import { Component, OnInit, Input } from '@angular/core';
import { NetworkService } from '../../../shared/services/network.service';
import { PostComment, Post } from '../../../shared/models/user.model';
import { Store, select } from '@ngrx/store';
import { State, getIsUserProfile, getPosts } from '../../store';
import { Subscription } from 'rxjs';
import { GetPosts } from '../../store/actions/news.actions';
import { GetUserPostCommentDelete } from '../../store/actions/user-posts.actions';

@Component({
  selector: 'app-comment-wrapper',
  templateUrl: './comment-wrapper.component.html',
  styleUrls: ['./comment-wrapper.component.scss']
})
export class CommentWrapperComponent implements OnInit {
  @Input() arrayComments: Array<PostComment>;
  @Input () postId: string;
  // private isUserPostSubscription: Subscription;
  // user
 
 
  

  constructor(private networkService: NetworkService, private store: Store<State>) { 
    // this.isUserPostSubscription = this.store.pipe(select(getPosts)).subscribe(posts => {
    //   console.log(posts)
    //   if (posts.length) {
    //     this.userPosts = posts
    //   }      
    // })
  

  }

  ngOnInit() {
console.log(this.arrayComments)
  }

  public deleteHandler(id){
    this.store.dispatch(new GetUserPostCommentDelete(this.postId, id))

  }



}
