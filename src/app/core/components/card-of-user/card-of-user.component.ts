import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { select, Store} from '@ngrx/store';
import { Subscription } from 'rxjs';
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
  public defaultAvatar: string;

  constructor(private store: Store<State>, private service: NetworkService) {
    this.defaultAvatar = this.service.defaultAvatar;
  }

  ngOnInit() {
  }

  public viewSubscribeUser(item) {
    this.viewEvt.emit(item);
  }

  public addAsFriend(item) {
    this.addEvt.emit(item);
  }

  public removeFromFriends(item) {
    this.removeEvt.emit(item);
  }
}
