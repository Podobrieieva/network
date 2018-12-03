import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from "@ngrx/store";

import { StoreRouterConnectingModule } from "@ngrx/router-store";
import { StoreDevtoolsModule}  from "@ngrx/store-devtools";
import { environment } from "../environments/environment";
import { EffectsModule } from "@ngrx/effects";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NetworkDirective } from './shared/directives/network.directive';
import { CustomPipe } from './shared/pipes/custom.pipe';
import { NetworkService } from './shared/services/network.service';
import { RegisterGuard } from './shared/guards/register.guard';
import { UserModule } from './user/user.module';
import { NewsModule } from './news/news.module';







@NgModule({
  declarations: [
    AppComponent,
    NetworkDirective,
    CustomPipe  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    UserModule,
    NewsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({name: 'store devtools', logOnly: environment.production}),
    StoreRouterConnectingModule.forRoot({stateKey: 'router'}),

  ],
  providers: [NetworkService, RegisterGuard],
  bootstrap: [AppComponent],
})
export class AppModule { }
