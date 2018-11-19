import { NgModule } from '@angular/core';
import { RegisterComponent } from './containers/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegisterRoutingModule } from './routing.module';
import { CheckInComponent } from './components/check-in/check-in.component';
import { LogInComponent } from './components/log-in/log-in.component'


@NgModule({
  declarations: [
  	RegisterComponent,
  	CheckInComponent,
    LogInComponent
  ],
  imports: [CommonModule, ReactiveFormsModule, RegisterRoutingModule],


})
export class RegisterModule {}
