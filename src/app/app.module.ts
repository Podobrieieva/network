import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtInterceptor } from './register/helpers/jwt.interceptor';
import { ErrorInterceptor } from './register/helpers/error.interceptor'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NetworkDirective } from './shared/directives/network.directive';
import { CustomPipe } from './shared/pipes/custom.pipe';
import { NetworkService } from './shared/services/network.service';
import { RegisterGuard } from './shared/guards/register.guard';
import { UserModule } from './user/user.module';
import { NewsModule } from './news/news.module';
import { AppStoreModule } from './core/store/store.module'
import { AlertComponent } from './register/components/alert/alert.component'




@NgModule({
  declarations: [
    AppComponent,
    NetworkDirective,
    CustomPipe,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    NgHttpLoaderModule,
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
