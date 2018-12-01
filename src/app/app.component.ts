import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from './register/service/register.service';
import { User } from './register/models/profile.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SocialNetwork';
  currentUser: User;
  constructor(
    private router: Router,
    private registerService: RegisterService
  ) {
    this.registerService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout() {
    this.registerService.logout();
    this.router.navigate(['/register']);
  }
}




  

   
