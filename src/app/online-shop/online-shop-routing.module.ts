import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopCardsComponent } from './shop-cards/shop-cards.component';
import { OrderComponent } from './order/order.component';
import {AdminPageComponent} from "./admin-page/admin-page.component";


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ShopCardsComponent
  },
  {
    path: 'order',
    component: OrderComponent
  },
  {
    path: 'admin-page',
    component: AdminPageComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnlineShopRoutingModule { }
