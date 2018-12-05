import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegisterRoutingModule} from './routing.module';
import { CoreModule } from '../core/core.module';
import { HttpClientModule } from '@angular/common/http';

import { RegisterEffect } from './store/effects/register.effects';
import { LoginEffect } from './store/effects/login.effects';
import { EmailEffect } from './store/effects/password-recovery.effects';
import { reducers } from './store';

import { RegisterService } from './service/register.service'
import { PasswordRecoveryComponent } from './components/password-recovery/password-recovery.component';
import { CheckInComponent } from './components/check-in/check-in.component';
import { LogInComponent } from './components/log-in/log-in.component'
import { RegisterComponent } from './containers/register/register.component';
import { ChangePasswordComponent } from '../core/components/change-password/change-password.component'


import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  declarations: [
  	RegisterComponent,
  	CheckInComponent,
    LogInComponent,
    PasswordRecoveryComponent,
    AlertComponent 
  ],
  imports: [
	  CommonModule, 
	  ReactiveFormsModule, 
	  RegisterRoutingModule,
    CoreModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegisterEffect, LoginEffect, EmailEffect])
  ],
  providers: [
    RegisterService
  ]
})
export class RegisterModule {}
