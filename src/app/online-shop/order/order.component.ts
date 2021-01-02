import {Component, OnInit} from '@angular/core';
import {OnlineShopService} from '../online-shop.service';
import {OrderDialogComponent} from '../order-dialog/order-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {Product} from '../models';
import {BasketShopService} from '../basket-shop.service';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  products: Product[];


  constructor(private service: BasketShopService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.products = this.service.getProducts();
  }

  openDialog(): void {
    this.dialog.open(OrderDialogComponent);
  }

  getTotalCost(): number {
    return this.products.map(t => t.price * t.quantity).reduce((acc, value) => acc + value, 0);
  }

  deleteProduct(product): void {
    this.service.deleteProduct(product);
    this.products = this.service.getProducts();
  }

}


