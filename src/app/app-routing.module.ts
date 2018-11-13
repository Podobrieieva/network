import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotFoundComponent} from './components/not-found/not-found.component'
import { MainComponent } from './containers/main/main.component';

const routes: Routes = [
  {path: '',  redirectTo: 'register', pathMatch: 'full'},

  {path: 'error',
   component: NotFoundComponent},
  {
    path: 'register',
    loadChildren: './containers/register/module#RegisterModule'
  },
  { path: '**', redirectTo: 'error' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
