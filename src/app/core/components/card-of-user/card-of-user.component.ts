import { Component, OnInit, Input } from '@angular/core';
import { select, Store} from '@ngrx/store';
import { Subscription } from "rxjs";
import { State} from '../../store';
import { GetCurrentUserProfile } from '../../store/actions/user-profile.actions'
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-of-user',
  templateUrl: './card-of-user.component.html',
  styleUrls: ['./card-of-user.component.scss']
})
export class CardOfUserComponent implements OnInit {
  @Input () user =  <any>{};
  @Input() index = 0;
  
  private id:string = '5c03f167ca808300044080ba';

  constructor(private store: Store<State>, private router: Router) { }

  ngOnInit() {
  }

  public viewCurrentUser() {

  	console.log(this.id);
    this.store.dispatch(new GetCurrentUserProfile(this.id));
    //this.router.navigate(["network/profile", {id: this.id}]);
    
  }
}
