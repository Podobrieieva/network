import { Component, OnInit, Input} from '@angular/core';
import { first,flatMap, map  } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs'
import { select, Store} from '@ngrx/store';

import { State} from '../../../core/store';
import { AddSubscribe, GetSubscribersId, GetSubscribersProfile, DeleteSubscribe } from '../../../core/store/actions/subscribe.actions';
import { GetCurrentUserProfile, GetUserProfile } from '../../../core/store/actions/user-profile.actions';
import { getIsUserProfile, getIsCurrentUserProfile, getIsSubscribersProfile, getIsSubscribersCurrent } from "../../../core/store";
import { UserCard } from '../../../shared/models/user.model';
import { NetworkService } from '../../../shared/services/network.service';



@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.scss']
})
export class FriendsListComponent implements OnInit {

  @Input() userSubscribers$:Array<UserCard>;
  private btnChangeFollow: boolean;
  private btnChangeDelete: boolean;

  private isUsersSubscription: Subscription;
  private profileSubscription: Subscription; 

  constructor(
    private networkService: NetworkService,
    private store: Store<State>) {
    this.profileSubscription = this.networkService.profileSubjObservable().subscribe(data => {
    this.btnChangeDelete = (data==='profile')? true: false;
    this.btnChangeFollow = !this.btnChangeDelete      
    })

  }

  ngOnInit() {
  }

  
  public onViewSubscribeUser(item) {
    this.networkService.profileСhange(item.id);
    this.store.dispatch(new GetCurrentUserProfile(item.id));
    this.store.dispatch(new GetSubscribersId(item.id));    
  }

  public onAddAsFriend(item) {
    this.store.dispatch(new AddSubscribe(item.id));
  }

  public onRemoveFromFriends(item) {
    this.store.dispatch(new DeleteSubscribe(item.id));
  }
}
