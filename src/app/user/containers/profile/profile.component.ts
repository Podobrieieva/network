import { Component, OnInit, OnDestroy } from '@angular/core';
import { NetworkService } from '../../../shared/services/network.service';
import { Post, UserProfileModel, UserCard } from '../../../shared/models/user.model';
import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable, of, Subject, Subscription} from 'rxjs';
import { getIsUserProfile, State, getIsCurrentUserProfile, getIsSubscribersProfile, getIsSubscribersCurrent } from "../../../core/store";
import { select, Store} from "@ngrx/store";

import { GetUserProfile, GetCurrentUserProfile } from '../../../core/store/actions/user-profile.actions'
import { AddSubscribe, GetSubscribersId, GetSubscribersProfile } from '../../../core/store/actions/subscribe.actions'


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy  {
  public selectedFile: File;
  public currentUser = {
    name: 'Sarah',
    avatar: '../../../../assets/img/user-profile/users/user-1.jpg',
    surname: 'Cruiz',
    workPosition: 'Creative Director'
  };
  public userPosts: Array<Post>;
 
  
 

  
  
  public userSubscribers:Array<UserCard>;
  //private paramsRouteId:string;
  private isUserProfileSubscription: Subscription;
  private subscriptionIdUser: Subscription;
  private isCurrentUserSubscription: Subscription;
  private isUserProfileSubscribers: Subscription;
  private isCurrentUserSubscribers: Subscription;
  private user$: UserProfileModel;
  private profileСhange: string;

  constructor(
    private service: NetworkService,
   //private activateRoute: ActivatedRoute, 
    private store: Store<State>) {
      const subscription = this.service.userPostsSubjObservable().subscribe(data => {
        this.userPosts= data;
      });

    // this.subscriptionIdUser = this.activateRoute.params.subscribe(params=>{
    //   this.paramsRouteId = (!params['id'])? 'profile': params['id'];
      
      
    // });

this.subscriptionIdUser = this.service.profileSubjObservable().subscribe(data => {
      this.profileСhange = data
      console.log(data)
      if (data === 'profile') {
         this.isUserProfileSubscription =  this.store.pipe(select(getIsUserProfile)).subscribe(isUserProfile => this.user$ = isUserProfile);
         this.isUserProfileSubscribers =  this.store.pipe(select(getIsSubscribersProfile)).subscribe(isUserSubscribers => this.userSubscribers = isUserSubscribers);

      } else {
        
        this.isCurrentUserSubscription =  this.store.pipe(select(getIsCurrentUserProfile)).subscribe(isCurrentUserProfile => this.user$ = isCurrentUserProfile) 
        this.isCurrentUserSubscribers = this.store.pipe(select(getIsSubscribersCurrent)).subscribe(isUserSubscribers => this.userSubscribers = isUserSubscribers);
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

  public cancelHandler(){
    this.service.getUserPosts()
  }
  public deleteHandler(id){

  }


  ngOnDestroy() {
    // this.subscriptionIdUser.unsubscribe();
    // this.isUserProfileSubscription.unsubscribe();
    //this.isCurrentUserSubscription.unsubscribe();
  }

}
