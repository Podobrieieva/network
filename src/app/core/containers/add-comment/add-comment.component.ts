import { Component, OnInit, ViewChild, Output, EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms';

import { NetworkService } from '../../../shared/services/network.service';
import { CommentModel } from '../../../shared/models/user.model';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {
  @Output() addEvt = new EventEmitter();
 
  public model: CommentModel = {
    content: '',
    avatar: "",
    userName: ""
  }

  @ViewChild('commentForm') commentForm: NgForm;

  constructor( private networkService: NetworkService) { 
    this.model.avatar = this.networkService.commentWrapper[0].avatar
    this.model.userName = this.networkService.commentWrapper[0].userName
  }
   

  ngOnInit() {
  
  }



  public onSubmit(form: NgForm) {
    const comment = {...this.model};
    this.networkService.addComment(comment)
    this.addBtnClickHandler()
      
  }
  public addBtnClickHandler() {
      this.addEvt.emit(false);
    
  }

  

}
