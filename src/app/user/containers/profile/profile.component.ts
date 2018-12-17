import { Component, OnInit, OnDestroy } from '@angular/core';
import { NetworkService } from '../../../shared/services/network.service';
import { Post, UserProfileModel,  UserCard } from '../../../shared/models/user.model';
import { Store, select } from '@ngrx/store';
import { State, getIsUserPosts, getIsUserProfile, getIsCurrentUserProfile, getIsSubscribersProfile, getIsSubscribersCurrent, getPosts, getIsSubscriptionsProfile, getIsSubscriptionsId } from '../../../core/store';
import {GetUserPosts, GetUserPostDelete } from '../../../core/store/actions/user-posts.actions'
import { BehaviorSubject, Observable, of, Subject, Subscription } from 'rxjs';
import { GetPosts } from '../../../core/store/actions/news.actions';
import { Router, ActivatedRoute } from '@angular/router';
import { GetUserProfile, GetCurrentUserProfile } from '../../../core/store/actions/user-profile.actions'
import { AddSubscribe, GetSubscribersId, GetSubscribersProfile } from '../../../core/store/actions/subscribe.actions'


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy  {
  public selectedFile: File;
  private isUserPostSubscription: Subscription;
  private isUserProfileSubscription: Subscription;
 
  //
  public userSubscribers:Array<UserCard>;
  //private paramsRouteId:string;
  private subscriptionIdUser: Subscription;
  private isUserPostsSubscription: Subscription;
  private isCurrentUserSubscription: Subscription;
  private isUserProfileSubscribers: Subscription;
  private isCurrentUserSubscribers: Subscription;
  private user$: UserProfileModel;
  private profileСhange: string;
  public userPosts: Array<Post>;
  // public allPosts:  Array<Post>;
  public accessToAddPost: boolean = false;


 
  constructor(private service: NetworkService, private store: Store<State>) {
    // this.isUserPostsSubscription = this.store.pipe(select(getPosts)).subscribe(posts => {
    //   console.log(posts)  
    //    if (posts.length) {
    //     this.allPosts = posts
    //   }  
       
    // })
    this.isUserPostSubscription = this.store.pipe(select(getIsUserPosts)).subscribe(
      posts => {
      console.log(posts)
      if (posts) {
        this.userPosts = posts
      }      

    })



  
    this.subscriptionIdUser = this.service.profileSubjObservable().subscribe(data => {
      this.profileСhange = data
      console.log(data)
      if (data === 'profile') {
        this.isUserProfileSubscription =  this.store.pipe(select(getIsUserProfile)).subscribe(isUserProfile => {
          this.user$ = isUserProfile;
          this.accessToAddPost = true;
        }
          
          );
        this.isUserProfileSubscribers =  this.store.pipe(select( getIsSubscriptionsProfile)).subscribe(isUserSubscribers => this.userSubscribers = isUserSubscribers);
       } else {    
        this.isCurrentUserSubscription =  this.store.pipe(select(getIsCurrentUserProfile)).subscribe(isCurrentUserProfile => this.user$ = isCurrentUserProfile) 
        this.isCurrentUserSubscribers = this.store.pipe(select(getIsSubscriptionsId)).subscribe(isUserSubscribers => this.userSubscribers = isUserSubscribers);
      }
    }); 


   
  }

  ngOnInit() {
  
    if (this.profileСhange === 'profile') {
      this.store.dispatch(new GetUserProfile());
      this.store.dispatch(new GetSubscribersProfile());      
    } else {
      this.store.dispatch(new GetCurrentUserProfile(this.profileСhange));
      this.store.dispatch(new GetSubscribersId(this.profileСhange));      
    }
    
  }

 
   public addSubscribe() {
    this.store.dispatch(new AddSubscribe(this.user$.id))

  }

  public onFileChanged(event) {
    this.selectedFile = event.target.files[0]   
    this.service.uploadPhotoUser(this.selectedFile)
  } 
 
  public saveHandler({item, itemIndex}){
      this.service.setItemByIndex(item, itemIndex);
  }

  public deleteHandler(id){
    this.store.dispatch(new GetUserPostDelete(id))

  }


  ngOnDestroy() {
   
  }

}
