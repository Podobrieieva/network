import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { select, Store} from '@ngrx/store';
import { RegisterService } from '../../service/register.service';
import { getIsAuthorization, State} from '../../store';
import { Subscription } from 'rxjs';
import { GetLogin } from '../../store/actions/register.actions';
import { GetUserProfile } from '../../../core/store/actions/user-profile.actions';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  public loginForm: FormGroup;
  public loading = false;
  public error = '';

  @Output() btnClickRecovery = new EventEmitter<boolean>();

  constructor(
    private registerService: RegisterService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<State> ) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group(this.createFromGroup().controls);
    this.registerService.logout();
  }

  clickedRecovery(recovery: boolean) {
    this.btnClickRecovery.emit(recovery);
  }

  submitHandler() {
    this.store.dispatch(new GetLogin(this.loginForm.value));
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
