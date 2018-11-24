import { Injectable } from '@angular/core';
import { CommentModel } from '../models/user.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  private commentSubj: BehaviorSubject<any> = new BehaviorSubject(3)
  private commentForComSubj: BehaviorSubject<any> = new BehaviorSubject(3)
  public commentWrapper: CommentModel [] = [
    {
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
      avatar: "https://thunder-team.com/friend-finder/images/users/user-11.jpg ",
      userName:"John"
    },
    {
      content:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
      avatar: "https://thunder-team.com/friend-finder/images/users/user-11.jpg",
      userName: "Diana"
    }
  ]
  public commentWrapperForComment:CommentModel [] = [
    {
    content: 'fhkf',
    avatar: "https://thunder-team.com/friend-finder/images/users/user-11.jpg ",
    userName:"John"
    }

  ] 
  

  constructor() { }

  public getComments() {
    return this.fetchComments(this.commentWrapper);
  }

  public fetchComments(params) {
      this.commentSubj.next(params);
  }

  public commentSubjObservable(){
    return this.commentSubj.asObservable();
  }

  public getCommentsForComments() {
    return this.fetchCommentsForCom(this.commentWrapperForComment);
  }

  public fetchCommentsForCom(params) {
      this.commentForComSubj.next(params);
  }

  public commentForComSubjObservable(){
    return this.commentForComSubj.asObservable();
  }

  public addComment(comment){
    this.commentWrapper.push(comment);
  }
  public addCommentForComment(comment){
     this.commentWrapperForComment.push(comment)
  }
  
}
