import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-successful',
  templateUrl: './successful.component.html',
  styleUrls: ['./successful.component.scss']
})
export class SuccessfulComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  btnSubmit() {
   this.router.navigate(['/network/profile']); 
  }
}
