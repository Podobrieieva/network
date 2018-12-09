import { Component, OnInit } from '@angular/core';
import { NetworkService } from '../../../shared/services/network.service';
import { Post, UserProfileModel } from '../../../shared/models/user.model';
import { Router, ActivatedRoute ,} from '@angular/router';
import { Subscription } from 'rxjs'
import { getIsUserProfile, State, getIsCurrentUserProfile} from "../../../core/store";
import { select, Store} from "@ngrx/store";
import { GetCurrentUserProfile } from '../../../core/store/actions/user-profile.actions'


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public selectedFile: File;
  public currentUser = {
    name: 'Sarah',
    avatar: '../../../../assets/img/user-profile/users/user-1.jpg',
    surname: 'Cruiz',
    workPosition: 'Creative Director'
  };
  public userPosts: Array<Post>;
  public user: UserProfileModel;
  public userProfile:UserProfileModel;
  public carrentUser: UserProfileModel;
  public id:string;
  private isUserProfileSubscription: Subscription;
  private subscriptionIdUser: Subscription;
  private isCurrentUserSubscription: Subscription;
  

  constructor(
    private service: NetworkService,
    private activateRoute: ActivatedRoute, 
    private store: Store<State>) {
      // const subscription = this.service.userPostsSubjObservable().subscribe(data => {
      //   this.userPosts= data;
      // });
      // const subscrip = this.service.userProfileSubjObservable().subscribe(data => {
      //   this.user= data;
      // });

           
    this.isUserProfileSubscription = this.store.pipe(select(getIsUserProfile)).subscribe(isUserProfile => {
      console.log(isUserProfile)
      this.userProfile = isUserProfile.data.user;      
    })
       
  }

  ngOnInit() {
    //this.service.getUserPosts();
    // this.service.getUserProfile();
    this.subscriptionIdUser = this.activateRoute.params.subscribe(params=>this.id=params['id']); 
    this.isCurrentUserSubscription = this.store.pipe(select(getIsCurrentUserProfile)).subscribe(isCarrentUser => {
      console.log(isCarrentUser)
      this.user = isCarrentUser.data.user;
    })
      

      if (this.id !== this.userProfile.id) {
    } 
    console.log(this.user)

    
  }
  addSubscribe() {
    this.service.addSubscribe(this.id)
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

}
