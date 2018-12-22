import { Component, OnInit, Input } from '@angular/core';
import { first, flatMap, map } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { AddSubscribe, GetSubscribersId, GetSubscribersProfile } from '../../../core/store/actions/subscribe.actions';
import { State, getIsUserProfile, getIsCurrentUserProfile, getIsSubscribersProfile, getIsSubscribersCurrent } from '../../../core/store';
import { UserCard } from '../../../shared/models/user.model';
import { NetworkService } from '../../../shared/services/network.service';

@Component({
  selector: 'app-subscription-list',
  templateUrl: './subscription-list.component.html',
  styleUrls: ['./subscription-list.component.scss']
})
export class SubscriptionListComponent implements OnInit {

  private userSubscribers: Array<UserCard>;
  private profileСhange: string;
  private btnChangeFollow: boolean;
  private btnChangeDelete: boolean;
  private isProfileSubscribtion: Subscription;
  private isUserProfileSubscribers: Subscription;
  private isCurrentUserSubscribers: Subscription;

  constructor(
    private networkService: NetworkService,
    private store: Store<State>) {
    this.isProfileSubscribtion = this.networkService.profileSubjObservable().subscribe(data => {
      this.profileСhange = data;
      if (data === 'profile') {
        this.isUserProfileSubscribers =  this.store.pipe(select(getIsSubscribersProfile)).subscribe(isUserSubscribers => {
          this.userSubscribers = isUserSubscribers;
        });
        this.btnChangeFollow = false;
        this.btnChangeDelete = false;
      } else {
        this.isCurrentUserSubscribers = this.store.pipe(select(getIsSubscribersCurrent)).subscribe(isUserSubscribers => {
          this.userSubscribers = isUserSubscribers;
        });
        this.btnChangeFollow = true;
        this.btnChangeDelete = false;
      }
    });
  }

  ngOnInit() {
    this.profileСhange === 'profile' ? this.store.dispatch(new GetSubscribersProfile()) :
    this.store.dispatch(new GetSubscribersId(this.profileСhange));
  }

  public onViewSubscribeUser(item) {
    this.networkService.onViewSubscribeUser(item.id);
  }
}
