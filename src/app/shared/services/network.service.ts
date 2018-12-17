import { Injectable } from '@angular/core';
import { CommentModel, Post, PostModel, UserCard} from '../models/user.model';
import { BehaviorSubject, Observable, of, Subject} from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators'
import { RequestOptions, Request, RequestMethod} from '@angular/http';
import { UserProfileModel} from '../models/user.model'
import { GetUserProfile, GetCurrentUserProfile } from '../../core/store/actions/user-profile.actions'
import { select, Store} from "@ngrx/store";
import { getIsUserProfile, State, getIsCurrentUserProfile, getIsSubscribersProfile, getIsSubscribersCurrent } from "../../core/store";
import { RegisterService } from '../../register/service/register.service'


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
  private apiUrl:string = 'https://s-network.herokuapp.com/api/v1'; 
  public userProfileСontrol:BehaviorSubject<string> = new BehaviorSubject('profile');


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
   
  public userPosts: Array<Post>
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



  

  constructor(private http: HttpClient, private store: Store<State>, private registerService:RegisterService) { }

    
  public logout() {
    this.registerService.logout();
    // localStorage.removeItem('permissionToEnter');
    // //localStorage.clear(); 
    // location.reload(true);    
  }

 // REQUESTS
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
    console.log("delete service")
    return this.http.post<any>(`${this.apiUrl}/profile/${id}/unsubscribe`, id);
  }

  public getUsersSubscribersProfile() {
    return this.http.get<any>(`${this.apiUrl}/profile/subscribers`);
  }

  public getUsersSubscribersId(id) {
    console.log(id)
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
    console.log('data')
    return this.http.get<any>(`${this.apiUrl}/profile/search?fullname=${term}`);
  }



//////////////////////////////////////////////////////////////////




  
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

  public deletePost(id){
      return this.http.delete(`${this.apiUrl}/posts/${id}`)
  }

  public fetchUserPosts(params){
    this.userPostsSubj.next(params)
  }

  public userPostsSubjObservable(){
    return this.userPostsSubj.asObservable()
  }
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

  

  public fetchCommentsForCom(params) {
      this.commentForComSubj.next(params);
  }

  public commentForComSubjObservable(){
    return this.commentForComSubj.asObservable();
  }

  public addComment(comment){
    this.commentWrapper.push(comment);
  }

  public setItemByIndex(item,index){
    this.userPosts[index] = item;
    // this.getUserPosts();
  }

  public getAddPostObservable(){
    return this.addPostSubject.asObservable();
  }
  
  
  public addPost(post, selectedFile ){
    
    let postUser = JSON.stringify(post)

   
   const uploadData = new FormData();
   uploadData.append('data', postUser)

   const uploadImage = new FormData();
   uploadData.append('image', selectedFile, selectedFile.name );

 

   return this.http.post<any>(`${this.apiUrl}/posts`, uploadData );

}
}
