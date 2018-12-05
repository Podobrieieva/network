import { Injectable } from '@angular/core';
import { CommentModel, PostModel, UserCard} from '../models/user.model';
import { BehaviorSubject, Observable} from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators'
import {RequestOptions, Request, RequestMethod} from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  private commentSubj: BehaviorSubject<any> = new BehaviorSubject(3)
  private commentForComSubj: BehaviorSubject<any> = new BehaviorSubject(3)
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
  public commentWrapperForComment:CommentModel [] = [
    {
    content: 'fhkf',
    avatar: "https://thunder-team.com/friend-finder/images/users/user-11.jpg ",
    userName:"John"
    }

  ] 
  

  constructor(private http: HttpClient) { }
    
   

public getUserProfile() {
  return this.http.get<any>(`${this.apiUrl}/profile`);  
}

public logout() {
  localStorage.removeItem('permissionToEnter'); 
  location.reload(true);    
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

  public getPosts(): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(`${this.url}/network/news`);

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
     this.commentWrapperForComment.push(comment)
  }
  
}
