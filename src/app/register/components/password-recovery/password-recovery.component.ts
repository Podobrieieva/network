import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store} from '@ngrx/store';
import { State} from '../../store';
import { RegisterService } from '../../service/register.service';
import { GetEmail } from '../../store/actions/password-recovery.actions';


@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.scss']
})
export class PasswordRecoveryComponent implements OnInit {

  public recoveryForm: FormGroup;
  public changePass = false;

  constructor(
    private registerService: RegisterService,
    private fb: FormBuilder,
    private router: Router,
    private store: Store<State>
    ) {}


  ngOnInit() {
    this.recoveryForm = this.fb.group(this.createFromGroup().controls);
  }

  submitEmail() {
    this.store.dispatch(new GetEmail(this.recoveryForm.value));
  }

  get email() {
    return this.recoveryForm.get('email');
  }

  get password() {
    return this.recoveryForm.get('password');
  }

  private createFromGroup() {
    return new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')])
    });
  }
}
