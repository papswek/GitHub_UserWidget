import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  apiUrl = 'https://api.github.com/users';
  searchQuery: string = '';
  constructor(private http: HttpClient) {}

  /* Get all users */

  getUsers() {
    return this.http.get(`${this.apiUrl}?per_page=10`);
  }

  getUser(username: string) {
    return this.http.get(`${this.apiUrl}/${username}`);
  }

  searchUser() {
    return this.http.get(`${this.apiUrl}?q=${this.searchQuery}`);
  }

  // searchQuery: string = '';
  // users: any[] = [];

  // constructor(private http: HttpClient) { }

  // search() {
  //   const apiUrl = `https://api.github.com/search/users?q=${this.searchQuery}`;

  //   this.http.get(apiUrl).subscribe((response: any) => {
  //     this.users = response.items;
  //   });
  // }
}
