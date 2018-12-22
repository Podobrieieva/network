import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { PermissionToEnter } from '../models/profile.model';


@Injectable({ providedIn: 'root' })

export class RegisterService {

  public permissionSubject: BehaviorSubject<PermissionToEnter>;
  public apiUrl = 'https://s-network.herokuapp.com/api/v1';

  constructor(private http: HttpClient, private router: Router) {
    this.permissionSubject = new BehaviorSubject<PermissionToEnter>(JSON.parse(sessionStorage.getItem('permissionToEnter')));
    this.permissionSubject.asObservable();
  }

  public get permissionToEnterValue(): PermissionToEnter {
    return JSON.parse(sessionStorage.getItem('permissionToEnter'));
  }

  public register(user) {
      return this.http.post<any>(`${this.apiUrl}/entries/register`, user);
  }

  login(body) {
    return this.http.post<any>(`${this.apiUrl}/entries/login`, body);
  }

  passwordRecovery(body) {
      return this.http.post<any>(`${this.apiUrl}/entries/forgot_password`, body);
  }

  public logout() {
    sessionStorage.clear();
    this.permissionSubject.next(null);
    this.router.navigate(['/register']);
  }
}
