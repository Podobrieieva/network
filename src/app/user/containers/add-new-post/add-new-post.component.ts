import { Component, OnInit, ViewChild } from '@angular/core';
import { Post } from '../../../shared/models/user.model';
import { NetworkService } from '../../../shared/services/network.service';
import { NgForm } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Subscription } from "rxjs";
import { State, getIsUserProfile } from '../../../core/store'
import { GetUserPostAdd } from '../../../core/store/actions/user-posts.actions';

@Component({
  selector: 'app-add-new-post',
  templateUrl: './add-new-post.component.html',
  styleUrls: ['./add-new-post.component.scss']
})
export class AddNewPostComponent implements OnInit {
  private isUserProfileSubscription: Subscription;
  private addPostSub: Subscription;
  public post: Post = {
        id: '',
        text: '',
        user: { name: "",
        surname: "",
        photo: '',
        id: '8',

        },
        like: 0,
        dislike: 0,
        date: new Date(),

  }

  @ViewChild('f') f: NgForm;

  constructor(private service: NetworkService, private store: Store<State>) { 
    const addPostSubscription = this.service.getAddPostObservable().subscribe(data => this.post = data);
    this.isUserProfileSubscription = this.store.pipe(select(getIsUserProfile)).subscribe(isUserProfile => {
      console.log(isUserProfile)
      if (isUserProfile) {
        this.post.user.name = isUserProfile.data.user.name;
        this.post.user.surname = isUserProfile.data.user.surname;
        this.post.user.photo = isUserProfile.data.user.avatarUrl;
      }      
    })
  }

  ngOnInit() {
  }

  public onSubmitNewPost(f:NgForm){

    
      // const poster = {...this.post};
      // this.addPostSub = this.service.addPost(poster).subscribe(() => {
      //   form.resetForm();
      // });
      this.post.text = f.value;
    
      this.store.dispatch(new GetUserPostAdd(this.post))
  

    // this.service.addPost(form);
    
    // this.f.resetForm();
   
  }
  
}
