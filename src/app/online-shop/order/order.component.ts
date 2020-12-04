import { Component, OnInit } from '@angular/core';
import { OnlineShopService } from '../online-shop.service';
import { OrderDialogComponent } from '../order-dialog/order-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Product } from '../models';
import { BasketShopService } from '../basket-shop.service';


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

  // getSubtotal(): number{
  //   return this.products[0].price * this.products[0].quantity
  // }

  getTotalCost(): number {
    return this.products.map(t => t.subtotal).reduce((acc, value) => acc + value, 0);
  }

  deleteProduct(product): void {
    this.service.deleteProduct(product);
    this.products = this.service.getProducts();
  }

  addProduct(product) {

  }

}


