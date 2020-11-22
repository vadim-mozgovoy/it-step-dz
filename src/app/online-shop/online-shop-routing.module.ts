import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopCardsComponent } from './shop-cards/shop-cards.component';
import { OrderComponent } from './order/order.component';
import { ShopListComponent } from './shop-list/shop-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ShopCardsComponent
  },
  {
    path: 'list',
    component: ShopListComponent,
  },
  {
    path: 'order',
    component: OrderComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnlineShopRoutingModule { }
