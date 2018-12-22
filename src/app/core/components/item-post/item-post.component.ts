import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Post, UserProfileModel } from '../../../shared/models/user.model';
import { Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { NetworkService } from '../../../shared/services/network.service';
import { State, getIsUserProfile } from '../../store';
import { GetUserProfile } from '../../store/actions/user-profile.actions';


@Component({
  selector: 'app-item-post',
  templateUrl: './item-post.component.html',
  styleUrls: ['./item-post.component.scss']
})
export class ItemPostComponent implements OnInit {

  @Input() item: Post;
  @Input() itemIndex = 0;
  @Output() saveEvt = new EventEmitter();
  @Output() cancelEvt = new EventEmitter();
  @Output() deleteEvt = new EventEmitter();
  public accessToEditPost = false;
  public editMode = false;
  public editModePost = false;
  public counterLike: any = 0;
  public counterDislike: any  = 0;
  private isUserProfileSubscribers: Subscription;
  private editingItem = <Post>{};
  private user$: UserProfileModel;
  private defaultAvatar:  string;
  private defaultImageUrl = '../../../../assets/img/4.jpg';
  private srcError = 'http://res.cloudinary.com/s-cloud/image/upload/v1544363237/posts/mmxjjuv6jch2sbah8nxv.png';
  constructor( private service: NetworkService, private store: Store<State> ) {
    this.isUserProfileSubscribers =  this.store.pipe(select(getIsUserProfile)).subscribe(isUserProfile => {
       this.user$ = isUserProfile;
    });
    this.defaultAvatar = this.service.defaultAvatar;
  }

  ngOnInit() {
    if (this.user$.id === this.item.author.id) {
      this.accessToEditPost = true;
    }

    this.item.imageUrl = this.item.imageUrl !== this.srcError ?
    this.item.imageUrl : this.defaultImageUrl;
  }

  public inputHandler(event) {
    this.editingItem = {...this.item, text: event.target.value};
  }

  public saveBtnClickHandler(item, itemIndex) {
    this.saveEvt.emit({item: this.editingItem.text ? this.editingItem : this.item, itemIndex});
    this.editModePost = false;
  }

  public cancelBtnClickHandler() {
    this.editModePost = false;
    this.cancelEvt.emit();
  }

   public editBtnCkickHandler() {
     this.editModePost = true;
   }

  public addBtnClickHandler() {
    this.editMode = true;
  }

  public addHandler(e) {
    this.editMode = e;
  }

  public like(item) {
    this.service.like(item.id);
  }

  public dislike(item) {
    this.service.dislike(item.id);
  }

  public deleteBtnCkickHandler(id) {
    this.deleteEvt.emit(id);
  }

  onViewSubscribeUser(item) {
    this.service.onViewSubscribeUser(item.author.id);
  }
}
