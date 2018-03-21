import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  data: any = {};
  model: any = {};

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.getCategory();
  }

  getCategory() {
    this.categoryService.getCategory().subscribe(
      res => {
        console.log(res);
        this.data = res;
      },
      err => {
        console.log(err);
      }
    );
  }

  addCategory(name: any) {
    this.categoryService.addCategory(name).subscribe(
      res => {
        console.log(res);
        window.alert('sukses');
        window.location.reload(true);
      },
      err => {
        window.alert('gagal');
        console.log(err);
      }
    );
  }

  updateCategory(id: any, name: any) {
    this.categoryService.updateCategory(id, name).subscribe(
      res => {
        window.alert('sukses');
        window.location.reload(true);
      },
      err => {
        window.alert('gagal');
      }
    );
  }

  deleteCategory(id: any) {
    this.categoryService.deleteCategory(id).subscribe(
      res => {
        window.alert('sukses');
        window.location.reload(true);
      },
      err => {
        window.alert('gagal');
      }
    );
  }

}
