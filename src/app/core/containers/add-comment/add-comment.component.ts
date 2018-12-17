import { Component, OnInit, ViewChild, Output, EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms';

import { NetworkService } from '../../../shared/services/network.service';
import { CommentModel, PostComment } from '../../../shared/models/user.model';
import { Store, select } from '@ngrx/store';
import { State, getIsUserProfile } from '../../store';
import { GetUserProfile } from '../../store/actions/user-profile.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {
  @Output() addEvt = new EventEmitter();
 
  private isUserProfileSubscription: Subscription;
 
  public comment: PostComment;

  @ViewChild('commentForm') commentForm: NgForm;

  constructor( private networkService: NetworkService, private store: Store<State>) { 
    this.isUserProfileSubscription = this.store.pipe(select(getIsUserProfile)).subscribe(isUserProfile => {
      console.log(isUserProfile)
      if (isUserProfile) {
        this.comment.author.name = isUserProfile.name;
        this.comment.author.surname = isUserProfile.surname;
        this.comment.author.avatarUrl = isUserProfile.avatarUrl;
        this.comment.author.id = isUserProfile.id;
      }      
    })
  }
   

  ngOnInit() {
    ////////////////////////////this.store.dispatch(new GetUserProfile());
  }



  public onSubmit(form: NgForm) {
    // const comment = {...this.model};
    // this.networkService.addComment(comment)
    // this.addBtnClickHandler()
      
  }
  public addBtnClickHandler() {
      this.addEvt.emit(false);
    
  }

  

}
