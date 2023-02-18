import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  private apiUrl = 'https://api.github.com/users';
  private apiUsersUrl = 'https://api.github.com';
  searchQuery: string = '';
  constructor(private http: HttpClient) {}

  /* Get all users */

  getUsers() {
    return this.http.get(`${this.apiUrl}?per_page=10`);
  }
  getUser(username: string) {
    return this.http.get(`${this.apiUrl}/${username}`);
  }

  searchUser(query: string): Observable<any> {
    return this.http.get<any>(`${this.apiUsersUrl}/search/users?q=${query}`);
  }

  // searchUser(query: string): Observable<any> {
  //   return this.http.get<any>(`${this.apiUrl}/search/users?q=${query}`);
  // }
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
