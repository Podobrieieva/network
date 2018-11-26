import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotFoundComponent} from './core/components/not-found/not-found.component'
import { MainComponent } from './core/containers/main/main.component';
import { SearchComponent } from './news/components/search/search.component';
import { PostWrapperComponent } from './news/containers/post-wrapper/post-wrapper.component';
import { ProfileComponent } from './user/containers/profile/profile.component';
import { FriendsListComponent } from './user/containers/friends-list/friends-list.component';
import { RegisterGuard } from './shared/guards/register.guard';
import { SuccessfulComponent } from './core/components/successful/successful.component';
import { SearchWrapperComponent } from './news/containers/search-wrapper/search-wrapper.component';

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
      // {
      //   path: 'main', 
      //   component: MainComponent
      // },
      {
        path: 'search', 
        component: SearchWrapperComponent
      }
     
    ]
  },  
   {
        path: 'main', 
        canActivate: [RegisterGuard],
        component: MainComponent
      },

  {
    path: 'error', 
    component: NotFoundComponent
  },
  {
    path: 'register',
    loadChildren: './register/module#RegisterModule'
  },
  { path: '**', redirectTo: 'error' }
];

@NgModule({
  imports: [RouterModule.forRoot((routes), {enableTracing: true})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
