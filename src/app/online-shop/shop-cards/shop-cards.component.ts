import {Component, OnInit} from '@angular/core';
import { Product} from "../models";
import {OnlineShopService} from "../online-shop.service";
import {BasketShopService} from "../basket-shop.service";



@Component({
  selector: 'app-shop-cards',
  templateUrl: './shop-cards.component.html',
  styleUrls: ['./shop-cards.component.scss']
})
export class ShopCardsComponent implements OnInit {

  products: Product[];



  constructor(private onlineShopService: OnlineShopService, private basketShopService: BasketShopService) {
  }

  ngOnInit(): void {
    this.products = this.onlineShopService.getProducts();
    console.log(this.products)
  }

  addBasket(): void {
    // this.basket = this.basketShopService.getProducts();
    // // this.basket.push(this.quantity)
    //
    // console.log(this.basket)
  }
}
