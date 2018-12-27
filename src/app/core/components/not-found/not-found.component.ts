import { Component, OnInit } from '@angular/core';
import { NetworkService } from '../../../shared/services/network.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor(private networkService: NetworkService) { }

  ngOnInit() {
  }
  public goToProfilePage() {
    this.networkService.profileСhange('profile');
  }
}
