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
 onActivate(event) {
  window.scroll(0,0);
    //or document.body.scrollTop = 0;
    //or document.querySelector('body').scrollTo(0,0)


   
        // let scrollToTop = window.setInterval(() => {
        //     let pos = window.pageYOffset;
        //     if (pos > 0) {
        //         window.scrollTo(0, pos - 20); // how far to scroll on each step
        //     } else {
        //         window.clearInterval(scrollToTop);
        //     }
        // }, 16);
    }

  logout() {
    this.registerService.logout();    
  }
}




  

   
