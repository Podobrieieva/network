import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { PermissionToEnter } from '../models/profile.model';


@Injectable({ providedIn: 'root' })

export class RegisterService {    

  public permissionSubject: BehaviorSubject<PermissionToEnter>;
  public apiUrl:string = 'https://s-network.herokuapp.com/api/v1';

  constructor(private http: HttpClient) {
    this.permissionSubject = new BehaviorSubject<PermissionToEnter>(JSON.parse(localStorage.getItem('permissionToEnter')));
    this.permissionSubject.asObservable();
  }

  public get permissionToEnterValue():PermissionToEnter {
    return JSON.parse(localStorage.getItem('permissionToEnter'));
  }

  public register(user) {
    const body = {
      "name": user.firstname,
      "surname": user.lastname,
      "email": user.email,
      "password": user.password           
    } 
      return this.http.post<any>(`${this.apiUrl}/entries/register`, body);
  }

  login(body) {
    return this.http.post<any>(`${this.apiUrl}/entries/login`, body)
  }

  passwordRecovery(body) {
      return this.http.post<any>(`${this.apiUrl}/entries/forgot_password`, body)
  }

  public logout() {
    localStorage.removeItem('permissionToEnter');
    this.permissionSubject.next(null);        
  }
  
 
}
