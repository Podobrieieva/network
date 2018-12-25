import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { select, Store} from '@ngrx/store';
import { Subscription } from "rxjs";
import { State} from '../../store';
import { GetCurrentUserProfile } from '../../store/actions/user-profile.actions';
import { NetworkService } from '../../../shared/services/network.service';

@Component({
  selector: 'app-card-of-user',
  templateUrl: './card-of-user.component.html',
  styleUrls: ['./card-of-user.component.scss']
})
export class CardOfUserComponent implements OnInit {
  @Input () user =  <any>{};
  @Input() btnChangeDelete: boolean;
  @Input() btnChangeFollow: boolean;
  @Input() index = 0;
  @Output() viewEvt = new EventEmitter();
  @Output() addEvt = new EventEmitter();
  @Output() removeEvt = new EventEmitter();
  
  
  

  constructor(private store: Store<State>, private service: NetworkService) {
 
  }

  ngOnInit() {
  }

  public viewSubscribeUser(item) {
  	console.log(item)
    this.viewEvt.emit(item)
    //this.store.dispatch(new GetCurrentUserProfile(this.id));
    //this.viewEvt(params) 
    //this.router.navigate(["network/profile", {id: params}]);    
  }

  public addAsFriend(item) {
   console.log(item); 
    this.addEvt.emit(item)
  }

  public removeFromFriends(item) {
    console.log(item)
    this.removeEvt.emit(item)
  }

}
