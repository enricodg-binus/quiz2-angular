import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {

  baseUrl = 'https://contoh.gamelabnetwork.com/api/';
  token = localStorage.token;
  httpOptions;

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post<any>(this.baseUrl + 'login', { email: username, password: password })
      .map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.data.token) {
          localStorage.setItem('token', user.data.token);
          return user;
        }
      })
      .catch(err => {
        return Observable.throw(err);
      });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('token');
    return this.http.get('http://localhost:8000/api/logout', this.httpOptions);
  }

  validateToken() {
    if (localStorage.token) {
      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': `Bearer ${localStorage.token}`
        })
      };
    }

    // const headers = {
    //   'Authorization': `Bearer ${this.currentUser.token}`
    // }


    return this.http.get<any>(this.baseUrl + 'me', this.httpOptions)
      .map(user => {
        return user;
      });
  }

  register(user: any): Observable<any> {
    return this.http.post(this.baseUrl + 'register', user)
      .map( res => {
        return res;
      })
      .catch( err => {
        return Observable.throw(err);
      });
  }

}
