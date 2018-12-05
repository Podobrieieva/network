import { Component, OnInit } from '@angular/core';
import { NetworkService } from '../../../shared/services/network.service';
import { Post, UserProfileModel } from '../../../shared/models/user.model';



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
 
  constructor(private service: NetworkService) {
    const subscription = this.service.userPostsSubjObservable().subscribe(data => {
      this.userPosts= data;
    });
    const subscrip = this.service.userProfileSubjObservable().subscribe(data => {
      this.user= data;
    });
  }

  ngOnInit() {
    this.service.getUserPosts();
    this.service.getUserProfile();
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
