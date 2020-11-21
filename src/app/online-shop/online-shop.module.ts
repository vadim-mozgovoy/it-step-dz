import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnlineShopRoutingModule } from './online-shop-routing.module';
import { ShopListComponent } from './shop-list/shop-list.component';
import { ShopCardsComponent } from './shop-cards/shop-cards.component';
import { OrderComponent } from './order/order.component';


@NgModule({
  declarations: [ShopListComponent, ShopCardsComponent, OrderComponent],
  imports: [
    CommonModule,
    OnlineShopRoutingModule
  ]
})
export class OnlineShopModule { }
