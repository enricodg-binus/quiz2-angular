import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SignAuthComponent } from './component/sign-auth/sign-auth.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from './services/auth.service';
import {AlertComponent} from './component/alert/alert.component';
import {AlertProviderService} from './services/alert-provider.service';
import { CategoryComponent } from './component/category/category.component';
import { HomeComponent } from './component/home/home.component';
import { NavComponent } from './component/nav/nav.component';
import {CategoryService} from './services/category.service';
import { ItemComponent } from './component/item/item.component';
import {ItemService} from './services/item.service';


@NgModule({
  declarations: [
    AppComponent,
    SignAuthComponent,
    AlertComponent,
    CategoryComponent,
    HomeComponent,
    NavComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [
    AuthService,
    AlertProviderService,
    CategoryService,
    ItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
