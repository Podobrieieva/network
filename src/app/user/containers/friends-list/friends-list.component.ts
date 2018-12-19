import { Component, OnInit, Input} from '@angular/core';
import { first,flatMap, map  } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs'
import { select, Store} from '@ngrx/store';

import { State} from '../../../core/store';
import { AddSubscribe, GetSubscriptionsId, GetSubscriptionsProfile, DeleteSubscribe } from '../../../core/store/actions/subscribe.actions';
import { GetCurrentUserProfile, GetUserProfile } from '../../../core/store/actions/user-profile.actions';
import { getIsUserProfile, getIsCurrentUserProfile, getIsSubscriptionsProfile, getIsSubscriptionsId } from "../../../core/store";
import { UserCard } from '../../../shared/models/user.model';
import { NetworkService } from '../../../shared/services/network.service';



@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.scss']
})
export class FriendsListComponent implements OnInit {

  private userSubscribers$;
  private btnChangeFollow: boolean;
  private btnChangeDelete: boolean;
  private profileСhange: string;
  private isUsersSubscription: Subscription;
  private isCurrentUsersSubscription: Subscription;
  private profileSubscription: Subscription; 

  constructor(
    private networkService: NetworkService,
    private store: Store<State>) {
    this.profileSubscription = this.networkService.profileSubjObservable().subscribe(data => {
      this.profileСhange = data
      this.btnChangeDelete = (data==='profile')? true: false;
      this.btnChangeFollow = !this.btnChangeDelete;      
      this.userSubscribers$ = (data === 'profile')? this.store.pipe(select(getIsSubscriptionsProfile)):this.store.pipe(select(getIsSubscriptionsId));
    })
  }

  ngOnInit() {
    (this.profileСhange === 'profile')? this.store.dispatch(new GetSubscriptionsProfile()): this.store.dispatch(new GetSubscriptionsId(this.profileСhange));      
  
  }

  
  public onViewSubscribeUser(item) {
    this.networkService.onViewSubscribeUser(item.id)
  }

  public onAddAsFriend(item) {
    this.networkService.onAddAsFriend(item.id);
  }

  public onRemoveFromFriends(item) {
    this.networkService.onRemoveFromFriends(item.id);
  }
}
