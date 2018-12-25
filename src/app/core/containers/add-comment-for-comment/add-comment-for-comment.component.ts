// import {  Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
// import { NgForm } from '@angular/forms';

// import { CommentModel } from '../../../shared/models/user.model';
// import { NetworkService } from '../../../shared/services/network.service';


// @Component({
//   selector: 'app-add-comment-for-comment',
//   templateUrl: './add-comment-for-comment.component.html',
//   styleUrls: ['./add-comment-for-comment.component.scss']
// })
// export class AddCommentForCommentComponent implements OnInit {
//   public model: CommentModel = {
//     content: '',
//     avatar: "",
//     userName: ""
//   }

//   @ViewChild('commentForm') commentForm: NgForm;

//   constructor(private networkService: NetworkService) {
//     this.model.avatar = 'https://thunder-team.com/friend-finder/images/users/user-11.jpg'
//     this.model.userName = 'name John'
//   }

//   ngOnInit() {
//   }

//   public onSubmit(form: NgForm) {
//     const comment = {...this.model};
//     this.networkService.addCommentForComment(comment)
//     console.log(this.model);
//   }

//   public addBtnClickHandler() {
// 	this.addEvt.emit(false);
//   }
// }
