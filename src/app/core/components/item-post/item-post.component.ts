import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Post } from '../../../shared/models/user.model';
import { NetworkService } from '../../../shared/services/network.service';


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
  public editMode = false;
  public editModePost = false;
  public counterLike: any = 0;
  public counterDislike: any  = 0;
  private defaultAvatar:  string;

  
  constructor(private networkService:NetworkService) {
     this.defaultAvatar = this.networkService.defaultAvatar; 
  }

  private editingItem = <Post>{};

  ngOnInit() {
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


   public editBtnCkickHandler(){
     this.editModePost = true;
   }

  public addBtnClickHandler(){
    this.editMode = true;
  }
  public addHandler(e){
    this.editMode = e;
  
  }
  public like(){
    this.counterLike +=1
  
  }
  public dislike(){
    this.counterDislike ++
  }
  public deleteBtnCkickHandler(item){
    this.deleteEvt.emit(item.id);
  }

}
