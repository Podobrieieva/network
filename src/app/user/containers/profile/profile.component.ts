import { Component, OnInit, OnDestroy } from '@angular/core';
import { NetworkService } from '../../../shared/services/network.service';
import { Post, UserProfileModel,  UserCard } from '../../../shared/models/user.model';
import { Store, select } from '@ngrx/store';
import { State, getIsUserPosts, getIsUserProfile, getIsCurrentUserProfile,  getIsSubscriptionsProfile, getIsSubscriptionsId } from '../../../core/store';
//import { GetUserPosts } from '../../../core/store/actions/user-posts.actions'
import { BehaviorSubject, Observable, of, Subject, Subscription } from 'rxjs';
//import { GetPosts } from '../../../core/store/actions/news.actions';
//import { Router, ActivatedRoute } from '@angular/router';
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
  private isCurrentUserSubscription: Subscription;  
  private subscriptionIdUser: Subscription;
  private user$: UserProfileModel;
  private profileСhange: string;
  private defaultAvatar: string;
  public userPosts: Array<Post>;
  

 
  constructor(private service: NetworkService, private store: Store<State>) {
    this.defaultAvatar = this.service.defaultAvatar; 
    this.isUserPostSubscription = this.store.pipe(select(getIsUserPosts)).subscribe(posts => {
      console.log(posts)
      if (posts) {
        this.userPosts = posts
      }      
    })
  
    this.subscriptionIdUser = this.service.profileSubjObservable().subscribe(data => {
      this.profileСhange = data;
        if (data === 'profile') {
        this.isUserProfileSubscription =  this.store.pipe(select(getIsUserProfile)).subscribe(isUserProfile => this.user$ = isUserProfile);        
      } else {    
        this.isCurrentUserSubscription = this.store.pipe(select(getIsCurrentUserProfile)).subscribe(isCurrentUserProfile => this.user$ = isCurrentUserProfile);
      }
    });      
  }

  ngOnInit() {
    this.profileСhange === 'profile'? this.store.dispatch(new GetUserProfile()): this.store.dispatch(new GetCurrentUserProfile(this.profileСhange));
  }
 
  public addSubscribe() {
    this.service.onAddAsFriend(this.user$.id);
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
