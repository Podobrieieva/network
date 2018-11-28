import { Component, OnInit, Input } from '@angular/core';




@Component({
  selector: 'app-card-of-user',
  templateUrl: './card-of-user.component.html',
  styleUrls: ['./card-of-user.component.scss']
})
export class CardOfUserComponent implements OnInit {
  @Input () user =  <any>{};
  @Input() index = 0;

  constructor() { }

  ngOnInit() {
  }

}
