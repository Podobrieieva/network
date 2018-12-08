import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { select, Store} from "@ngrx/store";
import { RegisterService } from '../../service/register.service'
import { getIsAuthorization, State} from "../../store";
import { Subscription } from "rxjs";
import { GetLogin } from "../../store/actions/register.actions";
import { GetUserProfile } from '../../../core/store/actions/user-profile.actions';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  //private isLoginSubscription: Subscription;
	public loginForm: FormGroup;
  public loading = false;
  public returnUrl: string;
  public error = '';

  @Output() onClickRecovery = new EventEmitter<boolean>();

  constructor(
    private registerService: RegisterService, 
    private fb: FormBuilder,
    private route: ActivatedRoute, 
    private router: Router, 
    private store: Store<State> ) { 
    // this.isLoginSubscription = this.store.pipe(select(getIsAuthorization)).subscribe(isLogin => {
    //   console.log(isLogin)
    //   if (isLogin) {
    //     localStorage.setItem('authorization', 'true');
    //     this.router.navigate(['']);
    //   }      
    // })
  }

  ngOnInit() {
  	this.loginForm = this.fb.group(this.createFromGroup().controls);
    this.registerService.logout(); 
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  clickedRecovery(recovery:boolean) {
    this.onClickRecovery.emit(recovery);
  }

  submitHandler() {
    console.log(this.email.value, this.password.value)
    this.store.dispatch(new GetLogin({"email":this.email.value, "password": this.password.value}))  
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
