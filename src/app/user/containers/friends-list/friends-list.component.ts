import { Component, OnInit, Input} from '@angular/core';

import { UserCard } from '../../../shared/models/user.model'
import { NetworkService } from '../../../shared/services/network.service'


@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.scss']
})
export class FriendsListComponent implements OnInit {
	@Input() usersIdCards: Array<string>;
	public usersSubscribe: Array<object>;
  constructor(private networkService: NetworkService) { 

  }

  ngOnInit() {
  	console.log(this.usersIdCards)

  }


}
