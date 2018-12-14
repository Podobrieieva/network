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
  private btnChange: boolean;

  constructor(
    private networkService: NetworkService,
    private store: Store<State>) {     
  }

  ngOnInit() {
  }

  
  public onViewSubscribeUser(id) {
    console.log(id , 'wwwww')
    this.networkService.profileСhange(id);
    this.store.dispatch(new GetCurrentUserProfile(id));
    this.store.dispatch(new GetSubscribersId(id));
    
  }

  public onAddAsFriend(id) {
    this.store.dispatch(new AddSubscribe(id));
  }

  public onRemoveFromFriends(id) {
    this.store.dispatch(new DeleteSubscribe(id));
  }
}
