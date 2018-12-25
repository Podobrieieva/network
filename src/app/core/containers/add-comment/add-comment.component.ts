import { Component, OnInit, ViewChild, Output, Input, EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms';

import { NetworkService } from '../../../shared/services/network.service';
import { PostComment } from '../../../shared/models/user.model';
import { Store, select } from '@ngrx/store';
import { State, getIsUserProfile} from '../../store';
import { Subscription } from 'rxjs';
import { GetUserPostAddComment } from '../../store/actions/user-posts.actions';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {
  @Input () postId: string;
  @Output() addEvt = new EventEmitter();
  public isUserProfileSubscription : Subscription;
 

 
  public comment: PostComment ={
    _id: "",
    author: {
      name: "",
          surname: "",
          fullname: "",
          avatarUrl: '',
          id: '',
    },
    text: "",
    date: new Date(),
   

  }

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

  }



  public onSubmit(form: NgForm) {
    this.store.dispatch(new GetUserPostAddComment(this.postId, this.comment)) 
    this.addBtnClickHandler()
      
  }
  public addBtnClickHandler() {
      this.addEvt.emit(false);
    
  }

  

}
