import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PostWrapperComponent } from './containers/post-wrapper/post-wrapper.component';
import { SearchComponent } from './components/search/search.component';
import { SearchWrapperComponent } from './containers/search-wrapper/search-wrapper.component';
import { CoreModule } from '../core/core.module'


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CoreModule
  ],
  declarations: [
    PostWrapperComponent,
    SearchComponent,
    SearchWrapperComponent
  ],
  exports:[
    PostWrapperComponent,
    SearchComponent,
    SearchWrapperComponent,
    CommonModule
  ]
})
export class NewsModule { }
