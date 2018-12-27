import { Injectable } from '@angular/core';
import { CommentModel, Post, PostModel, UserCard} from '../models/user.model';
import { BehaviorSubject, Observable, of, Subject} from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';
import { RequestOptions, Request, RequestMethod} from '@angular/http';
import { UserProfileModel} from '../models/user.model';
import { GetUserProfile, GetCurrentUserProfile, PutUpdateProfile } from '../../core/store/actions/user-profile.actions';
import { select, Store} from '@ngrx/store';
import { State } from '../../core/store';
import { RegisterService } from '../../register/service/register.service';
import { AddSubscribe, DeleteSubscribe } from '../../core/store/actions/subscribe.actions';
import { AddLike, AddDislike } from '../../core/store/actions/user-posts.actions';




@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  private addPostSubject: Subject <any> = new Subject();
  private UsersSubscription: BehaviorSubject<any>;
  public userProfileСontrol: BehaviorSubject<string> = new BehaviorSubject('profile');
  private apiUrl = 'https://s-network.herokuapp.com/api/v1';
  public defaultAvatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKW8JSKU4Swud_MeCE1rN7cayv8RtnyzFxf6rZzh_g9M-b6dhqGA';
  public userPosts: Array<Post>;
 

  constructor(private http: HttpClient, private store: Store<State>, private registerService: RegisterService) {}

  public logout() {
    this.registerService.logout();
  }

 // REQUESTS PROFILE
  public getUserProfile() {
    return this.http.get<any>(`${this.apiUrl}/profile`);
  }

  public getCurrentUserProfile(id) {
    return this.http.get<any>(`${this.apiUrl}/profile/${id}`);
  }

  public resetPassword(reset) {
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
    return this.http.put<any>(`${this.apiUrl}/profile`, data);
  }

  public updateProfile(data) {
    this.store.dispatch(new PutUpdateProfile(data));
  }
//////////////////////////////////////////////////////////////////////////////////////////////////
  public uploadPhotoUser(selectedFile) {
    const uploadData = new FormData();
    uploadData.append('image', selectedFile, selectedFile.name);
    this.http.post(`${this.apiUrl}/profile/upload_avatar`, uploadData,
    {
      reportProgress: true,
      observe: 'events'
    })
    .subscribe(event => {
      this.store.dispatch(new GetUserProfile());
    });
  }

  public getPosts() {
    return this.http.get<any>(`${this.apiUrl}/posts`);

  }

  public getUserPosts(userId) {
    let params = new HttpParams();
    params = params.append('userId', userId);
    return this.http.get<any>(`${this.apiUrl}/posts`, {params});
  }

  public deletePost(id) {
      return this.http.delete(`${this.apiUrl}/posts/${id}`);
  }

  public addComment(idPost, comment) {
    const commentText = {
      'text': comment.text
    };
   return this.http.post<any>(`${this.apiUrl}/posts/${idPost}/comment`, commentText);
  }

  public deleteComment (post, comment){
    const idPost = post.id
    const idComment = comment._id
    console.log("Ghbdtn", comment)
    return this.http.delete<any>(`${this.apiUrl}/posts/${idPost}/comment/${idComment}`)
  }

  public getAddPostObservable() {
    return this.addPostSubject.asObservable();
  }

  public addPost(post, selectedFile ) {
    const postUser = JSON.stringify(post);
    const uploadData = new FormData();
    uploadData.append('data', postUser);
    // const uploadImage = new FormData();
    uploadData.append('image', selectedFile, selectedFile.name );
    return this.http.post<any>(`${this.apiUrl}/posts`, uploadData );
  }
}
