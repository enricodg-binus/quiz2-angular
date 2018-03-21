import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../services/category.service';
import {ItemService} from '../../services/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  data: any = {};
  model: any = {};

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.getItem();
  }

  getItem() {
    this.itemService.getItem().subscribe(
      res => {
        console.log(res);
        this.data = res;
      },
      err => {
        console.log(err);
      }
    );
  }

  addItem(name: any, price: any, stock: any, catid: any) {
    this.itemService.addItem(name, price, stock, catid).subscribe(
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

  updateItem(id: any, name: any, price: any, stock: any, catid: any) {
    this.itemService.updateItem(id, name, price, stock, catid).subscribe(
      res => {
        window.alert('sukses');
        window.location.reload(true);
      },
      err => {
        window.alert('gagal');
      }
    );
  }

  deleteItem(id: any) {
    this.itemService.deleteItem(id).subscribe(
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
