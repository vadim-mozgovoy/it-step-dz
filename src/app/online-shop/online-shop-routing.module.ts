import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopCardsComponent } from './shop-cards/shop-cards.component';
import { OrderComponent } from './order/order.component';
import {AdminPageComponent} from "./admin-page/admin-page.component";
import {SignInComponent} from "./user/sign-in/sign-in.component";
import {RegistrationComponent} from "./user/registration/registration.component";


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
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnlineShopRoutingModule { }
