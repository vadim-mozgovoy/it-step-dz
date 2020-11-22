import {Component, OnInit} from '@angular/core';
import {OnlineShopService} from '../online-shop.service';
import {OrderDialogComponent} from '../order-dialog/order-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {DisplayedColumns, Product} from '../models';



@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  products: Product[];
  displayedColumns: DisplayedColumns[];


  constructor(private service: OnlineShopService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.products = this.service.getProducts();
  }

  openDialog(): void {
     this.dialog.open(OrderDialogComponent);
  }

  getTotalCost(): number {
    return 1000; // FIXME: поправить

  }

}


