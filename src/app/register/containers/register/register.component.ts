import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../../service/register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
	login: boolean=true;
	register: boolean=false;
  alert: boolean=false;
  recovery: boolean=false;

  	
  constructor() { }

  ngOnInit() {

  }

  changeRegister() {
  	this.login=false;
    this.register=true;
    this.alert=false;
    this.recovery=false;
  }
  changeLogin() {
    this.login=true;
    this.register=false;
    this.alert=false;
    this.recovery=false;  	
  }

  onClickRecovery(recovery:boolean) {
    this.login=false;
    this.register=false;
    this.alert=false;
    this.recovery = true;    
  }


  toggleAlert() {
    this.alert = false;
  }

}
