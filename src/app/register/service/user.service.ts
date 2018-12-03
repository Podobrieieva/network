import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/profile.model';

@Injectable({ providedIn: 'root' })
export class UserService {
    public apiUrl:string = 'https://s-network.herokuapp.com/api/v1';
    constructor(private http: HttpClient) { }

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

    login(email: string, password: string) {
        return this.http.post<any>(`${this.apiUrl}/entries/login`, { email, password })
    }




    getAll() {
        return this.http.get<User[]>(`${this.apiUrl}/users`);
    }

    getById(id: number) {
        return this.http.get(`${this.apiUrl}/users/${id}`);
    }



    update(user: User) {
        return this.http.put(`${this.apiUrl}/users/${user.id}`, user);
    }

    delete(id: number) {
        return this.http.delete(`${this.apiUrl}/users/${id}`);
    }
}