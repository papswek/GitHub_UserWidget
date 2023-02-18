import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  private apiUrl = 'https://api.github.com/users';

  constructor(private http: HttpClient) {}

  /* Get all users */
  getUsers() {
    return this.http.get(`${this.apiUrl}`);
  }
  getUser(username: string) {
    return this.http.get(`${this.apiUrl}/${username}`);
  }
}
