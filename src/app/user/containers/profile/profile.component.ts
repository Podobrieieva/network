import { Component, OnInit, OnDestroy } from '@angular/core';
import { NetworkService } from '../../../shared/services/network.service';
import { Post, UserProfileModel,  UserCard } from '../../../shared/models/user.model';
import { Store, select } from '@ngrx/store';
import { State, getIsUserPosts, getIsUserProfile, getIsCurrentUserProfile,  getIsSubscriptionsProfile, getIsSubscriptionsId } from '../../../core/store';
import { GetUserPosts } from '../../../core/store/actions/user-posts.actions'
import { BehaviorSubject, Observable, of, Subject, Subscription } from 'rxjs';
import { GetPosts } from '../../../core/store/actions/news.actions';
import { Router, ActivatedRoute } from '@angular/router';
import { GetUserProfile, GetCurrentUserProfile } from '../../../core/store/actions/user-profile.actions'
import { AddSubscribe, GetSubscriptionsId, GetSubscriptionsProfile } from '../../../core/store/actions/subscribe.actions'


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy  {
  public selectedFile: File;
  private isUserPostSubscription: Subscription;
  private isUserProfileSubscription: Subscription;
  private userId: string;
  //
  public userSubscribers:Array<UserCard>;
  //private paramsRouteId:string;
  private subscriptionIdUser: Subscription;
  private isCurrentUserSubscription: Subscription;
  private isUserProfileSubscribers: Subscription;
  private isCurrentUserSubscribers: Subscription;
  private user$: UserProfileModel;
  private profileСhange: string;
  public currentUser = {
    name: 'Sarah',
    avatar: '../../../../assets/img/user-profile/users/user-1.jpg',
    surname: 'Cruiz',
    workPosition: 'Creative Director'
  };
  public userPosts: Array<Post>;


 
  constructor(private service: NetworkService, private store: Store<State>) {
    this.isUserPostSubscription = this.store.pipe(select(getIsUserPosts)).subscribe(posts => {
      console.log(posts)
      // if (posts) {
      //   this.userPosts = posts.data.
      // }      
    })

    // const subscription = this.service.userPostsSubjObservable().subscribe(data => {
    //   this.userPosts= data;
    // });
    const subscrip = this.service.userProfileSubjObservable().subscribe(data => {
      this.user$ = data;
    });
    
    this.subscriptionIdUser = this.service.profileSubjObservable().subscribe(data => {
      this.profileСhange = data
      console.log(data)
      if (data === 'profile') {
        this.isUserProfileSubscription =  this.store.pipe(select(getIsUserProfile)).subscribe(isUserProfile => this.user$ = isUserProfile);
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
      this.store.dispatch(new GetSubscriptionsProfile());     
    } else {
      this.store.dispatch(new GetCurrentUserProfile(this.profileСhange));
      this.store.dispatch(new GetSubscriptionsId(this.profileСhange));      
    }

    this.store.dispatch(new GetUserPosts (this.user$.id));
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

  }


  ngOnDestroy() {
    // this.subscriptionIdUser.unsubscribe();
    // this.isUserProfileSubscription.unsubscribe();
    //this.isCurrentUserSubscription.unsubscribe();
  }

}
