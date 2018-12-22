import { Pipe, PipeTransform } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State, getIsSubscriptionsId, getIsSubscribersProfile } from '../../core/store';
import { Subscription } from 'rxjs';
import { UserCard } from '../models/user.model';


@Pipe({
  name: 'filterPost'
})
export class FilterPostPipe implements PipeTransform {
   private userSubscribers:Array<UserCard>;
   public  isUserSubscriptionsProfileSubscription: Subscription;
    constructor(private store: Store<State>){
        this.isUserSubscriptionsProfileSubscription =  this.store.pipe(select(getIsSubscribersProfile)).subscribe(isUserSubscribers => {this.userSubscribers = isUserSubscribers}); 
    }

  transform(userPosts, value): any {
    return userPosts &&
    userPosts.filter(post=> {

        return this.userSubscribers.filter(x => x.id === value) ? post : null 
    })
  }
  
}