import { Component, OnInit } from '@angular/core';
import { NetworkService } from '../../../shared/services/network.service';

@Component({
  selector: 'app-comment-wrapper',
  templateUrl: './comment-wrapper.component.html',
  styleUrls: ['./comment-wrapper.component.scss']
})
export class CommentWrapperComponent implements OnInit {
  public commentWrapper: Array<any>;

  constructor(private networkService: NetworkService) { 
    const subscription = this.networkService.commentSubjObservable().subscribe(data => {
      this.commentWrapper = data;
    });
  }

  ngOnInit() {
    this.networkService.getComments();
  }



}
