import { Injectable } from '@angular/core';
import { CommentModel, Post, PostModel, UserCard} from '../models/user.model';
import { BehaviorSubject, Observable, of, Subject} from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators'
import { RequestOptions, Request, RequestMethod} from '@angular/http';
import { UserProfileModel} from '../models/user.model'
import { GetUserProfile, GetCurrentUserProfile, PutUpdateProfile } from '../../core/store/actions/user-profile.actions'
import { select, Store} from "@ngrx/store";
import { State } from "../../core/store";
import { RegisterService } from '../../register/service/register.service';
import { AddSubscribe, DeleteSubscribe } from '../../core/store/actions/subscribe.actions';
import { AddLike, AddDislike }  from '../../core/store/actions/user-posts.actions'




@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  private userProfileSubj: BehaviorSubject<any> = new BehaviorSubject(3);
  private userPostsSubj: BehaviorSubject<any> = new BehaviorSubject(3);
  private commentSubj: BehaviorSubject<any> = new BehaviorSubject(3);
  private commentForComSubj: BehaviorSubject<any> = new BehaviorSubject(3);
  private addPostSubject: Subject <any> = new Subject();
  private UsersSubscription: BehaviorSubject<any>;
   
  public userProfileСontrol:BehaviorSubject<string> = new BehaviorSubject('profile');
  private apiUrl:string = 'https://s-network.herokuapp.com/api/v1';

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
  public defaultAvatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKW8JSKU4Swud_MeCE1rN7cayv8RtnyzFxf6rZzh_g9M-b6dhqGA';   
  public userPosts: Array<Post>
  public commentWrapperForComment:CommentModel [];

  constructor(private http: HttpClient, private store: Store<State>, private registerService:RegisterService) { }

    
  public logout() {
    this.registerService.logout();
    // localStorage.removeItem('permissionToEnter');
    // //localStorage.clear(); 
    // location.reload(true);    
  }

 // REQUESTS PROFILE
  public getUserProfile() {
    return this.http.get<any>(`${this.apiUrl}/profile`);
  }

  public getCurrentUserProfile(id) {
    return this.http.get<any>(`${this.apiUrl}/profile/${id}`);
  }

  public resetPassword(reset) {
    console.log(reset)
    return this.http.post<any>(`${this.apiUrl}/entries/reset_password`, reset);
  }

  public addSubscribe(id) {
    return this.http.post<any>(`${this.apiUrl}/profile/${id}/subscribe`, id);
  }

  public deleteSubscribe(id) {
    return this.http.post<any>(`${this.apiUrl}/profile/${id}/unsubscribe`, id);
  }

  public getUsersSubscribersProfile() {
    return this.http.get<any>(`${this.apiUrl}/profile/subscribers`);
  }

  public getUsersSubscribersId(id) {
    return this.http.get<any>(`${this.apiUrl}/profile/${id}/subscribers`);
  }

  public profileSubjObservable() {
    return this.userProfileСontrol.asObservable();
  }

  public profileСhange(params) {
    this.userProfileСontrol.next(params);
  }

  public getUsersSubscriptionsProfile() {
    return this.http.get<any>(`${this.apiUrl}/profile/subscriptions`);
  }

  public getUsersSubscriptionsId(id) {
    return this.http.get<any>(`${this.apiUrl}/profile/${id}/subscriptions`);
  }

  public getUsersSearch(term) {
     return this.http.get<any>(`${this.apiUrl}/profile/search?fullname=${term}`);
  }
/////////////////////////////////// REQUESTS FOR POSTS    //////////////////////////////////

  public addLikePost(id) {
     return this.http.put<any>(`${this.apiUrl}/posts/${id}/like`, id);
  }

  public addDislikePost(id) {
     return this.http.put<any>(`${this.apiUrl}/posts/${id}/dislike`, id);
  }

//////////////////    METHODS   CARD USER    ////////////////////////////////////////////////
  public onViewSubscribeUser(id) {
    this.profileСhange(id);
    this.store.dispatch(new GetCurrentUserProfile(id));      
  }
  public onAddAsFriend(id) {
    this.store.dispatch(new AddSubscribe(id));
  }
  
  public onRemoveFromFriends(id) {
    this.store.dispatch(new DeleteSubscribe(id));
  }
/////////////////////////////////// METHODS FOR POSTS    //////////////////////////////////
  

  public like(id) {
    this.store.dispatch(new AddLike(id));
  }

  public dislike(id) {
    this.store.dispatch(new AddDislike(id));
  }


/////////////////////////////////// METHODS END REQUESTS  FOR UPDATE PROFILE /////////////////////////////////////////

public putUpdateProfile(data) {
  console.log("111111111")
  return this.http.put<any>(`${this.apiUrl}/profile`, data);
}

public updateProfile(data) {
  this.store.dispatch(new PutUpdateProfile(data));
}
////////////////////////////////////////////////////////////////////////////////////////////////// 
public uploadPhotoUser(selectedFile){
  const uploadData = new FormData();
  uploadData.append('image', selectedFile, selectedFile.name);
  this.http.post(`${this.apiUrl}/profile/upload_avatar`, uploadData,
  {
    reportProgress: true,
    observe: 'events'
    
  })
    .subscribe(event => {
      console.log(event); // handle event here
      this.store.dispatch(new GetUserProfile())
    });
}


  


  public getPosts() {
    return this.http.get<any>(`${this.apiUrl}/posts`);

  }

  public getUserPosts(userId){
    let params = new HttpParams();
    params = params.append('userId', userId);
    return this.http.get<any>(`${this.apiUrl}/posts`, {params});
  }

  // public fetchUserPosts(params){
  //   this.userPostsSubj.next(params)
  // }

  // public userPostsSubjObservable(){
  //   return this.userPostsSubj.asObservable()
  // }
   public userProfileSubjObservable(){
    return this.userProfileSubj.asObservable()
 }

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
     this.commentWrapperForComment.push(comment);
    console.log(this.commentWrapperForComment);

  }
  public setItemByIndex(item,index){
    this.userPosts[index] = item;
    // this.getUserPosts();
  }

  public getAddPostObservable(){
    return this.addPostSubject.asObservable();
  }
  // public addPost(post, selectedFile ){
    
  //    let postUser = JSON.stringify(post)

    
  //   const uploadData = new FormData();
  //   uploadData.append('image', selectedFile, selectedFile.name );
  //   uploadData.append('data', postUser)

  //   return this.http.post<any>(`${this.apiUrl}/posts`, postUser, selectedFile);
  // }
  
  public addPost(post, selectedFile ){
    
    let postUser = JSON.stringify(post)

   
   const uploadData = new FormData();
   uploadData.append('data', postUser)

   const uploadImage = new FormData();
   uploadData.append('image', selectedFile, selectedFile.name );

 

   return this.http.post<any>(`${this.apiUrl}/posts`, uploadData );

}
}
  //  = [
  //   {
  //     user: {
  //       name: 'Sarah',
  //       photo: '../../../../assets/img/user-profile/users/user-1.jpg',
  //       surname: 'Cruiz',
  //       id: ""
  //     },
  //     id: '0',
  //     imageUrl: '../../../../assets/img/user-profile/post-images/12.jpg',
  //     // date: ,
  //     like: 13,
  //     dislike: 8,
  //     text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
  //     do eiusmod tempor incididunt ut labore et dolore magna
  //     aliqua. Ut enim ad minim veniam, quis nostrud exercitation
  //     ullamco laboris nisi ut aliquip ex ea commodo consequat.
  //     Duis aute irure dolor in reprehenderit in voluptate velit
  //     esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
  //     occaecat cupidatat non proident, sunt in culpa qui officia
  //     deserunt mollit anim id est laborum.`,
  //     comments: [ ]
  //   },
  //   {
  //     user: {
  //       name: 'Sarah',
  //       photo: '../../../../assets/img/user-profile/users/user-1.jpg',
  //       surname: 'Cruiz',
  //       id: ""
  //     },
  //     id: '1',
  //     imageUrl: '../../../../assets/img/user-profile/post-images/12.jpg',
  //     // date: ,
  //     like: 13,
  //     dislike: 8,
  //     text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
  //     do eiusmod tempor incididunt ut labore et dolore magna
  //     aliqua. Ut enim ad minim veniam, quis nostrud exercitation
  //     ullamco laboris nisi ut aliquip ex ea commodo consequat.
  //     Duis aute irure dolor in reprehenderit in voluptate velit
  //     esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
  //     occaecat cupidatat non proident, sunt in culpa qui officia
  //     deserunt mollit anim id est laborum.`,
  //     comments: [
  //     ]
  //   }, {
  //     user: {
  //       name: 'Sarah',
  //       photo: '../../../../assets/img/user-profile/users/user-1.jpg',
  //       surname: 'Cruiz',
  //       id: ""
  //     },
  //     id: '2',
  //     imageUrl: '../../../../assets/img/user-profile/post-images/12.jpg',
  //     // date: ,
  //     like: 13,
  //     dislike: 8,
  //     text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
  //     do eiusmod tempor incididunt ut labore et dolore magna
  //     aliqua. Ut enim ad minim veniam, quis nostrud exercitation
  //     ullamco laboris nisi ut aliquip ex ea commodo consequat.
  //     Duis aute irure dolor in reprehenderit in voluptate velit
  //     esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
  //     occaecat cupidatat non proident, sunt in culpa qui officia
  //     deserunt mollit anim id est laborum.`,
  //     comments:[]
  //   },
     
     
  // ];
