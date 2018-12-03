import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from './register/service/register.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SocialNetwork';

  constructor(
    private router: Router,
    private registerService: RegisterService
  ) {}

  logout() {
    this.registerService.logout();
    this.router.navigate(['/register']);
  }
}




  

   
