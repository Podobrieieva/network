import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { select, Store} from "@ngrx/store";
import { Subscription } from "rxjs";
import { getIsUserProfile, State} from "../../store";
import { NetworkService } from '../../../shared/services/network.service'
import { GetCurrentUserProfile } from '../../store/actions/user-profile.actions'
import { UserProfileModel } from '../../../shared/models/user.model'


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  private isUserProfileSubscription: Subscription;
  public currentUrl: string;
  public userProfile: UserProfileModel;

  public currentUser = {
    name: 'Sarah',
    avatar: '../../../../assets/img/user-profile/users/user-1.jpg',
    surname: 'Cruiz',
    workPosition: 'Creative Director',
    email: 'sarahCruiz@gmail.com'
  };
  constructor(
    private router: Router, 
    private networkService:NetworkService, 
    private store: Store<State>) {
      router.events.subscribe((_: NavigationEnd) => this.currentUrl = _.url);
      this.isUserProfileSubscription = this.store.pipe(select(getIsUserProfile)).subscribe(isUserProfile => {
        console.log(isUserProfile)
        if (isUserProfile) {
          this.userProfile = isUserProfile.data.user
        }      
      })
  }

  ngOnInit() {
 }
goToProfilePage() {
  this.store.dispatch(new GetCurrentUserProfile(this.userProfile.id));
}

public logout() {
  this.networkService.logout();
}


}
