import { Component, OnInit, ViewChild } from '@angular/core';
import { Post } from '../../../shared/models/user.model';
import { NetworkService } from '../../../shared/services/network.service';
import { NgForm } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Subscription } from "rxjs";
import { State, getIsUserProfile } from '../../../core/store'
import { GetUserPostAdd } from '../../../core/store/actions/user-posts.actions';
import { readElementValue } from '@angular/core/src/render3/util';

@Component({
  selector: 'app-add-new-post',
  templateUrl: './add-new-post.component.html',
  styleUrls: ['./add-new-post.component.scss']
})
export class AddNewPostComponent implements OnInit {
  private isUserProfileSubscription: Subscription;
  private addPostSub: Subscription;
  private selectedFile: File;
  private defaultAvatar:  string;

  public fileToUpload: File = null;
  public post: Post = {
        id: '',
        text: '',
        author: { 
          name: "",
          surname: "",
          fullname: "",
          avatarUrl: '',
          id: '8',
        },
        likes: 0,
        dislikes: 0,
        date: new Date(),
        imageUrl:"../../../../../assets/img/images-default.png",

  }

  @ViewChild('f') f: NgForm;

  constructor(private service: NetworkService, private store: Store<State>) {
    this.defaultAvatar = this.service.defaultAvatar;
    const addPostSubscription = this.service.getAddPostObservable().subscribe(data => this.post = data);
    this.isUserProfileSubscription = this.store.pipe(select(getIsUserProfile)).subscribe(isUserProfile => {
      console.log(isUserProfile)
      if (isUserProfile) {
        this.post.author.name = isUserProfile.name;
        this.post.author.surname = isUserProfile.surname;
        this.post.author.avatarUrl = isUserProfile.avatarUrl;
        this.post.author.id = isUserProfile.id;

      }      
    })
  }

  ngOnInit() {
  }
  // public handleFileInput (file: FileList){
  //   this.fileToUpload = file.item(0);
  //   var reader = new FileReader();
  //   reader.onload = (event:any) => {
  //     this.post.imageUrl = event.target.result;
  //   }
  //   reader.readAsDataURL(this.fileToUpload)

  // }
    public handleFileInput (event){
      this.selectedFile = event.target.files[0]
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.post.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.selectedFile )

  }



  public onSubmitNewPost(f:NgForm){

    
      // const poster = {...this.post};
      // this.addPostSub = this.service.addPost(poster).subscribe(() => {
      //   form.resetForm();
      // });
      // this.post.text = f.value;
      // this.service.addPost(this.post, this.fileToUpload).subscribe(
      //   data=> {
      //     console.log("done")
      //     f.resetForm()
      //   }
      // )

    
      this.store.dispatch(new GetUserPostAdd(this.post, this.selectedFile))
  

    // this.service.addPost(form);
    
    // this.f.resetForm();
   
  }

  
}
