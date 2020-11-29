import {Component, OnInit} from '@angular/core';
import {OnlineShopService} from '../online-shop.service';
import {OrderDialogComponent} from '../order-dialog/order-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {Product} from '../models';


@Component({
  "selector": 'app-order',
  "templateUrl": './order.component.html',
  "styleUrls": ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  products: Product[];


  constructor(private service: OnlineShopService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.products = this.service.getProducts();
    console.log('world')
  }

  openDialog(): void {
    this.dialog.open(OrderDialogComponent);
  }

  // getSubtotal(): number{
  //   return this.products[0].price * this.products[0].quantity
  // }

  getTotalCost(): number {
    return this.products.map(t => t.subtotal).reduce((acc, value) => acc + value, 0);
  }

  deleteProduct(product) {
    this.service.deleteProduct(product)
    this.products = this.service.getProducts();
  }

}


