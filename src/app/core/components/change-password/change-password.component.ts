import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from "@ngrx/store";
import { getIsPassword, State } from "../../store";
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
  private changePass:boolean = true;	

  constructor( private fb: FormBuilder, private router: Router, private store: Store<State>) { 
    this.isPassChangeSubscription = this.store.pipe(select(getIsPassword)).subscribe(isChange => {
    	console.log('11111111111111111')
    	console.log(isChange)
      if(isChange && !this.changePass) {
        localStorage.setItem('isChange', 'true');
        this.router.navigate(['']);
      }
    })
  }

  ngOnInit() {
  	this.changePasswordForm = this.fb.group(this.createFromGroup().controls, {validator: this.passwordConfirming});
  }

  submitHandler() {

		this.store.dispatch(new GetPassword())

    // 
    // localStorage.setItem('isRegistered', 'true');   
    // this.router.navigate(['']);
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