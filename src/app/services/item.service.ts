import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ItemService {

  baseUrl = 'https://contoh.gamelabnetwork.com/api/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': `Bearer ${localStorage.token}`
    })
  };

  constructor(private http: HttpClient) { }

  getItem() {
    return this.http.get(this.baseUrl + 'item', this.httpOptions)
      .map( res => {
        return res;
      })
      .catch( err => {
        return Observable.throw(err);
      });
  }

  addItem(name: any, price: any, stock: any, catid: any) {
    return this.http.post(this.baseUrl + 'item', { name: name, price: price, stock: stock , category_id: catid}, this.httpOptions)
      .map( res => {
        return res;
      })
      .catch(  err => {
        return Observable.throw(err);
      });
  }

  updateItem(id: any, name: any, price: any, stock: any, catid: any) {
    return this.http.put(this.baseUrl + 'item/' + id, { name: name, price: price, stock: stock, category_id: catid }, this.httpOptions)
      .map( res => {
        return res;
      })
      .catch( err => {
        return Observable.throw(err);
      });
  }

  deleteItem(id: any) {
    return this.http.delete(this.baseUrl + 'item/' + id, this.httpOptions)
      .map( res => {
        return res;
      })
      .catch( err => {
        return Observable.throw(err);
      });
  }

}
