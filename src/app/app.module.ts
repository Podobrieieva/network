import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SearchComponent } from './components/search/search.component';




import { CardOfUserComponent } from './components/card-of-user/card-of-user.component';


import { MainComponent } from './containers/main/main.component';


import { ProfileComponent } from './containers/profile/profile.component';
import { PostWrapperComponent } from './containers/post-wrapper/post-wrapper.component';
import { FriendsListComponent } from './containers/friends-list/friends-list.component';
import { AddNewPostComponent } from './containers/add-new-post/add-new-post.component';


import { NetworkDirective } from './shared/directives/network.directive';
import { CustomPipe } from './shared/pipes/custom.pipe';
import { NetworkService } from './shared/services/network.service';
import { RegisterGuard } from './shared/guards/register.guard';
import { CoreModule } from './containers/core/core.module';
import { SuccessfulComponent } from './components/successful/successful.component';


@NgModule({
  declarations: [
    AppComponent,
    
    SearchComponent,
   
   
  
 
    CardOfUserComponent,
   
    
    MainComponent,
    
    ProfileComponent,
    PostWrapperComponent,
    FriendsListComponent,
    AddNewPostComponent,
    NetworkDirective,
    CustomPipe,
    SuccessfulComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CoreModule

  ],
  providers: [NetworkService, RegisterGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
