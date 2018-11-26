import { Component, OnInit } from '@angular/core';
import { CARD } from '../../../mock-user';



@Component({
  selector: 'app-card-of-user',
  templateUrl: './card-of-user.component.html',
  styleUrls: ['./card-of-user.component.scss']
})
export class CardOfUserComponent implements OnInit {
  cards = CARD;


  constructor() { }

  ngOnInit() {
  }

}
