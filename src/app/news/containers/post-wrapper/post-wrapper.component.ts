import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as NewsActions from '../../../core/store/actions/news.actions';
import { State, getPosts } from '../../../core/store';
import { Observable } from 'rxjs';
import { PostModel } from '../../../shared/models/user.model';

@Component({
  selector: 'app-post-wrapper',
  templateUrl: './post-wrapper.component.html',
  styleUrls: ['./post-wrapper.component.scss']
})
export class PostWrapperComponent implements OnInit {
  postList$: Observable <PostModel[]>

  constructor(private store:Store<State>) { }

  ngOnInit() {
    this.store.dispatch({type: NewsActions.NewsActionTypes.GET_POSTS})
    this.postList$ = this.store.pipe(select(getPosts));
  }

}
