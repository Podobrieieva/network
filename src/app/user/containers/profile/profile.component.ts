import { Component, OnInit } from '@angular/core';
import { NetworkService } from '../../../shared/services/network.service';
import { Post, UserProfileModel } from '../../../shared/models/user.model';
import { Store, select } from '@ngrx/store';
import { State, getPosts, getIsUserPosts, getIsUserProfile } from '../../../core/store';
import {GetUserPosts } from '../../../core/store/actions/user-posts.actions'
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public selectedFile: File;
  private isUserPostSubscription: Subscription;
  private isUserProfileSubscription: Subscription;
  public currentUser = {
    name: 'Sarah',
    avatar: '../../../../assets/img/user-profile/users/user-1.jpg',
    surname: 'Cruiz',
    workPosition: 'Creative Director'
  };
  public userPosts: Array<Post>;
  public user: UserProfileModel;
  private userId: string;
 
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
      this.user= data;
    });
    this.isUserProfileSubscription = this.store.pipe(select(getIsUserProfile)).subscribe(isUserProfile => {
      console.log(isUserProfile)
      if (isUserProfile) {
        this.userId = isUserProfile.data.user.id
      }      
    })
   
  }

  ngOnInit() {
    // this.service.getUserPosts();
    this.store.dispatch(new GetUserPosts (this.userId));
    this.service.getUserProfile();
  }



  public onFileChanged(event) {
    this.selectedFile = event.target.files[0]
   
    this.service.uploadPhotoUser(this.selectedFile)
  } 
 
  public saveHandler({item, itemIndex}){
      this.service.setItemByIndex(item, itemIndex);
  }

  // public cancelHandler(){
  //   this.service.getUserPosts()
  // }
  public deleteHandler(id){

  }

}
