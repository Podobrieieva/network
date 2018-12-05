import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { select, Store} from "@ngrx/store";
import { Subscription } from "rxjs";
import { getIsUserProfile, State} from "../../store";
import { NetworkService } from '../../../shared/services/network.service'




@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  private isUserProfileSubscription: Subscription;
  public currentUrl: string;
  public fullname: string;

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
          this.fullname = isUserProfile.data.user.fullname
        }      
      })
  }

  ngOnInit() {
 }

public logout() {
  this.networkService.logout();
}


}
