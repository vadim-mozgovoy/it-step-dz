import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from "./shop-cards/material-modul";
import {OnlineShopRoutingModule} from './online-shop-routing.module';
import {ShopCardsComponent} from './shop-cards/shop-cards.component';
import {OrderComponent} from './order/order.component';
import {OrderDialogComponent} from "./order-dialog/order-dialog.component";
import {AdminPageComponent, AdminPageDialogComponent} from './admin-page/admin-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ShopCardTileComponent} from './shop-card-tile/shop-card-tile.component';
import {SignInComponent} from './user/sign-in/sign-in.component';
import {RegistrationComponent} from './user/registration/registration.component';
import {AngularFireModule} from "@angular/fire";
import {AngularFireAuthModule} from "@angular/fire/auth";
import {environment} from "../../environments/environment";


@NgModule({
  declarations: [ShopCardsComponent, OrderComponent, OrderDialogComponent,
    AdminPageComponent, AdminPageDialogComponent, ShopCardTileComponent,
    SignInComponent, RegistrationComponent],
  imports: [
    CommonModule,
    OnlineShopRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule

  ]
})
export class OnlineShopModule {
}
