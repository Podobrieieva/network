import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../../service/register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  public login = true;
  public register = false;
  public recovery = false;

  constructor() {}

  ngOnInit() {}

  changeRegister() {
    this.login = false;
    this.register = true;
    this.recovery = false;
  }

  changeLogin() {
    this.login = true;
    this.register = false;
    this.recovery = false;
  }

  btnClickRecovery(recovery: boolean) {
    this.login = false;
    this.register = false;
    this.recovery = true;
  }
}
