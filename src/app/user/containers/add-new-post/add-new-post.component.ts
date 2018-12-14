import { Component, OnInit, ViewChild } from '@angular/core';
import { Post } from '../../../shared/models/user.model';
import { NetworkService } from '../../../shared/services/network.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-new-post',
  templateUrl: './add-new-post.component.html',
  styleUrls: ['./add-new-post.component.scss']
})
export class AddNewPostComponent implements OnInit {
  public post: Post = {
        id: '',
        text: '',
        user: { name: "Jerry",
        surname: "Milly",
        avatarUrl: '../../../../assets/img/user-profile/users/user-1.jpg',
        id: '8',

        },
        like: 0,
        dislike: 0

  }

  @ViewChild('f') f: NgForm;

  constructor(private service: NetworkService) { 
    const addPostSubscription = this.service.getAddPostObservable().subscribe(data => this.post = data);
  }

  ngOnInit() {
  }

  public onSubmitNewPost(form: NgForm){
  

    this.service.addPost(form);
    
    // this.f.resetForm();
   
  }
  
}
