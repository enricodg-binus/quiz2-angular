import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignAuthComponent} from './component/sign-auth/sign-auth.component';
import {CategoryComponent} from './component/category/category.component';
import {HomeComponent} from './component/home/home.component';
import {NavComponent} from './component/nav/nav.component';
import {ItemComponent} from './component/item/item.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'item',
    component: ItemComponent,
  },
  {
    path: 'category',
    component: CategoryComponent,
  },
  {
    path: 'login',
    component: SignAuthComponent
  },
  {
    path: 'register',
    component: SignAuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
