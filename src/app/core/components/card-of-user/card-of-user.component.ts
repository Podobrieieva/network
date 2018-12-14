import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { select, Store} from '@ngrx/store';
import { Subscription } from "rxjs";
import { State} from '../../store';
import { GetCurrentUserProfile } from '../../store/actions/user-profile.actions'
import { Router } from '@angular/router';
import { NetworkService } from '../../../shared/services/network.service'

@Component({
  selector: 'app-card-of-user',
  templateUrl: './card-of-user.component.html',
  styleUrls: ['./card-of-user.component.scss']
})
export class CardOfUserComponent implements OnInit {
  @Input () user =  <any>{};
  @Input() index = 0;
  @Output() viewEvt = new EventEmitter();
  @Output() addEvt = new EventEmitter();
  @Output() removeEvt = new EventEmitter();
  
  private btnChange: boolean;
  profileSubscription: Subscription; 

  constructor(private store: Store<State>, private router: Router, private service: NetworkService) {
     this.profileSubscription = this.service.profileSubjObservable().subscribe(data => {
      console.log(data)
    this.btnChange = (data==='profile')? true: false; 
      
    })
  }

  ngOnInit() {
  }

  public viewSubscribeUser(item) {
  	console.log(item);
    this.viewEvt.emit(item.id)
    //this.store.dispatch(new GetCurrentUserProfile(this.id));
    //this.viewEvt(params) 
    //this.router.navigate(["network/profile", {id: params}]);    
  }

  public addAsFriend(item) {
    this.addEvt.emit(item.id)
  }

  public removeFromFriends(item) {
    this.removeEvt.emit(item.id)
  }

}
