import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Post } from '../../../shared/models/user.model';
import { NetworkService } from '../../../shared/services/network.service';
import { NgForm } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { State, getIsUserProfile } from '../../../core/store';
import { GetUserPostAdd } from '../../../core/store/actions/user-posts.actions';


@Component({
  selector: 'app-add-new-post',
  templateUrl: './add-new-post.component.html',
  styleUrls: ['./add-new-post.component.scss']
})
export class AddNewPostComponent implements OnInit, OnDestroy {

  public isUserProfileSubscription: Subscription;
  public addPostSub: Subscription;
  public selectedFile: File;
  public defaultAvatar:  string;
  public content: string;
  public fileToUpload: File = null;
  public post: Post = {
        id: '',
        text: '',
        author: {
          name: '',
          surname: '',
          fullname: '',
          avatarUrl: '',
          id: '8',
        },
        date: new Date(),
        imageUrl: 'assets/img/images-default.png',
  };

  @ViewChild('f') f: any;

  constructor(private service: NetworkService, private store: Store<State>) {
    this.defaultAvatar = this.service.defaultAvatar;
    const addPostSubscription = this.service.getAddPostObservable().subscribe(data => this.post = data);
    this.isUserProfileSubscription = this.store.pipe(select(getIsUserProfile)).subscribe(isUserProfile => {
      console.log(isUserProfile);
      if (isUserProfile) {
        this.post.author.name = isUserProfile.name;
        this.post.author.surname = isUserProfile.surname;
        this.post.author.avatarUrl = isUserProfile.avatarUrl;
        this.post.author.id = isUserProfile.id;
      }
    });

   
  }

  ngOnInit() {
   

  }

  public handleFileInput (elem) {
    this.selectedFile = elem.target.files[0];
    const reader = new FileReader();
    reader.onload = (elem: any) => {
      this.post.imageUrl = elem.target.result;
    };
    reader.readAsDataURL(this.selectedFile);
  }

  public onSubmitNewPost(f: any) {
    if(this.content && this.content.includes("<")){
      this.post.text = this.content.toString().replace("<", "!")
    } else{
      this.post.text = this.content
    }
    this.store.dispatch(new GetUserPostAdd(this.post, this.selectedFile));
    this.f.resetForm();
    this.post.imageUrl = ' ../../../../../assets/img/images-default.png';
  }


ngOnDestroy() {
    this.isUserProfileSubscription && this.isUserProfileSubscription.unsubscribe();
  }
}
