import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertProviderService} from '../../services/alert-provider.service';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-sign-auth',
  templateUrl: './sign-auth.component.html',
  styleUrls: ['./sign-auth.component.css']
})
export class SignAuthComponent implements OnInit {

  hideLogin = false;
  model: any = {};
  returnUrl: string;

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute,
              private alertService: AlertProviderService) { }

  ngOnInit() {
    if (this.router.url === '/register') {
      this.hideLogin = true;
    } else if (this.router.url === '/login') {
      this.hideLogin = false;
    }

    // reset login status
    this.authService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  toggle() {
    this.hideLogin = !this.hideLogin;
    // this.display = this.visible ? 'block' : 'none';
  }

  login() {
    this.authService.login(this.model.email, this.model.password)
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
          console.log(data);
        },
        error => {
          console.log(error);
          this.alertService.error(error, false);
        });
  }

  register() {
    this.authService.register(this.model)
      .subscribe(
        data => {
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/login']);
        },
        error => {
          this.alertService.error(error, false);
        });
  }

}
