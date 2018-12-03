import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from "@ngrx/store";
import { JwtInterceptor } from './register/helpers/jwt.interceptor';
import { ErrorInterceptor } from './register/helpers/error.interceptor'
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
import { AppStoreModule } from './core/store/store.module'


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
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    UserModule,
    NewsModule,
    AppStoreModule
   ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    NetworkService, 
    RegisterGuard
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
