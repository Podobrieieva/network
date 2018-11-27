import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegisterRoutingModule} from './routing.module';

import { RegisterEffect } from './store/effects/register.effects';
import { LoginEffect } from './store/effects/login.effects';
import { EmailEffect } from './store/effects/password-recovery.effects';
import { CodeEffect } from './store/effects/code-recovery.effects'
import { reducers } from './store';

import { RegisterService } from './service/register.service'

import { PasswordRecoveryComponent } from './components/password-recovery/password-recovery.component';
import { CheckInComponent } from './components/check-in/check-in.component';
import { LogInComponent } from './components/log-in/log-in.component'
import { RegisterComponent } from './containers/register/register.component';





@NgModule({
  declarations: [
  	RegisterComponent,
  	CheckInComponent,
    LogInComponent,
    PasswordRecoveryComponent
  ],
  imports: [
	  CommonModule, 
	  ReactiveFormsModule, 
	  RegisterRoutingModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegisterEffect, LoginEffect, EmailEffect, CodeEffect])
  ],
  providers: [RegisterService],

})
export class RegisterModule {}
