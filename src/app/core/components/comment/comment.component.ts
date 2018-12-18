import { Component, OnInit, Input, Output,  EventEmitter  } from '@angular/core';
import { NetworkService } from '../../../shared/services/network.service';
import { PostComment } from '../../../shared/models/user.model';
import { Subscription } from 'rxjs';
import {  UserProfileModel } from '../../../shared/models/user.model';
import { State, getIsUserProfile } from '../../store';
import { Store, select } from '@ngrx/store';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() item: PostComment;
  @Input() itemIndex = 0;
  @Output() deleteEvtComment = new EventEmitter();
 

  private  isUserProfileSubscribers: Subscription;
  public accessToDeleteComment: boolean = false;
  public user$: UserProfileModel;

  public commentForComment: Array<any>;

  constructor(private networkService: NetworkService,  private store: Store<State> ) { 
    this.isUserProfileSubscribers =  this.store.pipe(select(getIsUserProfile)).subscribe(isUserProfile => {
      this.user$ = isUserProfile;
    })    
  
   
    
  }

  ngOnInit() {
     if (this.user$.id === this.item.author.id){
      this.accessToDeleteComment = true
     }
 
  }

  public deleteBtnCkickHandlerComment(id){
  
    this.deleteEvtComment.emit(id);
  }



}
