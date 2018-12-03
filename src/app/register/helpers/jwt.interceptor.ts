import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { RegisterService } from '../service/register.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private registerService: RegisterService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let permissionToEnter = this.registerService.permissionToEnterValue;
        
        if (permissionToEnter && permissionToEnter.data.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${permissionToEnter.data.token}`
                }
            });
        }

        return next.handle(request);
    }
}