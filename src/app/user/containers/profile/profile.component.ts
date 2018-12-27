import { Component, OnInit, OnDestroy } from '@angular/core';
import { NetworkService } from '../../../shared/services/network.service';
import { Post, UserProfileModel,  UserCard } from '../../../shared/models/user.model';
import { Store, select } from '@ngrx/store';
import { State,
         getIsUserPosts,
         getIsUserProfile,
         getIsCurrentUserProfile,
         getIsSubscriptionsProfile,
         getIsSubscriptionsId } from '../../../core/store';
import { GetUserPostDelete, GetUserPosts } from '../../../core/store/actions/user-posts.actions';
import { BehaviorSubject, Observable, of, Subject, Subscription } from 'rxjs';
import { GetUserProfile, GetCurrentUserProfile } from '../../../core/store/actions/user-profile.actions';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy  {
  
  public selectedFile: File;
  public userPosts: Array<Post>;
  public accessToAddPost = false;
  private isUserPostSubscription: Subscription;
  private subscriptionIdUser: Subscription;
  private profileСhange: string;
  private isOwner: boolean;
  private isUserProfileSubscription: Subscription;
  private isCurrentUserSubscription: Subscription;
  private user$: UserProfileModel;
  private defaultAvatar: string;

  constructor(private service: NetworkService, private store: Store<State>) {
    this.defaultAvatar = this.service.defaultAvatar;
    this.isUserPostSubscription = this.store.pipe(select(getIsUserPosts)).subscribe(posts => this.userPosts = posts);
    this.subscriptionIdUser = this.service.profileSubjObservable().subscribe(data => {
      this.profileСhange = data;
      this.isOwner = (data === 'profile');
      if (this.isOwner) {
        this.isUserProfileSubscription =  this.store.pipe(select(getIsUserProfile)).subscribe(isUserProfile => this.user$ = isUserProfile);
        this.accessToAddPost = true;
        this.store.dispatch(new GetUserPosts(this.user$.id));
      } else {
        this.isCurrentUserSubscription = this.store.pipe(select(getIsCurrentUserProfile)).subscribe(isCurrentUserProfile => {
          return this.user$ = isCurrentUserProfile;
        });
        this.accessToAddPost = false;
      }
    });
  }

  ngOnInit() {
    this.isOwner ?
    this.store.dispatch(new GetUserProfile()) : this.store.dispatch(new GetCurrentUserProfile(this.profileСhange));
  }

  
  public addSubscribe() {
    this.service.onAddAsFriend(this.user$.id);
  }
  
  public onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    this.service.uploadPhotoUser(this.selectedFile);
  }


  public deleteHandler(id) {
    this.store.dispatch(new GetUserPostDelete(id));
  }

  ngOnDestroy() {
    this.subscriptionIdUser.unsubscribe();
    this.isUserProfileSubscription && this.isUserProfileSubscription.unsubscribe();
    this.isCurrentUserSubscription && this.isCurrentUserSubscription.unsubscribe();
    this.isUserPostSubscription && this.isUserPostSubscription.unsubscribe();
  }
}
