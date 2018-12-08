import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from "@ngrx/store";
import { getIsNewPassword, State } from '../../store';
import { Subscription } from "rxjs";
import { GetPassword } from "../../store/actions/password-change.actions";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})

export class ChangePasswordComponent implements OnInit {
 
  private isPassChangeSubscription: Subscription;
  public changePasswordForm:FormGroup;
  private changePass:boolean = false;	

  constructor( private fb: FormBuilder, private router: Router, private store: Store<State>) { 
    this.isPassChangeSubscription = this.store.pipe(select(getIsNewPassword)).subscribe(isChange => {
      if(isChange) {

      }
    })
  }

  ngOnInit() {
  	this.changePasswordForm = this.fb.group(this.createFromGroup().controls, {validator: this.passwordConfirming});
  }

  submitHandler() {
    const token = (window.location.search.split('='))[1];
    console.log(token)
    const data = {
      "password": this.password.value,
      "token": token
    }
    console.log(data)    
    this.store.dispatch(new GetPassword(data))
  }

  get currentPassword() {
  	return this.changePasswordForm.get('currentPassword');
  }
  get password() {
  	return this.changePasswordForm.get('password');
  }
  get confirmPassword() {
  	return this.changePasswordForm.get('confirmPassword');
  }

  private createFromGroup() {
  	if(this.changePass) {
  		return new FormGroup({
  		currentPassword: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')]),
  		password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')]),
      confirmPassword: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')])
  	})
  	}
  	return new FormGroup({
  		// currentPassword: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')]),
  		password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')]),
      confirmPassword: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')])
  	})
  }

  private passwordConfirming(c: AbstractControl): { invalid: boolean, matching: any } {
    if (c.get('password').value !== c.get('confirmPassword').value) {
      return {invalid: true, matching: 'Passwords are not matching'};
    }
  }
}