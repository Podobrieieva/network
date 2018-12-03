import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { PermissionToEnter } from '../models/profile.model';


@Injectable({ providedIn: 'root' })

export class RegisterService {    
 public apiUrl:string = 'https://s-network.herokuapp.com/api/v1';
  constructor(private http: HttpClient) { }

  public get permissionToEnterValue():PermissionToEnter {
    return JSON.parse(localStorage.getItem('permissionToEnter'));
  }

 register(user) {
       const body = {
        "name": user.firstname,
        "surname": user.lastname,
        "email": user.email,
        "password": user.password           
       } 
       console.log(body)
        return this.http.post<any>(`${this.apiUrl}/entries/register`, body);
    }

  login(body) {
    return this.http.post<any>(`${this.apiUrl}/entries/login`, body)
  }

  passwordRecovery(body) {
      return this.http.post<any>(`${this.apiUrl}/entries/forgot_password`, body)
  }

  logout() {
    localStorage.removeItem('permissionToEnter');        
  }
}
