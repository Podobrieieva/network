import { Component, OnInit } from '@angular/core';
import { UserCard } from '../../../shared/models/user.model';
import { NetworkService } from '../../../shared/services/network.service';


@Component({
  selector: 'app-search-wrapper',
  templateUrl: './search-wrapper.component.html',
  styleUrls: ['./search-wrapper.component.scss']
})
export class SearchWrapperComponent implements OnInit {
  public users: Array<UserCard>;
  public searchStr:string = '';

  constructor(private networkService: NetworkService) {
   }
   
   public getUsers(): void{
    this.networkService.getUsers().subscribe(data => this.users = data)
   }

  ngOnInit() {
    this.getUsers()
  }

 

}
