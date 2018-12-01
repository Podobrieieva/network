import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { select, Store } from "@ngrx/store";
import { getIsRegister, State } from "../../store";
import { Subscription } from "rxjs";
import { GetRegister } from "../../store/actions/register.actions";
import { User } from '../../models/profile.model';
import { RegisterService } from '../../service/register.service';
import { AlertService } from '../../service/alert.service';
import { UserService } from '../../service/user.service';


@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.scss']
})
export class CheckInComponent implements OnInit {
  private isRegisteredSubscription: Subscription;
	public registerForm:FormGroup;
  public user: User;
 	public loading = false;
  public submitted = false;
  constructor(
    private registerService: RegisterService,
    private fb: FormBuilder, 
    private router: Router, 
    private store: Store<State>,
    private userService: UserService,
    private alertService: AlertService
    ) { 
    
    if (this.registerService.currentUserValue) { 
      this.router.navigate(['/']);
    }  

    this.isRegisteredSubscription = this.store.pipe(select(getIsRegister)).subscribe(isRegister => {
      if(isRegister) {
        localStorage.setItem('authorization', 'true');
        this.router.navigate(['']);
      }

    })
  }

  ngOnInit() {
  	this.registerForm = this.fb.group(this.createFromGroup().controls, {validator: this.passwordConfirming});
  }

  submitHandler() {
    this.submitted = true;
    this.loading = true;
    console.log(this.registerForm.value)
  
    this.userService.register(this.registerForm.value)
      .pipe(first())
      .subscribe(
        data => {
          console.log(data)
          this.alertService.success('Registration successful', true);
          this.router.navigate(['']);
        },
      error => {
        this.alertService.error(error);
        this.loading = false;
      });
    //this.store.dispatch(new GetRegister(this.user))
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



