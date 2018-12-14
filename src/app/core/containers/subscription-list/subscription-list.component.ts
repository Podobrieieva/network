import { Component, OnInit, Input} from '@angular/core';
import { first,flatMap, map  } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs'
import { select, Store} from '@ngrx/store';

import { State} from '../../../core/store';
import { AddSubscribe, GetSubscribersId, GetSubscriptionsProfile } from '../../../core/store/actions/subscribe.actions';
import { GetCurrentUserProfile, GetUserProfile } from '../../../core/store/actions/user-profile.actions';

import { getIsUserProfile, getIsCurrentUserProfile, getIsSubscriptionsProfile, getIsSubscribersCurrent } from "../../../core/store";

import { UserCard } from '../../../shared/models/user.model';
import { NetworkService } from '../../../shared/services/network.service';

@Component({
  selector: 'app-subscription-list',
  templateUrl: './subscription-list.component.html',
  styleUrls: ['./subscription-list.component.scss']
})
export class SubscriptionListComponent implements OnInit {

private userSubscription:Array<UserCard>;
	private profileСhange: string; 
  private btnChange: boolean;
  private isProfileSubscribtion: Subscription;

  constructor(
    private networkService: NetworkService,
    private store: Store<State>) {
  	this.isProfileSubscribtion =  this.store.pipe(select(getIsSubscriptionsProfile)).subscribe(isUserSubsc => {
      console.log(isUserSubsc)
      this.userSubscription = isUserSubsc
    });

  }

  ngOnInit() {
  	//this.networkService.profileСhange('subscriptions');
  	this.store.dispatch(new GetSubscriptionsProfile());
  }

  
  public onViewSubscribeUser(id) {
    console.log(id , 'wwwww')
    this.networkService.profileСhange(id);
    this.store.dispatch(new GetCurrentUserProfile(id));
    this.store.dispatch(new GetSubscribersId(id));
    
  }
}
