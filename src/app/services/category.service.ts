import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CategoryService {

  baseUrl = 'https://contoh.gamelabnetwork.com/api/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': `Bearer ${localStorage.token}`
    })
  };

  constructor(private http: HttpClient) { }

  getCategory() {
    return this.http.get(this.baseUrl + 'category', this.httpOptions)
      .map( res => {
        return res;
      })
      .catch( err => {
        return Observable.throw(err);
      });
  }

  addCategory(name: any) {
    return this.http.post(this.baseUrl + 'category', { name: name }, this.httpOptions)
      .map( res => {
        return res;
      })
      .catch( err => {
        return Observable.throw(err);
      });
  }

  updateCategory(id: any, name: any) {
    return this.http.put(this.baseUrl + 'category/' + id, { name: name }, this.httpOptions)
      .map( res => {
        return res;
      })
      .catch( err => {
        return Observable.throw(err);
      });
  }

  deleteCategory(id: any) {
    return this.http.delete(this.baseUrl + 'category/' + id, this.httpOptions)
      .map( res => {
        return res;
      })
      .catch( err => {
        return Observable.throw(err);
      });
  }

}
