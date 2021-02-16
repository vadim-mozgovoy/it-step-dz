import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models';
import { BasketShopService } from '../basket-shop.service';

@Component({
  selector: 'app-shop-card-tile',
  templateUrl: './shop-card-tile.component.html',
  styleUrls: ['./shop-card-tile.component.scss']
})
export class ShopCardTileComponent implements OnInit {
  @Input()
  product: Product;

  constructor(private service: BasketShopService) { }

  ngOnInit(): void {
  }

  addBasket(product: Product, count: string): void {
    this.service.addProducts(product, 1);
  }
}
