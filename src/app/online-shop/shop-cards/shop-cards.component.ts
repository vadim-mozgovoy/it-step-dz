import { Component, OnInit } from '@angular/core';
import {Product} from "../order/order.component";
import {OnlineShopService} from "../online-shop.service";


@Component({
  selector: 'app-shop-cards',
  templateUrl: './shop-cards.component.html',
  styleUrls: ['./shop-cards.component.scss']
})
export class ShopCardsComponent implements OnInit {

  products: Product[] ;



  constructor(private service: OnlineShopService) { }

  ngOnInit(): void {
    this.products = this.service.getProducts();
  }

}
