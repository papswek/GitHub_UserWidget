import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  private apiUrl = 'https://api.github.com/users';

  private httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'token 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',
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
