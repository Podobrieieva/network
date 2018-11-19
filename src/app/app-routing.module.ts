import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotFoundComponent} from './components/not-found/not-found.component'
import { MainComponent } from './containers/main/main.component';
import { SearchComponent } from './components/search/search.component';
import { PostWrapperComponent } from './containers/post-wrapper/post-wrapper.component';
import { ProfileComponent } from './containers/profile/profile.component';
import { FriendsListComponent } from './containers/friends-list/friends-list.component';
import { RegisterGuard } from './shared/guards/register.guard';
import { SuccessfulComponent } from './components/successful/successful.component';

const routes: Routes = [
  {path: '',  
  redirectTo: 'network', 
  pathMatch: 'full'
  },
  {
    path: 'network', 
    canActivate: [RegisterGuard],
   
    children: [
      {
        path: '',
        component: SuccessfulComponent
      },
      {
        path: 'subscribe', 
        component: FriendsListComponent
      },
      {
        path: 'profile', 
        component: ProfileComponent
      },
      {
        path: 'news', 
        component: PostWrapperComponent
      }, 
      {
        path: 'main', 
        component: MainComponent
      },
      {
        path: 'search', 
        component: SearchComponent
      }
     
    ]
  },  

  {
    path: 'error', 
    component: NotFoundComponent
  },
  {
    path: 'register',
    loadChildren: './containers/register/module#RegisterModule'
  },
  { path: '**', redirectTo: 'error' }
];

@NgModule({
  imports: [RouterModule.forRoot((routes), {enableTracing: true})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
