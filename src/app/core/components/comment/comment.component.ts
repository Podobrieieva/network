import { Component, OnInit, Input } from '@angular/core';
import { NetworkService } from '../../../shared/services/network.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() item = <any>{};
  @Input() itemIndex = 0;

  public editMode = false;

  public commentForComment: Array<any>;

  constructor(private networkService: NetworkService) { 
    const subscription = this.networkService.commentForComSubjObservable().subscribe(data => {
      this.commentForComment = data;
    });
  }

  ngOnInit() {
    this.networkService.getCommentsForComments();
  }

  public addBtnClickHandler(){
    this.editMode = true;
  }
  public addHandler(e){
    this.editMode = e;
  
  }

}
