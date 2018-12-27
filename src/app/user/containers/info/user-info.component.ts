import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  @Input() data: any;
  @Input() owner: boolean;

  constructor() { 
  }

  ngOnInit() {
    // this.data.birthDate = new Date(this.data.birbirthDate).toLocaleString();
    // console.log(this.data.birthDate);

  }

  public testFunction () {
    console.log(this.data);
  }
}
