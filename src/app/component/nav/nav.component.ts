import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  loggedIn;
  user_data;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.checkAuth();
  }

  checkAuth() {
    // const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (localStorage.getItem('token')) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
  }

  logout() {
    localStorage.clear();
  }

}
