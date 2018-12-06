import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store} from '@ngrx/store';
import { Subscription } from "rxjs";
import { NetworkService } from '../../../shared/services/network.service'
import { State} from '../../store';
import { GetUserProfile } from '../../store/actions/user-profile.actions';


@Component({
  selector: 'app-successful',
  templateUrl: './successful.component.html',
  styleUrls: ['./successful.component.scss']
})
export class SuccessfulComponent implements OnInit {

private isUserSubscription: Subscription;

  constructor(private router: Router, private store: Store<State>) {
 this.isUserSubscription = this.store.pipe(select('auth')).subscribe(isLogin => {
      console.log(isLogin)
      // if (isLogin) {
      //   localStorage.setItem('authorization', 'true');
       
      // }      
    })

   }

  ngOnInit() {
  }

  btnSubmit() {
   
    this.store.dispatch(new GetUserProfile());
  }
 



}
