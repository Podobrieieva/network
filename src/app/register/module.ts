import { NgModule } from '@angular/core';
import { RegisterComponent } from './containers/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegisterRoutingModule} from './routing.module';

import { CheckInComponent } from './components/check-in/check-in.component';
import { LogInComponent } from './components/log-in/log-in.component'
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RegisterEffect } from './store/effects/register.effects';
import { LoginEffect } from './store/effects/login.effects';
import { reducers } from './store';


@NgModule({
  declarations: [
  	RegisterComponent,
  	CheckInComponent,
    LogInComponent
  ],
  imports: [
	  CommonModule, 
	  ReactiveFormsModule, 
	  RegisterRoutingModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegisterEffect, LoginEffect])
  ],
  providers: [],

})
export class RegisterModule {}
