import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from "@ngrx/store";
import { getIsNewPassword, State } from '../../store';
import { Subscription } from "rxjs";
import { GetPassword } from "../../store/actions/password-change.actions";
import { getIsLogin } from '../../../register/store/index'

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
        // this.store.select('post').subscribe(d => console.log(d))
        localStorage.setItem('authorization', 'true');
        this.router.navigate(['']);
      }
    })
  }

  ngOnInit() {
  	this.changePasswordForm = this.fb.group(this.createFromGroup().controls, {validator: this.passwordConfirming});
  }

  submitHandler() {
    console.log('11111111111111111')
		this.store.dispatch(new GetPassword())
     console.log('1111111222222222222222222')
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