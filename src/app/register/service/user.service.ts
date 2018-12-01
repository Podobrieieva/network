import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/profile.model';

@Injectable({ providedIn: 'root' })
export class UserService {
    public apiUrl:string = 'https://s-network.herokuapp.com/api/v1';
    constructor(private http: HttpClient) { }

    register(user) {
       const body = {
        firstName: user.firstname,
        lastName: user.lastname,
        email: user.email,
        password: user.password
           
       } 
        return this.http.post(`${this.apiUrl}/entries/register`, JSON.stringify(body));
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