import {Component, OnInit} from '@angular/core';
import {Product} from "../models";
import {OnlineShopService} from "../online-shop.service";


@Component({
  selector: 'app-shop-cards',
  templateUrl: './shop-cards.component.html',
  styleUrls: ['./shop-cards.component.scss']
})
export class ShopCardsComponent implements OnInit {

  products: Product[];


  constructor(private onlineShopService: OnlineShopService) {
  }

  ngOnInit(): void {
    this.onlineShopService.getProducts()
      .subscribe(items => this.products = items);
  }


}
