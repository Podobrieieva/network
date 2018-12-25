import { Pipe, PipeTransform } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State, getIsSubscriptionsId,  getIsSubscriptionsProfile } from '../../core/store';
import { Subscription } from 'rxjs';
import { UserCard, Post } from '../models/user.model';


@Pipe({
  name: 'filterPost'
})
export class FilterPostPipe implements PipeTransform {

   private userSubscription:Array<UserCard>;
   private userSubscriptionId: string;
   public  isUserSubscriptionsProfileSubscription: Subscription;
    constructor(private store: Store<State>){
      this.isUserSubscriptionsProfileSubscription =  this.store.pipe(select(getIsSubscriptionsProfile)).subscribe(isUserSubscription => {this.userSubscription = isUserSubscription}); 
    }

  transform(userPosts): any {

return this.compare(userPosts, this.userSubscription)

}

public compare (arr1, arr2){
  const finallyArray = [];
  arr1.forEach((e1) => arr2.forEach(e2=> {
    if (e1.author.id === e2.id){
      finallyArray.push(e1)
    }
  }) );
   return finallyArray;

}
 
 
  
}