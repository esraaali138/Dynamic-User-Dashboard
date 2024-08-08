import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  
  getUsers(page: number) {
    return this.http.get<{ data: User[]; total_pages: number }>(
      `https://reqres.in/api/users?page=${page}`
    );
  }
  getUserById(id: number) {
    return this.http.get<{ data: User }>(`https://reqres.in/api/users/${id}`);
  }
}
