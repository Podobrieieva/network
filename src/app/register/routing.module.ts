import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './containers/register/register.component';
import { ChangePasswordComponent } from '../core/components/change-password/change-password.component';

const routes: Routes = [{
  path: '',
  component: RegisterComponent
},
{
  path: 'auth/reset_password',
  component: ChangePasswordComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule {}
