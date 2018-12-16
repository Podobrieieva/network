import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { RegisterService } from '../service/register.service';
import { AlertService } from '../service/alert.service'

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private registerService: RegisterService, private alertService: AlertService) { }

      intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                //logout if 401 response returned from api
                // this.registerService.logout();
                // location.reload(true);
                //this.alertService.error('The email or password entered are not the same as those stored in our database. Check that the entered data is correct and try again.', true);

            }  

            const error = err.error.message || err.statusText;
            return throwError(error);
        }))
    }
}