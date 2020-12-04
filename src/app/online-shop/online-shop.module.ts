import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "./shop-cards/material-modul";
import { OnlineShopRoutingModule } from './online-shop-routing.module';
import { ShopCardsComponent } from './shop-cards/shop-cards.component';
import { OrderComponent } from './order/order.component';
import {OrderDialogComponent} from "./order-dialog/order-dialog.component";
import {AdminPageComponent, AdminPageDialogComponent} from './admin-page/admin-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [ ShopCardsComponent, OrderComponent, OrderDialogComponent, AdminPageComponent, AdminPageDialogComponent],
  imports: [
    CommonModule,
    OnlineShopRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,

  ]
})
export class OnlineShopModule { }
