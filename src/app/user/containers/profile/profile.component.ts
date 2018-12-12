import { Component, OnInit } from '@angular/core';
import { NetworkService } from '../../../shared/services/network.service';
import { Post, UserProfileModel } from '../../../shared/models/user.model';
import { Store, select } from '@ngrx/store';
import { State, getPosts } from '../../../core/store';
import * as UserPostsAction from '../../../core/store/actions/user-posts.actions'
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public selectedFile: File;
  private isUserPostSubscription: Subscription;
  public currentUser = {
    name: 'Sarah',
    avatar: '../../../../assets/img/user-profile/users/user-1.jpg',
    surname: 'Cruiz',
    workPosition: 'Creative Director'
  };
  public userPosts: Array<Post>;
  public user: UserProfileModel;
 
  constructor(private service: NetworkService, private store: Store<State>) {
    this.isUserPostSubscription = this.store.pipe(select(getPosts)).subscribe(posts => {
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
   
  }

  ngOnInit() {
    // this.service.getUserPosts();
    this.store.dispatch({ type: UserPostsAction.UserPostsActionTypes.GET_USER_POSTS });
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
