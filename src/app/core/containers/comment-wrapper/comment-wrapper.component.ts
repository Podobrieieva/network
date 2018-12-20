import { Component, OnInit, Input } from '@angular/core';
import { NetworkService } from '../../../shared/services/network.service';
import { PostComment, Post } from '../../../shared/models/user.model';
import { Store} from '@ngrx/store';
import { State} from '../../store';
import { GetUserPostCommentDelete } from '../../store/actions/user-posts.actions';

@Component({
  selector: 'app-comment-wrapper',
  templateUrl: './comment-wrapper.component.html',
  styleUrls: ['./comment-wrapper.component.scss']
})
export class CommentWrapperComponent implements OnInit {
  @Input() arrayComments: Array<PostComment>;
  @Input() post: Post
  
 
 
  

  constructor(private networkService: NetworkService, private store: Store<State>) { 

  }

  ngOnInit() {
console.log(this.arrayComments)
  }

  public deleteHandler(comment){
    this.store.dispatch(new GetUserPostCommentDelete(this.post, comment))

  }



}
