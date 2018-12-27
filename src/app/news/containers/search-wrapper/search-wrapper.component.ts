import { Component, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { map, switchMap, distinctUntilChanged} from 'rxjs/operators';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators/debounceTime';
import { UserCard } from '../../../shared/models/user.model';
import { NetworkService } from '../../../shared/services/network.service';
import { State, getIsUsers} from '../../../core/store';
import { GetUsers, GetCurrentUserProfile } from '../../../core/store/actions/user-profile.actions';
import { GetSubscribersId, AddSubscribe } from '../../../core/store/actions/subscribe.actions';

@Component({
  selector: 'app-search-wrapper',
  templateUrl: './search-wrapper.component.html',
  styleUrls: ['./search-wrapper.component.scss']
})
export class SearchWrapperComponent implements OnInit, OnDestroy {

  public users: Array<UserCard>;
  public searchStr$ = new Subject<string>();
  private isUsersSubscription: Subscription;
  private btnChangeFollow = true;
  private btnChangeDelete = false;

  constructor(private networkService: NetworkService, private router: Router, private store: Store<State>) {
    this.isUsersSubscription =  this.store.pipe(select(getIsUsers)).subscribe(data => this.users = data);
  }

  ngOnInit() {
    this.store.dispatch(new GetUsers('a'));
    this.searchStr$.pipe(debounceTime(200), distinctUntilChanged()).subscribe(str => this.store.dispatch(new GetUsers(str)));
  }

  public onViewSubscribeUser(item) {
    this.networkService.onViewSubscribeUser(item._id);
  }

  public onAddAsFriend(item) {
    this.networkService.onAddAsFriend(item._id);
  }

  ngOnDestroy() {
    this.isUsersSubscription && this.isUsersSubscription.unsubscribe();
  }
}
