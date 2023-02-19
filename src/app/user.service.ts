import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  private apiUrl = 'https://api.github.com/users';

  private httpOptions = {
    headers: new HttpHeaders({
      Authorization: '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',
    }),
  };

  constructor(private http: HttpClient) {}

  /* Get all users */
  getUsers() {
    return this.http.get(`${this.apiUrl}`, this.httpOptions);
  }

  getUser(username: string) {
    return this.http.get(`${this.apiUrl}/${username}`, this.httpOptions);
  }
}
