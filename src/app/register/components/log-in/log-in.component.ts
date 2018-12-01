import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { select, Store} from "@ngrx/store";
import { RegisterService } from '../../service/register.service'
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

  public loading = false;
  public submitted = false;
  public returnUrl: string;
  public error = '';

  @Output() onClickRecovery = new EventEmitter<boolean>();

  constructor(
    private registerService: RegisterService, 
    private fb: FormBuilder,
    private route: ActivatedRoute, 
    private router: Router, 
    private store: Store<State> ) { 
    this.isLoginSubscription = this.store.pipe(select(getIsLogin)).subscribe(isLogin => {
      console.log(isLogin)
      if (isLogin) {
        localStorage.setItem('authorization', 'true');
        this.router.navigate(['']);
      }      
    })
  }

  ngOnInit() {
  	this.loginForm = this.fb.group(this.createFromGroup().controls);
    // reset login status
    this.registerService.logout();

        // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

  }
  clickedRecovery(recovery:boolean) {
      this.onClickRecovery.emit(recovery);
  }

  submitHandler() {
    this.submitted = true;
    this.loading = true;
    console.log(this.email.value, this.password.value)
    this.registerService.login(this.email.value, this.password.value)
      .pipe(first())
      .subscribe(
      data => {
        this.router.navigate([this.returnUrl]);
      },
      error => {
        this.error = error;
        this.loading = false;
      });
    // this.store.dispatch(new GetLogin({email:this.email.value, password: this.password.value}))  
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
