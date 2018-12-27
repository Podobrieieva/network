import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store} from "@ngrx/store";
import { getIsLogin, State} from "../../store";
import { Subscription } from "rxjs";
import { GetLogin } from "../../store/actions/login.actions";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  private isLoginSubscription: Subscription;
	public loginForm: FormGroup;
  @Output() onClickRecovery = new EventEmitter<boolean>();

  constructor( 
    private fb: FormBuilder, 
    private router: Router, 
    private store: Store<State> ) { 
    this.isLoginSubscription = this.store.pipe(select(getIsLogin)).subscribe(isLogin => {
      if (isLogin) {
        localStorage.setItem('loggedIn', 'true');
        this.router.navigate(['']);
      }      
    })
  }

  ngOnInit() {
  	this.loginForm = this.fb.group(this.createFromGroup().controls);
  }
  clickedRecovery(recovery:boolean) {
      this.onClickRecovery.emit(recovery);
  }

  submitHandler() {
    this.store.dispatch(new GetLogin())  
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  private createFromGroup() {
    return new FormGroup({      
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')])
    });
  }

}
