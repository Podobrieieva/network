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

  logout() {
    localStorage.removeItem('permissionToEnter');        
  }
  //     getAll() {
  //       return this.http.get<User[]>(`${this.apiUrl}/users`);
  //   }

  //   getById(id: number) {
  //       return this.http.get(`${this.apiUrl}/users/${id}`);
  //   }



  //   update(user: User) {
  //       return this.http.put(`${this.apiUrl}/users/${user.id}`, user);
  //   }

  //   delete(id: number) {
  //       return this.http.delete(`${this.apiUrl}/users/${id}`);
  //   }
}
