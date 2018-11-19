import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
	login: boolean=true;
	register: boolean=false;
		
  constructor() { }

  ngOnInit() {
  }
  changeRegister() {
  	this.login=false;
  	this.register=true; 
  }
  changeLogin() {
  	
  	this.register=false; 	
  	this.login=true;
  }

}
