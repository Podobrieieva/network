import { Injectable } from '@angular/core';
import { CommentModel, Post, PostModel, UserCard} from '../models/user.model';
import { BehaviorSubject, Observable, Subject} from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators'
import {RequestOptions, Request, RequestMethod} from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  private userProfileSubj: BehaviorSubject<any> = new BehaviorSubject(3);
  private userPostsSubj: BehaviorSubject<any> = new BehaviorSubject(3);
  private commentSubj: BehaviorSubject<any> = new BehaviorSubject(3);
  private commentForComSubj: BehaviorSubject<any> = new BehaviorSubject(3);
  private addPostSubject: Subject <any> = new Subject();
  private apiUrl:string = 'https://s-network.herokuapp.com/api/v1';
  private url = `http://localhost:3000`;
  
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


  public commentWrapperForComment:CommentModel [];
  

  constructor(private http: HttpClient) { }

    
  public logout() {
    localStorage.removeItem('permissionToEnter'); 
    location.reload(true);    
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
    });
}


  public getUsers():Observable<UserCard[]>{
    return this.http.get("https://randomuser.me/api/?page=3&results=10&seed=abc").pipe(
                 map(response => response["results"]),
                 map(users=>{
                   return users.map( (user,i) => {
                     return {
                       name: user.name.first,
                       surname: user.name.last,
                       photo: user.picture.large,
                       id: i,
                     }
                   })
                 }))
                          
                    
  }

  public getPosts() {
    return this.http.get<any>(`${this.apiUrl}/posts`);

  }

  public getUserPosts(userId){
    return this.http.get<any>(`${this.apiUrl}/posts${userId}`);
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
  public addPost(post, selectedFile ){
    // this.userPosts.push(post)
    const uploadData = new FormData();
    uploadData.append('image', selectedFile, selectedFile.name );

    return this.http.post<any>(`${this.apiUrl}/posts`, post, selectedFile);
  }
  
}
