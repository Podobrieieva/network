import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-item-post',
  templateUrl: './item-post.component.html',
  styleUrls: ['./item-post.component.scss']
})
export class ItemPostComponent implements OnInit {
  public editMode = false;
  public counterLike: any = 0;
  public counterDislike: any  = 0;

  constructor() { }

  ngOnInit() {
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

}
