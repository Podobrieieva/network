import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { select, Store } from "@ngrx/store";
import { getIsAuthorization, State } from "../../store";
import { Subscription } from "rxjs";
import { GetRegister, GetRegisterSuccess } from "../../store/actions/register.actions";
import { User } from '../../models/profile.model';
import { RegisterService } from '../../service/register.service';
import { AlertService } from '../../service/alert.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.scss']
})
export class CheckInComponent implements OnInit {
  private isRegisteredSubscription: Subscription;
	public registerForm:FormGroup;
  public loading = false;
  public returnUrl: string;


  constructor(
    private registerService: RegisterService,
    private fb: FormBuilder,
    private route: ActivatedRoute,    
    private router: Router, 
    private store: Store<State>,
    private alertService: AlertService
    ) 
  {     
    if (this.registerService.permissionToEnterValue) { 
      this.router.navigate(['']);
    }  
  }

  ngOnInit() {
  	this.registerForm = this.fb.group(this.createFromGroup().controls, {validator: this.passwordConfirming});
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  submitHandler() {
    console.log(this.registerForm.value); 
    this.store.dispatch(new GetRegister(this.registerForm.value));
  }

  get firstname() {
  	return this.registerForm.get('firstname');
  }
  get lastname() {
  	return this.registerForm.get('lastname');
  }
  get email() {
  	return this.registerForm.get('email');
  }
  get password() {
  	return this.registerForm.get('password');
  }
  get confirmPassword() {
  	return this.registerForm.get('confirmPassword');
  }

  private createFromGroup() {
  	return new FormGroup({
  		lastname:new FormControl('', [Validators.required, Validators.maxLength(100), Validators.pattern('^[a-zA-Zа-яА-Я]+$')]),
  		firstname:new FormControl('', [Validators.required, Validators.maxLength(100), Validators.pattern('^[a-zA-Zа-яА-Я]+$')]),
  		email: new FormControl('', [Validators.required, Validators.email]),
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



